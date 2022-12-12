import { Attributes, ReactNode, FC, ComponentClass } from "react";
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
                                 {bar:string|FC|ComponentClass, barWrapper?:string|FC|ComponentClass}
                               > &
                               ProgressBarMainProps;
