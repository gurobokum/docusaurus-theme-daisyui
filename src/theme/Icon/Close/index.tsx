import React, { type ReactNode } from "react";
import type { Props } from "@theme/Icon/Close";

export default function IconClose({
  width = 21,
  height = 21,
  color = "currentColor",
  strokeWidth = 1.2,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className,
  ...restProps
}: Props): ReactNode {
  return (
    <svg viewBox="0 0 15 15" width={width} height={height} {...restProps}>
      <g stroke={color} strokeWidth={strokeWidth}>
        <path d="M.75.75l13.5 13.5M14.25.75L.75 14.25" />
      </g>
    </svg>
  );
}
