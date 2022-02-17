import React, { memo, FC, ComponentType } from "react";
import { createPortal } from "react-dom";
import { compose } from "redux";
import withSite from "~hoc/withSite";
import { findDa } from "~helpers/mode";

export const imgSelector = ".dev-view-deviation img.dev-content-full";

export interface DeviantArtProps {
    mount: Element;
}

const DeviantArt: FC<DeviantArtProps> = ({ mount, children }) => createPortal(<>{children}</>, mount);

export default compose(withSite(findDa(), imgSelector), memo)(DeviantArt) as ComponentType;
