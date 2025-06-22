import type { Preview } from "@storybook/react-webpack5";
import { DocusaurusDecorator } from "./decorators";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [DocusaurusDecorator],
};

export default preview;
