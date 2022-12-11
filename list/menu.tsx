import React, { Attributes, ReactNode } from "react";
import clsx from "clsx";

//types
import {
  MenuItemProps,
  MenuProps
} from "./list.d";

export default function Menu(props:MenuProps){
  //default props
  let {
    classless = false,
    className = "",
    classPrefix = "menu",
    items,
    ordered = false,
    onEmpty = null,
    setClass = {root:"", item:""},
    setProps = {root:{}, item:{}},
    ...more
  } = props;

  //classNames
  let __classNames = {
    root:[!classless && {
      [`${classPrefix}__root`]:true
    }, className, setClass.root!],

    item:[!classless && {
      [`${classPrefix}__item`]:true
    }, setClass.item!]
  };

  //props
  let __props = {
    root:{
      ...more,
      ...setProps.root!,
      className:clsx(__classNames.root)
    } as Attributes,

    item:{
      ...setProps.item!,
      className:clsx(__classNames.item)
    } as Attributes
  };

  //views
  let __children:any;

  if(!items.length){
    if(onEmpty){
       __children = [<li {...__props.item} key="1">{onEmpty}</li>];
    }
  }else{
    __children = items.filter((e:any) => {
                     return !!Object.keys(e).length;
                   }).map((e:MenuItemProps, i:any) => {
                     let { content, textContent, ...more} = e;
                     return React.createElement("li", {...more, ...__props.item, key:i }, content);
                   }); 
  }

  //render
  return React.createElement(
    ordered ? "ol" : "ul",
    __props.root,
    __children
  );
}
