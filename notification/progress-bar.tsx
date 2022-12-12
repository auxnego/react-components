import React, { Attributes } from "react";
import clsx from "clsx";

//types
import {
  ProgressBarProps
} from "./notification.d";

export default function ProgressBar(props:ProgressBarProps){
  //default props
  let {
    classless = false,
    className = "",
    current = 0,
    indicatorFn,
    indeterminate = false,
    setClass = {root:"", bar:""},
    setProps = {root:{}, bar:{}},
    setEl = {bar:"div", barWrapper:"div"},
    total = 0,
    ...more
  } = props;

  let percent = (current * 100) / total;

  //classNames
  let __classNames = {

    root:[!classless && {
      "progress-bar__root":true,
      "progress-bar__root--indeterminate":indeterminate
    }, className, setClass.root!],

    barWrapper:[!classless && {
      "progress-bar__bar":true
    }, setClass.barWrapper!],

    bar:[!classless && {
      "progress-bar__indicator":true,
      [`progress-bar__indicator--${percent}`]:!indeterminate
    }, setClass.bar!]

  };

  //props
  let __props = {

    root:{
      ...more,
      ...setProps.root!,
      className:clsx(__classNames.root)
    } as Attributes,

    barWrapper:{
      ...setProps.barWrapper,
      className:clsx(__classNames.barWrapper)
    } as Attributes,

    bar:{
      ...setProps.bar,
      className:clsx(__classNames.bar)
    } as Attributes

  };

  //views
  return (
    <div {...__props.root} >
      { indicatorFn ? indicatorFn(current, total, indeterminate) : null }
      { React.createElement(setEl.barWrapper!, __props.barWrapper,
          React.createElement(setEl.bar!, __props.bar) 
        ) 
      }
    </div>
  );
}
