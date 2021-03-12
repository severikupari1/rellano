/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Rellano Oy | Rakennustuotteiden asennuspalvelut`,
    author: {
      name: `Timo Kokko`,
    },
    description: `Yhteystiedot Ota yhteyttä puhelimitse tai sähkopostilla, niin pääsemme nopeasti alkuun
Puhelin: 044 511 5133

Sähkoposti: timo.kokko@rellano.fi

Facebook: https://www.facebook.com/Rellano-Oy-113528363739513/`,

    /* Choose and arrange the sections to be displayed on the landing page */
    sections: [
      `hero`,
      `features`,
      //`pricing`,
      //`call-to-action`,
      `screenshots`,
      `testimonials`,
    ],

    /* Configure the navigation menu */
    menuItems: [
      {path: 'features', label: 'Palvelut'},
      //{path: 'pricing', label: 'Pricing'},
        {path: 'lappiporras', label: 'Lappiporras'},
        {path: 'screenshots', label: 'Referenssit'},
        {path: 'testimonials', label: 'Asiakaskokemuksia'},
    ],

    /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
    social: [
      { service: `Rellano Oy`,
        url : `https://www.facebook.com/Rellano-Oy-113528363739513/`,
        fa: `facebook` },
    ],

    /* Path to favicon and logo (located inside the 'static' folder) */
    favicon: `favicon.png`,
    logo: `/images/logo.png`,

    /* Logo and text to show in footer */
    footer: {
      logo: `/images/logo.png`,
      text: ``,
    },

    /* Address and contact info to show in footer */
    address: {
      line1: `1600 Amphitheatre Parkway`,
      line2: `Mountain View, CA`,
      line3: `94043 US`,
    },
    contacts: [
      { text: `Puhelinnumero +358 44 511 5133`, url: `tel:0445115133` },
      { text: `Sähköposti timo.kokko@rellano.fi`, url: `mailto:timo.kokko@rellano.fi`},
    ],
  },
  plugins: [ `gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy` ],
}
