import {
  PropsWithChildren
  //types for html
  AllHTMLAttributes
} from "react";

/** LabelWrapper Component **/

export type LabelWrapperMainProps = {
  label?:string,
  id:string
};

export type LabelWrapperProps = LabelWrapperMainProps &
                                PropsWithChildren &
                                AllHTMLAttributes<HTMLElement>;
