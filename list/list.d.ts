import { ReactNode, LIHTMLAttributes } from "react";

import {
  ClassNameConfig,
  Config
} from "../global.d";

/** Menu Component **/

export type MenuItemMainProps = {
 id:string|number,
 content:ReactNode,
 textContent?:string
};

export type MenuItemProps = LIHTMLAttributes<HTMLLIElement> &
                            MenuItemMainProps;

export type MenuMainProps = {
  items:MenuItemProps[],
  classPrefix?:string,
  onEmpty?:ReactNode,
  ordered?:boolean,
};

export type MenuProps = ClassNameConfig &
                        Config<
                          {root?:string, item?:string},
                          {root?:object, item?:object}, {}
                        > & 
                        MenuMainProps;
