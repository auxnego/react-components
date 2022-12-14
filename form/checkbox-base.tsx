import React, { useState, Attributes, MouseEventHandler } from "react";
import clsx from "clsx";

//types
import {
  CheckboxBaseProps
} from "./form.d";

export default function CheckboxBase(props:CheckboxBaseProps){
  //default props
  let {
    className = "",
    classPrefix = "checkbox-base",
    classless = false,
    icon = null,
    id,
    name = id,
    value,
    onClick,
    setClass = {},
    setProps = {},
    ...more
  } = props;

  setClass = {...setClass, root:"", input:"", icon:"" };
  setProps = {...setProps, root:{}, input:{}, icon:{} };

  //states
  let [$checked, setChecked] = useState<boolean>(!!more.checked);

  //controllers
  let __clickHandler:MouseEventHandler = (e) => {
    if(onClick) onClick(e) ;
    setChecked(!$checked);
  };

  //classNames
  let __classNames = {
    root:[!classless && {
      [`${classPrefix}__root`]:true,
      [`${classPrefix}__root--checked`]:$checked
    }, setClass.root, className],

    input:[!classless && {
      [`${classPrefix}__input`]:true
    }, setClass.input!],

    icon:[!classless && {
      [`${classPrefix}__icon`]:true,
      "fa":true,
      "fa-check":true
    }, setClass.icon!]
  };

  //props
  let __props = {
    root:{
      ...setProps.root!,
      className:clsx(__classNames.root)
    } as Attributes,

    input:{
      ...more,
      ...setProps.input!,
      className:clsx(__classNames.input),
      id,
      name,
      onClick:__clickHandler,
      type:"checkbox",
      value
    } as Attributes,

    icon:{
      ...setProps.icon!,
      className:clsx(__classNames.icon)
    } as Attributes

  };

  //views
  let __icon = icon ? icon : <i {...__props.icon} />;

  return (
    <div {...__props.root}>
      <input {...__props.input} />
      { $checked ? __icon : null}
    </div>
  );
}
