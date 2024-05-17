import '../src/app/globals.css';

import type { Preview } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  loaders: [mswLoader]
};

export default preview;
