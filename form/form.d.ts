import {
  PropsWithChildren,
  //types for html
  AllHTMLAttributes
} from "react";

//global types
import {
  ClassNameConfig,
  Config
} from "../global.d";


/** LabelWrapper Component **/

export type LabelWrapperMainProps = {
  label?:string,
  id:string
};

export type LabelWrapperProps = LabelWrapperMainProps &
                                PropsWithChildren &
                                Config<
                                  {root?:string, label?:string},
                                  {root?:object, label?:object}, {}> &
                                AllHTMLAttributes<HTMLElement>;


/** Input Component **/

export type InputMainProps = {
  name?:string,
  pre?:any,
  post?:any
};

export type InputProps = InputMainProps &
                         LabelWrapperMainProps &
                         ClassNameConfig &
                         InputHTMLAttributes<HTMLInputElement> &
                         Config<
                           {root?:string, label?:string, input?:string, union?:string},
                           {root?:object, label?:object, input?:object, union?:object},
                           {}
                         >;
