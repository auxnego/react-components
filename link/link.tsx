import React, { Attributes } from "react";
import clsx from "clsx";

//types
import {
  LinkProps
} from "./link.d";

export default function Link(props:LinkProps){
  //default props
  let {
    children = null,
    classless = false,
    className = "",
    disabled = false,
    ...more
  } = props;

  let el = disabled ? "span" : "a";

  //classNames
  let __className = [!classless && {
   "link":true,
   "link--disabled":disabled
  }, className];

  //props
  let __props = {
    ...more,
    className:clsx(__className),
    disabled
  } as Attributes;

  //views
  return React.createElement(el, __props, children);
}
