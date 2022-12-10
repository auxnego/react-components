import { PropsWithChildren, AllHTMLAttributes } from "react";

//
import {
  BasicConfig,
  ClassNameConfig
} from "../global.d";

/** Button Component **/

export type ButtonMainProps = {};

export type ButtonProps = PropsWithChildren &
                          BasicConfig &
                          ClassNameConfig &
                          AllHTMLAttributes<HTMLElement>
                          ButtonMainProps;
