import { ComponentClass, FC} from "react";

export type BasicConfig = {
  setEl?: string|FC|ComponentClass
};

export type Config<ClassName = {}, Props = {}, Element = {}> = {
  setEl?:Element,
  setProps?:Props,
  setClass?:ClassName
};



export type ClassNameConfig = {
  classless?:boolean,
  classPrefix?:string,
  className?:string,
};
