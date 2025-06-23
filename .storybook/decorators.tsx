import React from "react";
import { Decorator } from "@storybook/react-webpack5";
import { RouteContextProvider } from "@docusaurus/core/lib/client/routeContext";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { BrowserContextProvider } from "@docusaurus/core/lib/client/browserContext";
import { DocusaurusContextProvider } from "@docusaurus/core/lib/client/docusaurusContext";
import LayoutProvider from "@theme/Layout/Provider";

export const DocusaurusDecorator: Decorator = (Story) => {
  return (
    <BrowserContextProvider>
      <HelmetProvider>
        <MemoryRouter>
          <RouteContextProvider
            value={{
              plugin: {
                id: "storybook-docusaurus-daisyui",
                name: "storybook-docusaurus-daisyui",
              },
            }}
          >
            <DocusaurusContextProvider>
              <LayoutProvider>
                <Story />
              </LayoutProvider>
            </DocusaurusContextProvider>
          </RouteContextProvider>
        </MemoryRouter>
      </HelmetProvider>
    </BrowserContextProvider>
  );
};
