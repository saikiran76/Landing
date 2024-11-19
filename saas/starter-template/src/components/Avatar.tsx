import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props:HTMLAttributes<HTMLDivElement>){
    const { className, children, ...rest } = props;
    return (
        <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1bg-neutral-900", className)} {...rest}>
            {children}
        </div>
    )
}