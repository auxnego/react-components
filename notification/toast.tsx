import React, { useEffect, useState, Attributes } from "react";
import clsx from "clsx";

//types
import {
  ToastProps
} from "./notification.d";

export default function Toast(props:ToastProps){
  //default props
  let {
    children = null,
    classless = false,
    className = "",
    closeTime = 0,
    onClose,
    open = false,
    setEl = "div",
    ...more
  } = props;

  //states
  let [$open, setOpen] = useState<boolean>(open);

  //controllers
  useEffect(() => {
    //close after time
    if(closeTime && open){
      let ID = setInterval(() => {
        setOpen(false);
        clearInterval(ID);
      }, closeTime);
    }
  });

  //classNames
  let __className = [!classless && {
    "toats":true
  }, className];

  //props
  let __props = {
    ...more,
    className:clsx(__className)
  } as Attributes;

  //views
  return open ? React.createElement(setEl, __props, children) : null;
}
