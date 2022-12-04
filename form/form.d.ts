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

export type LabelWrapperProps = PropsWithChildren &
                                Config<
                                  {root?:string, label?:string},
                                  {root?:object, label?:object}, {}> &
                                AllHTMLAttributes<HTMLElement> &
                                LabelWrapperMainProps;


/** Input Component **/

export type InputMainProps = {
  name?:string,
  pre?:any,
  post?:any,
  type?: "text"   |
         "email"  |
         "search" |
         "number"
};

export type InputProps = LabelWrapperMainProps &
                         PropsWithChildren &
                         ClassNameConfig &
                         InputHTMLAttributes<HTMLInputElement> &
                         Config<
                           {root?:string, label?:string, input?:string, union?:string},
                           {root?:object, label?:object, input?:object, union?:object},
                           {}
                         > &
                         InputMainProps;
