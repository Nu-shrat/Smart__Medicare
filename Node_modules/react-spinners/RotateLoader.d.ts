/** @jsx jsx */
import * as React from "react";
import { SerializedStyles } from "@emotion/react";
import { LoaderSizeMarginProps } from "./interfaces";
declare class Loader extends React.PureComponent<Required<LoaderSizeMarginProps>> {
    static defaultProps: Required<LoaderSizeMarginProps>;
    style: (i: number) => SerializedStyles;
    ball: () => SerializedStyles;
    wrapper: () => SerializedStyles;
    long: () => SerializedStyles;
    short: () => SerializedStyles;
    render(): JSX.Element | null;
}
export default Loader;
