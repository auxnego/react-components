import {
  PropsWithChildren,
  //types for html
  AllHTMLAttributes,
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode
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


/** Checkbox Base Component **/

export type CheckboxBaseMainProps = {
  id:string,
  name?:string,
  value:string,
  onClick:MouseEventHandler
};

export type CheckboxBaseProps = ClassNameOptions &
                                DivHTMLAttibutes<HTMLDivElement> &
                                Config<
                                  {root?:string, input?:string, icon?:string },
                                  {root?:object, input?:object, icon?:object},
                                  {}
                                > &
                                InputMainProps;

/** Radio Base Component **/

export type RadioBaseMainProps = {
  id?:string,
  name:string,
  value:string,
  onChange?:ChangeEventHandler<HTMLInputElement>
};

export type RadioBaseProps = ClassNameOptions &
                             Config<
                               {root?:string, input?:string, sign?:string},
                               {root?:object, input?:object, sign?:object},
                               {}
                             > &
                             InputHTMLAttributes<HTMLInputElement> &
                             RadioBaseMainProps;


/** Toggler Component **/

export type TogglerMainProps = {
  name:string,
  id?:string,
  initialStatus?:boolean,
  onClick?:MouseEventHandler<HTMLElement>,
  offValue?:string,
  onValue?:string,
  size?:"sm",
  statusText?:{on?:ReactNode, off?:ReactNode}
};

export type TogglerProps = AllHTMLAttributes<HTMLElement> & 
                           Config<
                             {root?:string, label?:string, input?:string, on?:string, off?:string},
                             {root?:object, label?:object, input?:object}> & 
                           ClassNameConfig &
                           TogglerMainProps;
