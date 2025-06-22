import React from "react";
import { Decorator } from "@storybook/react-webpack5";
import LayoutProvider from "@theme/Layout/Provider";
import { RouteContextProvider } from "@docusaurus/core/lib/client/routeContext";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

export const DocusaurusDecorator: Decorator = (Story) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteContextProvider
          value={{
            plugin: {
              id: "storybook-docusaurus-daisyui",
              name: "storybook-docusaurus-daisyui",
            },
          }}
        >
          <LayoutProvider>
            <Story />
          </LayoutProvider>
        </RouteContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};
