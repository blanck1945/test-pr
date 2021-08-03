module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PRNHXFD',
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      },
    },
  ],
  siteMetadata: {
    title: 'Tap | RuleTap',
    description: 'Jugá a la Ruletap y ganá premios en comercios',
    apple: 'app-id=1504951295',
  },
};
