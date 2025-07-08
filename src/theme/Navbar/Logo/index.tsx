import React, { type ReactNode } from "react";
import Logo from "@theme/Logo";

export default function NavbarLogo(): ReactNode {
  return (
    <Logo
      className="flex items-center mr-4 min-w-0 link no-underline text-lg"
      imageClassName="flex-none h-8 mr-2 [&>img]:h-full"
      titleClassName="flex-grow truncate"
    />
  );
}
