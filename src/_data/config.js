// Config for the entire site.
module.exports = {
  // Site title.
  title: "Hariom Seth",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Hariom Seth",

  // Site URLs.
  baseUrl: "https://www.hariomseth.com", // No slash at the end.
  shortBaseUrl: "www.hariomseth.com", // Same as baseUrl but without http or https.

  // Your name.
  name: "Hariom Seth",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
    small: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://btjanaka.net/static/btjanaka.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Founder & Chief Creative Technologist at Tagglabs",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/ContactCard_1000x1000.jpeg",
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
      desc: "hariomseth.com",
      url: "https://www.hariomseth.com",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Email",
      desc: "hari@tagglabs.in",
      url: "mailto:hari@tagglabs.in",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "Twitter",
      desc: "@HariomSeth",
      url: "https://twitter.com/HariomSeth",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
    },
    {
      name: "LinkedIn",
      desc: "@shariom",
      url: "https://www.linkedin.com/in/shariom/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/pankajcontact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
