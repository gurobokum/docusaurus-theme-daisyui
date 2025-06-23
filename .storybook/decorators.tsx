import { BrowserContextProvider } from "@docusaurus/core/lib/client/browserContext";
import { DocusaurusContextProvider } from "@docusaurus/core/lib/client/docusaurusContext";
import { RouteContextProvider } from "@docusaurus/core/lib/client/routeContext";
import { Decorator } from "@storybook/react-webpack5";
import LayoutProvider from "@theme/Layout/Provider";
import ThemeProvider from "@theme/ThemeProvider";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";

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
                <ThemeProvider>
                  <Story />
                </ThemeProvider>
              </LayoutProvider>
            </DocusaurusContextProvider>
          </RouteContextProvider>
        </MemoryRouter>
      </HelmetProvider>
    </BrowserContextProvider>
  );
};
