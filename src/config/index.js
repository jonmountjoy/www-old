module.exports = {
  author: "@jonmountjoy",
  siteTitle: "Jon Mountjoy",
  siteShortTitle: "Jon Mountjoy", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Jon's home on the internet",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file
  googleAnalyticsId: "UA-99562635-1",
  splashScreen: false, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https://blog.jonmountjoy.com/feed",

  shownArticles: 3,

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Blog",
      url: "https://blog.jonmountjoy.com/",
    },
    {
      name: "Photos",
      url: "https://photos.jonmountjoy.com/",
    },
    {
      name: "Email",
      url: "mailto:comments@jonmountjoy.com",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jonmountjoy/",
    },
    {
      name: "GitHub",
      url: "https://github.com/jonmountjoy",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/jonmountjoy",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jonmountjoy",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#hero",
      },
      {
        name: "Blogs",
        url: "/#blogs",
      },
      {
        name: "Photos",
        url: "/#photos",
      },
      
      // {
      //   name: "Features",
      //   url: "/#projects",
      // },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
