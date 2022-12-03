import { ComponentClass, FC} from "react";

export type BasicConfig = {
  setEl?: string|FC|ComponentClass
};

export type Config<ClassName = {}, Props = {}, Element = {}> = {
  setEl?:Element,
  setProp?:Props,
  setClas:ClassName
};



export type ClassNameConfig = {
  classless?:boolean,
  classPeefix?:string,
  className?:string,
};
