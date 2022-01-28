const imagesDirBrand = "/assets/images/brand/";

const file_cv = {
  text: "PDF CV",
  type: false,
  href: "/assets/cv/simon-rollett-i-cv-2022.pdf",
  icon: 'icon-file-pdf'
}

const file_portfolio = {
  text: "PDF gallery",
  type: false,
  href: "/assets/cv/simon-rollett-portfolio-v1-2022-z.pdf",
  icon: 'icon-file-pdf'
}

const paths = {
  src: "./src",
  publicDir: "./public",
  faviconDir: "/assets/images/brand/favicon/",
  templatesDir: "../src/js_build/templates",
  definitionsDir: "src/js_build/page_definitions",
  imagesDir: "./src/assets/images",
  imagesSimonRLogo: "/assets/images/brand_vector/simon-rollett-logo-5.svg",
  imagesSimonRLogoMeta: "/assets/images/gallery/simon-rollett-logo.jpg",

  assets: {
    cv: file_cv,
    portfolio: file_portfolio
  },
  contactData: {
    tel: {
      text: "Tel",
      type: false,
      href: 'tel:07748024641',
      icon: 'icon-telephone'
    },
    email: {
      text: "Email",
      type: false,
      href: "mailto:simon@madjester.co.uk",
      icon: 'icon-envelope'
    },
    linkedin: {
      text: "LinkedIn",
      type: false,
      href: 'https://www.linkedin.com/in/sjrollett/',
      icon: 'icon-linkedin'
    },
    github: {
      text: "GitHub",
      type: false,
      href: "https://github.com/locodiablo",
      icon: 'icon-github'
    }
  },
  menuData: {
    contact: {
      text: "Contact",
      type: "href",
      href: "content-contact",
      icon: 'icon-chat'
    },
    cv: {
      text: "CV",
      type: "href",
      href: "content-cv",
      icon: 'icon-file-text'
    },
    gallery: {
      text: "Gallery",
      type: "href",
      href: "content-gallery",
      icon: 'icon-photo'
    },
    career: {
      text: "Career",
      type: "href",
      href: "content-career",
      icon: 'icon-history'
    },
    about: {
      text: "About",
      type: "href",
      href: "content-about",
      icon: 'icon-account'
    }
  }
}

module.exports = paths;
