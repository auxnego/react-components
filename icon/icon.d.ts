import { AllHTMLAttributes } from "react";
import { BasicConfig, ClassNameConfig } from "./global.d";

/** FontAwesome Icons Component **/

export type FontAwesomeMainProps = {
  to:string,
  base?:string
};

export type FontAwesomeProps = BasicConfig &
                               AllHTMLAttributes<HTMLElement> &
                               FontAwesomeMainProps;

/** Loading Component **/

export type LoadingMainProps = {};

export type LoadingProps = BasicConfig &
                          AllHTMLAttributes<HTMLElement> &
                          LoadingMainProps;
