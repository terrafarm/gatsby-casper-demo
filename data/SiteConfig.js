module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "casper", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Terrafarm",
  siteTitleAlt: "Terrafarm", // Alternative site title for SEO.
  siteLogo: "https://terrafarm.github.io/gatsby-casper-demo/logos/logo_icon-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://terrafarm.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/gatsby-casper-demo", // Prefixes all links. For cases when deployed to example.github.io/gatsby-casper-demo/.
  siteDescription: "Everybody eat well.", // Website description used for RSS feeds/meta description tag.
  siteCover: "https://terrafarm.github.io/gatsby-casper-demo/images/landscape-615429_1280.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Ryan Blakeley", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/terrafarm/gatsby-casper-demo",
    "https://twitter.com/_terrafarm",
    "mailto:ryan@terra.farm"
  ],
  postDefaultCategoryID: "Ecology", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/terrafarm/gatsby-casper-demo",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/_terrafarm",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:ryan@terra.farm",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Terrafarm LLC" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
