import React, { Attributes } from "react";
import clsx from "clsx";

import Icon from "./fontawesome";

//types
import {
  LoadingProps
} from "./icon.d";

export default function Loading(props:LoadingProps){
  //default props
  let {
    classless = false,
    className = "",
    setEl = "i",
    ...more
  } = props;

  //classNames
  let __className = [!classless && {
    "animate-spin":true
  }, className];

  //props
  let __props = {
    ...more,
    className:clsx(__className),
    to:"spinner",
    setEl
  } as Attributes;

  //views
  return <Icon {...__props} />;
}
