import React, { Attributes, MouseEventHandler } from "react";
import clsx from "clsx";

//types
import {
  ButtonProps
} from "./button.d";

export default function Button(props:ButtonProps){
  //default props
  let {
    children = null,
    className = "",
    classless = false,
    setEl = "button",
    role = "button",
    disabled = false,
    onClick,
    ...more
  } = props;

  let __handleClick:MouseEventHandler<HTMLElement> = (e) => {
    //actions are prohibts when button is disabled
    if(!disabled){
      if(onClick) onClick(e);
    }
  };

  //classNames
  let __className = [!classless && {
    "button":true,
    "button--disabled":!!disabled
  }, className];

  //props
  let __props = {
    ...more,
    role,
    className:clsx(__className),
    disabled,
    onClick:__handleClick
  } as Attributes;

  //views
  return React.createElement(setEl, __props, children);
}
