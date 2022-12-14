import {
  Attributes, 
  AllHTMLAttributes, 
  ReactNode, 
  FC, 
  ComponentClass, 
  PropsWithChildren 
} from "react";

import { ClassNameConfig, Config } from "../global.d";

/** Progress Bar Component **/

export type ProgressBarMainProps = {
  total?:number,
  current?:number,
  indeterminate?:boolean,
  indicatorFn?:(current:number, total:number, indeterminate:boolean) => ReactNode
};

export type ProgressBarProps = ClassNameConfig &
                               Config<
                                 {root?:string, bar?:string, barWrapper?:string},
                                 {root?:object, bar?:object, barWrapper?:object},
                                 {bar?:string|FC|ComponentClass, barWrapper?:string|FC|ComponentClass}
                               > &
                               ProgressBarMainProps;

/** Tooltip Component **/

export type TooltipMainProps = {
  open:boolean
};

export type TooltipProps = PropsWithChildren & 
                            AllHTMLAttributes<HTMLElement> &
                           ClassNameConfig &
                           Config<
                             {root?:string, arrow?:string, content?:string},
                             {root?:object, arrow?:object, content?:object},
                             {root?:string|FC|ComponentClass, arrow?:string|FC|ComponentClass, content?:string|FC|ComponentClass}
                           > & 
                           TooltipMainProps;
