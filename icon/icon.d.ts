import { AllHTMLAttributes } from "react";
import { BasicConfig, ClassNameConfig } from "./global.d";

export type FontAwesomeMainProps = {
  to:string,
  base?:string
};

export type FontAwesomeProps = BasicConfig &
                               FontAwesomeMainProps;
