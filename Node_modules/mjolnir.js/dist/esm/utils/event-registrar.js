import { whichButtons, getOffsetPosition } from './event-utils';
const DEFAULT_OPTIONS = {
  srcElement: 'root',
  priority: 0
};
export default class EventRegistrar {
  constructor(eventManager) {
    this.eventManager = eventManager;
    this.handlers = [];
    this.handlersByElement = new Map();
    this.handleEvent = this.handleEvent.bind(this);
    this._active = false;
  }

  isEmpty() {
    return !this._active;
  }

  add(type, handler, opts, once = false, passive = false) {
    const {
      handlers,
      handlersByElement
    } = this;

    if (opts && (typeof opts !== 'object' || opts.addEventListener)) {
      opts = {
        srcElement: opts
      };
    }

    opts = opts ? Object.assign({}, DEFAULT_OPTIONS, opts) : DEFAULT_OPTIONS;
    let entries = handlersByElement.get(opts.srcElement);

    if (!entries) {
      entries = [];
      handlersByElement.set(opts.srcElement, entries);
    }

    const entry = {
      type,
      handler,
      srcElement: opts.srcElement,
      priority: opts.priority
    };

    if (once) {
      entry.once = true;
    }

    if (passive) {
      entry.passive = true;
    }

    handlers.push(entry);
    this._active = this._active || !entry.passive;
    let insertPosition = entries.length - 1;

    while (insertPosition >= 0) {
      if (entries[insertPosition].priority >= entry.priority) {
        break;
      }

      insertPosition--;
    }

    entries.splice(insertPosition + 1, 0, entry);
  }

  remove(type, handler) {
    const {
      handlers,
      handlersByElement
    } = this;

    for (let i = handlers.length - 1; i >= 0; i--) {
      const entry = handlers[i];

      if (entry.type === type && entry.handler === handler) {
        handlers.splice(i, 1);
        const entries = handlersByElement.get(entry.srcElement);
        entries.splice(entries.indexOf(entry), 1);

        if (entries.length === 0) {
          handlersByElement.delete(entry.srcElement);
        }
      }
    }

    this._active = handlers.some(entry => !entry.passive);
  }

  handleEvent(event) {
    if (this.isEmpty()) {
      return;
    }

    const mjolnirEvent = this._normalizeEvent(event);

    let target = event.srcEvent.target;

    while (target && target !== mjolnirEvent.rootElement) {
      this._emit(mjolnirEvent, target);

      if (mjolnirEvent.handled) {
        return;
      }

      target = target.parentNode;
    }

    this._emit(mjolnirEvent, 'root');
  }

  _emit(event, srcElement) {
    const entries = this.handlersByElement.get(srcElement);

    if (entries) {
      let immediatePropagationStopped = false;

      const stopPropagation = () => {
        event.handled = true;
      };

      const stopImmediatePropagation = () => {
        event.handled = true;
        immediatePropagationStopped = true;
      };

      const entriesToRemove = [];

      for (let i = 0; i < entries.length; i++) {
        const {
          type,
          handler,
          once
        } = entries[i];
        handler(Object.assign({}, event, {
          type,
          stopPropagation,
          stopImmediatePropagation
        }));

        if (once) {
          entriesToRemove.push(entries[i]);
        }

        if (immediatePropagationStopped) {
          break;
        }
      }

      for (let i = 0; i < entriesToRemove.length; i++) {
        const {
          type,
          handler
        } = entriesToRemove[i];
        this.remove(type, handler);
      }
    }
  }

  _normalizeEvent(event) {
    const rootElement = this.eventManager.element;
    return Object.assign({}, event, whichButtons(event), getOffsetPosition(event, rootElement), {
      handled: false,
      rootElement
    });
  }

}
//# sourceMappingURL=event-registrar.js.map