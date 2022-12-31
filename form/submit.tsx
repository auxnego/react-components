import React, { Attributes } from "react";
import clsx from "clsx";

import { Button } from "../button";
import LoadingIcon from "../icon/loading";

//types
import {
  SubmitProps
} from "./form.d";

export default function Submit(props:SubmitProps){
  //default props
  let {
    children = null,
    classless = false,
    className = "",
    loading,
    loadingLabel = children,
    setClass = {},
    setProps = {},
    ...more
  } = props;

  setClass = {...setClass, root:"", loading:""};
  setProps = {...setProps, root:{}, loading:{}};
  //classNames
  let __classNames = {

    root:[!classless && {
      "button__submit":true
    }, className, setClass.root!],

    loading:[!classless && {
      "button__submit--loading":true
    }, setClass.loading!]

  };

  //props
  let __props = {

    loading:{
      ...setProps.loading!,
      disabled:true,
      className:clsx(__classNames.loading)
    } as Attributes,

    root:{
      ...more,
      ...setProps.root!,
      type:"submit",
      className:clsx(__classNames.root)
    } as Attributes

  };

  //views
  return loading ? <Button {...__props.loading}><LoadingIcon />{loadingLabel}</Button> : 
                   <Button {...__props.root}>{children}</Button>;
}
