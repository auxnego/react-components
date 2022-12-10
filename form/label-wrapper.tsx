import React from "react";
import clsx from "clsx";

//types
import {
  LabelWrapperProps
} from "./form.d";

export default function LabelWrapper(props:LabelWrapperProps){
  //default props
  let {
    children = null,
    id,
    label = id,
    setProps = {root:{}, label:{}},
    setClass = {root:"", label:""},
    ...more
  } = props;

  //props
  let __props = {
    root:{
      ...more, 
      ...setProps.root!,
      className:clsx(setClass.root!)
    },
    label:{
      ...setProps.label!,
      className:clsx(setClass.label!)
    }
  };

  return (
    <div { ...__props.root }>
      { label ? <label {...__props.label} htmlFor={id} >{label}</label>
              : null
      }

      { children }

    </div>
  );
}
