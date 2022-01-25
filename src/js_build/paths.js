const imagesDirBrand = "/assets/images/brand/";

const paths = {
  src: "./src",
  publicDir: "./public",
  faviconDir: "/assets/images/brand/favicon/",
  templatesDir: "../src/js_build/templates",
  definitionsDir: "src/js_build/page_definitions",
  imagesDir: "./src/assets/images",
  imagesSimonRLogo: "/assets/images/brand_vector/simon-rollett-logo-5.svg",
  urlLinkedIn: 'https://www.linkedin.com/in/sjrollett/',
  urlGit: 'https://github.com/locodiablo',
  menuData: {
    "contact": {
      text: "Contact",
      type: "href",
      href: "content-contact",
      icon: 'fas fa-phone'
    },
    "cv": {
      text: "CV",
      type: "href",
      href: "content-cv",
      icon: 'fas fa-file'
    },
    "gallery": {
      text: "Gallery",
      type: "href",
      href: "content-gallery",
      icon: 'fas fa-image'
    },
    "career": {
      text: "Career",
      type: "href",
      href: "content-career",
      icon: 'fas fa-chart-line'
    },
    "about": {
      text: "About",
      type: "href",
      href: "content-about",
      icon: 'btn-icon fas fa-user-alt'
    }
  }
}

module.exports = paths;
