import { PropsWithChildren } from "react";

/** Link Component **/

export type LinkMainProps = {
 disabled?:boolean
};

export type LinkProps = PropsWithChildren &
                        AllHTMLAttributes<HTMLElemenet> &
                        LinkMainProps;
