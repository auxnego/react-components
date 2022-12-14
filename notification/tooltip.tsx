import React, { Attributes } from "react";
import clsx from "clsx";

//types
import {
  TooltipProps
} from "./notification.d";

export default function Tooltip(props:TooltipProps){
  //default props
  let {
    children = null,
    classless = false,
    className = "",
    open,
    setClass={},
    setProps={},
    setEl={},
    ...more
  } = props;

  setClass = { ...setClass, root:"", arrow:"", content:"" };
  setProps = { ...setProps, root:{}, arrow:{}, content:{} }; 
  setEl = { ...setEl, root:"div", arrow:"div", content:"div" };

  //classNames
  let __classNames = {

    root:[!classless && {
      "tooltip__root":true
    }, className, setClass.root!],

    arrow:[!classless && {
      "tooltip__arrow":true
    }, setClass.arrow!],

    content:[!classless && {
      "tooltip__content":true
    }, setClass.content]

  };

  //props
  let __props = {

    root:{
      ...more,
      ...setProps.root!,
      className:clsx(__classNames.root)
    } as Attributes,

    arrow:{
      ...setProps.arrow!,
      className:clsx(__classNames.arrow)
    } as Attributes,

    content:{
      ...setProps.content!,
      className:clsx(__classNames.content)
    } as Attributes

  };

  //views
  return open ? React.createElement(setEl.root!, __props.root, <>
    { React.createElement(setEl.arrow!, __props.arrow) }
    { React.createElement(setEl.content!, __props.content, children) }

  </>) : null;
}
