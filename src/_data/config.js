// Config for the entire site.
module.exports = {
  // Site title.
  title: "Dev Chandra",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Dev Chandra",

  // Site URLs.
  baseUrl: "https://www.devchandra.in/", // No slash at the end.
  shortBaseUrl: "www.devchandra.in", // Same as baseUrl but without http or https.

  // Your name.
  name: "Dev Chandra",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/dev/devphoto.JPG",
    small: "https://d35hr0os3yc7ki.cloudfront.net/dev/devphoto.JPG",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/dev/Dev.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Spatial Designer",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/dev/devphoto.JPG",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/dev/devphoto.JPG",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Website",
      desc: "devchandra.in",
      url: "https://www.devchandra.in/",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Email",
      desc: "devchandradesigns@gmail.in",
      url: "mailto:devchandradesigns@gmail.in",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "LinkedIn",
      desc: "@dev-chandra",
      url: "https://www.linkedin.com/in/dev-chandra-9853b610a/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
     {
      name: "Instagram",
      desc: "@devchandradesigns",
      url: "https://www.instagram.com/devchandradesigns/",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/dev/dev.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
