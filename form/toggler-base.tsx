import React, { useState, Attributes, MouseEventHandler } from "react";
import clsx from "clsx";

//types
import {
  TogglerBaseProps
} from "./form.d";

export default function TogglerBase(props:TogglerBaseProps){
  //default props
  let {
    classless = false,
    className = "",
    name,
    id = name,
    initialStatus = false,
    onClick,
    setClass = {},
    setProps = {},
    size = "",
    statusText = {},
    offValue = "0",
    onValue = "1",
    ...more
  } = props;

  setClass = {...setClass, root:"", label:"", container:"", input:"", on:"", off:"" };
  setProps = {...setProps, root:{}, label:{}, container:{}, input:{} };

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
      "toggler-base__root":true,
      "toggler-base__on":$status
    }, className, setClass.root!],

    label:[!classless && {
      "toggler-base__label":true
    }, setClass.label!],

    container:[!classless && {
      "toggler-base__container":true
    }, setClass.container!],

    input:[!classless && {
      "toggler-base__input":true
    }, setClass.input!],

    on:[!classless && {
      "toggler-base__on":true,
      "toggler-base__on--actived":$status
    }, setClass.on!],

    off:[!classless && {
      "toggler-base__off":true,
      "toggler-base__off--actived":!$status
    }, setClass.off!],
    
  };

  //props
  let __props = {
    root:{
      ...more,
      ...setProps.root!,
      className:clsx(__classNames.root),
      onClick:__handleClick
    } as Attributes,

    container:{
      ...setProps.container!,
      className:clsx(__classNames.container)
    } as Attributes,

    label:{
      ...setProps.label!,
      htmlFor:id,
      className:clsx(__classNames.label)
    } as Attributes,

    input:{
      ...setProps.input!,
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
      <div {...__props.container}>
        <div {...__props.input}>
          <input {...__props.hiddenInput} />
          <div {...__props.on} />
          <div {...__props.off} />
        </div>
      </div>
      {__withStatusText ? <label {...__props.label}>{ $status ? statusText.on : statusText.off }</label> : null}
    </div>
  );
}
