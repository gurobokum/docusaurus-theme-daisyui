import React, { type ReactNode } from "react";
import { ThemedComponent } from "@docusaurus/theme-common";
import type { Props } from "@theme/ThemedImage";

export default function ThemedImage(props: Props): ReactNode {
  const { sources, className: parentClassName, alt, ...propsRest } = props;
  return (
    <ThemedComponent className={parentClassName}>
      {({ theme, className }) => (
        <img
          src={sources[theme]}
          alt={alt}
          className={className}
          {...propsRest}
        />
      )}
    </ThemedComponent>
  );
}
