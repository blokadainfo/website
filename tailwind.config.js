export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              quotes: 'none',
            },
            'blockquote::before': { content: 'none' },
            'blockquote::after': { content: 'none' },
          },
        },
      },
    },
  },
};
