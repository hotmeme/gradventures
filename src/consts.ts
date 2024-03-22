import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "GR Adventures",
  DESCRIPTION: "Welcome to GR adventures, a portfolio and blog detailing the works and adventures of Garrett Kukier and Ryan Chen.",
  AUTHOR: "Garrett Kukier and Ryan Chen",
}

// Work Page
export const WORK: Page = {
  TITLE: "Chronology",
  DESCRIPTION: "Major chronology of the friendship.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Adventures in text form (nerd emoji).",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Art",
  DESCRIPTION: "Our joint art projects.",
}

// Gallery Page 
export const GALLERIES: Page = {
  TITLE: "Gallery",
  DESCRIPTION: "Memories in photographic format",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Chronology", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Art", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Gallery", 
    HREF: "/gallery", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Garrett Email",
    ICON: "email", 
    TEXT: "garrett@kukier.com",
    HREF: "mailto:garrett@kukier.com",
  },

  { 
    NAME: "Ryan Email",
    ICON: "email", 
    TEXT: "rchen18@stanford.edu",
    HREF: "mailto:rchen18@stanford.edu",
  },
  /*
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/markhorn-dev/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "markhorn_dev",
    HREF: "https://twitter.com/markhorn_dev",
  },
  */
]

