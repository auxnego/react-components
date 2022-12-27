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

import {
  MenuItemMainProps
} from "../list/list.d";

import {
  ButtonMainProps
} from "../button/button.d.ts";

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


/** Select Component **/

export type SelectMainProps = {
  getIndicatorContent?:(
    selections:string[], 
    options:MenuItemMainProps[], 
    multiple?:boolean = false
  ) => any, 
  multiple?:boolean,
  name?:string,
  options?:MenuItemMainProps[],
  onSelection?:(e:string[]|number[]) => void,
  pre?:any,
  post?:any,
  splitter?:string
};

export type SelectProps = LabelWrapperMainProps &
                          ClassNameConfig &
                          AllHTMLAttributes<HTMLElement> &
                          Config<
                            {root?:string, label?:string, input?:string, indicator?:string, indicatorContent?:string, menu?:string, option?:string, icon?:string},
                            {root?:object, label?:object, input?:object, indicator?:object, indicatorContent?:object, menu?:object, option?:object, icon?:object},
                            {}
                          > &
                          SelectMainProps;


/** Submit Component **/

export type SubmitMainProps = {
  loading:boolean,
  loadingLabel?:ReactNode
}

export type SubmitProps = ButtonMainProps &
                          PropsWithChildren &
                          Config<
                            {root?:string, loading?:string},
                            {root?:object, loading?:object},
                            {}
                          > &
                          AllHTMLAttributes<HTMLElement> &
                          SubmitMainProps;

/*** TYPES FOR HOOKS ***/

export type UseSelectHookReturnValue = {

  handleOption:MouseEventHandler<HTMLLIElement>,
  selections:string[],

};
