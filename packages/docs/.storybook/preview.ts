import type { Preview } from '@storybook/react-vite'

import { themes } from 'storybook/internal/theming'; 

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark
    },
    darkMode: {
      current: "dark",
      dark: themes.dark,
      light: themes.light
    }
  },
};

export default preview;