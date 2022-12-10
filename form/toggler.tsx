import React, { useState, Attributes, MouseEventHandler } from "react";
import clsx from "clsx";

//types
import {
  TogglerProps
} from "./form.d";

export default function Toggler(props:TogglerProps){
  //default props
  let {
    classless = false,
    className = "",
    name,
    id = name,
    initialStatus = false,
    onClick,
    setClass = {root:"", label:"", input:"", on:"", off:""},
    setProps = {root:{}, label:{}, input:{}},
    size = "",
    statusText = {},
    offValue = "0",
    onValue = "1",
    ...more
  } = props;

  let __withStatusText:boolean = !!Object.keys(statusText).length;

  //states
  let [$status, setStatus] = useState<boolean>(initialStatus);
  
  //controllers
  let __handleClick:MouseEventHandler<HTMLElement> = (e) => {
    if(onClick) onClick(e);
    setStatus(!$status);
  };

  //classNames
  let __classNames = {

    root:[!classless && {
      "toggler__root":true,
      "toggler__on":$status
    }, className, setClass.root!],

    label:[!classless && {
      "toggler__label":true
    }, setClass.label!],

    input:[!classless && {
      "toggler__input":true
    }, setClass.input!],

    on:[!classless && {
      "toggler__on":true,
      "toggler__on--actived":$status
    }, setClass.on!],

    off:[!classless && {
      "toggler__off":true,
      "toggler__off--actived":!$status
    }, setClass.off!],
    
  };

  //props
  let __props = {
    root:{
      ...more,
      ...setProps.root,
      className:clsx(__classNames.root),
      onClick:__handleClick
    } as Attributes,

    label:{
      ...setProps.label,
      htmlFor:id,
      className:clsx(__classNames.label)
    } as Attributes,

    input:{
      ...setProps.input,
      className:clsx(__classNames.input)
    } as Attributes,

    on:{
      className:clsx(__classNames.on)
    } as Attributes,

    off:{
      className:clsx(__classNames.off)
    } as Attributes,

    hiddenInput:{
      type:"hidden",
      name,
      id,
      value: $status ? onValue : offValue
    } as Attributes
  };

  //views
  return (
    <div {...__props.root}>
      <div {...__props.input}>
        <input {...__props.hiddenInput} />
        <div {...__props.on} />
        <div {...__props.off} />
      </div>
      {__withStatusText ? <label {...__props.label}>{ $status ? statusText.on : statusText.off }</label> : null}
    </div>
  );
}
