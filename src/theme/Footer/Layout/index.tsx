import React, { type ReactNode } from "react";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  links,
  logo,
  copyright,
}: Props): ReactNode {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        {links}
      </footer>
      {(logo || copyright) && (
        <footer className="footer footer-center p-4 bg-neutral text-neutral-content">
          <aside>
            {logo && <div className="my-2">{logo}</div>}
            {copyright}
          </aside>
        </footer>
      )}
    </>
  );
}
