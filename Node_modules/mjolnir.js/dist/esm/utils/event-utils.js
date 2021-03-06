const DOWN_EVENT = 1;
const MOVE_EVENT = 2;
const UP_EVENT = 4;
const MOUSE_EVENTS = {
  pointerdown: DOWN_EVENT,
  pointermove: MOVE_EVENT,
  pointerup: UP_EVENT,
  mousedown: DOWN_EVENT,
  mousemove: MOVE_EVENT,
  mouseup: UP_EVENT
};
const MOUSE_EVENT_WHICH_LEFT = 1;
const MOUSE_EVENT_WHICH_MIDDLE = 2;
const MOUSE_EVENT_WHICH_RIGHT = 3;
const MOUSE_EVENT_BUTTON_LEFT = 0;
const MOUSE_EVENT_BUTTON_MIDDLE = 1;
const MOUSE_EVENT_BUTTON_RIGHT = 2;
const MOUSE_EVENT_BUTTONS_LEFT_MASK = 1;
const MOUSE_EVENT_BUTTONS_RIGHT_MASK = 2;
const MOUSE_EVENT_BUTTONS_MIDDLE_MASK = 4;
export function whichButtons(event) {
  const eventType = MOUSE_EVENTS[event.srcEvent.type];

  if (!eventType) {
    return null;
  }

  const {
    buttons,
    button,
    which
  } = event.srcEvent;
  let leftButton = false;
  let middleButton = false;
  let rightButton = false;

  if (eventType === UP_EVENT || eventType === MOVE_EVENT && !Number.isFinite(buttons)) {
    leftButton = which === MOUSE_EVENT_WHICH_LEFT;
    middleButton = which === MOUSE_EVENT_WHICH_MIDDLE;
    rightButton = which === MOUSE_EVENT_WHICH_RIGHT;
  } else if (eventType === MOVE_EVENT) {
    leftButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_LEFT_MASK);
    middleButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_MIDDLE_MASK);
    rightButton = Boolean(buttons & MOUSE_EVENT_BUTTONS_RIGHT_MASK);
  } else if (eventType === DOWN_EVENT) {
    leftButton = button === MOUSE_EVENT_BUTTON_LEFT;
    middleButton = button === MOUSE_EVENT_BUTTON_MIDDLE;
    rightButton = button === MOUSE_EVENT_BUTTON_RIGHT;
  }

  return {
    leftButton,
    middleButton,
    rightButton
  };
}
export function getOffsetPosition(event, rootElement) {
  const {
    srcEvent
  } = event;

  if (!event.center && !Number.isFinite(srcEvent.clientX)) {
    return null;
  }

  const center = event.center || {
    x: srcEvent.clientX,
    y: srcEvent.clientY
  };
  const rect = rootElement.getBoundingClientRect();
  const scaleX = rect.width / rootElement.offsetWidth || 1;
  const scaleY = rect.height / rootElement.offsetHeight || 1;
  const offsetCenter = {
    x: (center.x - rect.left - rootElement.clientLeft) / scaleX,
    y: (center.y - rect.top - rootElement.clientTop) / scaleY
  };
  return {
    center,
    offsetCenter
  };
}
//# sourceMappingURL=event-utils.js.map