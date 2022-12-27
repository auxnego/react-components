import React, { Attributes } from "react";
import clsx from "clsx";

//types
import {
  FontAwesomeProps
} from "./icon.d";

export default function FontAwesome(props:FontAwesomeProps){
  //default props
  let {
    base = "fa",
    classless = false,
    className = "",
    setEl = "i",
    to,
    ...more
  } = props;

  //classNames
  let __className = [!classless && `${base} fa-${to}`, className];

  //props
  let __props = {
    ...more,
    className:clsx(__className)
  } as Attributes;

  //views
  return React.createElement(setEl, __props);
}
