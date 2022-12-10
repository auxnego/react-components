import React, { useState, Attributes, FocusEventHandler, ChangeEventHandler } from "react";
import clsx from "clsx";

import Wrapper from "./label-wrapper";

//types
import {
  InputProps
} from "./form.d";

export default function Input(props:InputProps){
  //default props
  let {
    children = null,
    classless = false,
    className = "",
    classPrefix = "input",
    id,
    label = "",
    name = id,
    pre = null,
    post = null,
    setClass = {root:"", label:"", input:"", union:""},
    setProps = {root:{}, label:{}, input:{}, union:{}},
    ...more
  } = props;

  //states
  let [$focused, setFocus] = useState<boolean>(false);
  let [$value, setValue] = useState<string>(more.defaultValue || more.value || "");

  //controllers
  let __blurHandler:FocusEventHandler = (e) => {
    setFocus(false);
  };

  let __changeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  let __focusHandler:FocusEventHandler = (e) => {
    setFocus(true);
  };

  //classNames
  let __classNames = {

    root:[!classless && {
      [`${classPrefix}__root`]:true,
      [`${classPrefix}__root--focus`]:$focused,
      [`${classPrefix}__root--filled`]:!!$value
    }, className, setClass.root!],

    label:[!classless && {
      [`${classPrefix}__label`]:true
    }, setClass.label!],

    input:[!classless && {
      [`${classPrefix}`]:true
    }, setClass.input!],

    union:[!classless && {
      [`${classPrefix}__union`]:true
    }, setClass.union!],

  };

  //props
  let __props = {
    //label-wrapper
    wrapper:{
      id,
      label,
      setProps:{
        root:setProps.root!,
        label:setProps.label!
      },
      setClass:{
        root:clsx(__classNames.root),
        label:clsx(__classNames.label)
      }
    },
    //div
    union:{
      ...setProps.union!,
      className:clsx(__classNames.union)
    } as Attributes,
    //input
    input:{
      ...more,
      ...setProps.input!,
      className:clsx(__classNames.input),
      id,
      name,
      onFocus:__focusHandler,
      onBlur:__blurHandler,
      onChange:__changeHandler
    } as Attributes
  };

  //views
  return (
    <Wrapper {...__props.wrapper}>
      <div {...__props.union}>
        {pre}
        <input {...__props.input}/>
        {post}
      </div>
      { children }
    </Wrapper>
  );
}
