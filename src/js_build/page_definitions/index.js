const vars = require("../vars.js")
const paths = require("../paths.js")
const functions = require("../functions.js")
// const template_jumbotron = require("../templates/template_jumbotron")
// const template_jumbotron_project = require("../templates/template_jumbotron_project")
// const template_jumbotron_project2 = require("../templates/template_jumbotron_project2")

//
const project_brand = {
  class: "bg-primary-fade",
  media: {
    type: "phone",
    dir: "/assets/images/gallery/brand/madjester/",
    src: "mj-identity.svg"
  },
  title: "Brand design",
  subtitle: "MadJester Clothing",
  features: [
    "A new lifestyle brand for unique, durable clothing that values being different."
  ],
  primary: {
    class: "twist twist-right pull-sm-t"
  },
  secondary: {
    class: ""
  },
  actions: [
    {
      colClass: "col-6",
      class: "j-demo-site btn-white-outline",
      href: "/gallery/brand/madjester",
      text: "Site demo",
      data: {
        key: "demo",
        value: "madjester"
      }
    },
    {
      colClass: "col-6",
      class: "btn-white",
      href: "/gallery/brand/madjester",
      text: vars.text.detail
    }
  ]
}

const project_ui = {
  class: "bg-light",
  media: {
    type: "phone",
    dir: "/assets/images/gallery/ui-design/insurance-questions/",
    src: "question-start.svg"
  },
  title: "Pixels in a row",
  subtitle: "Policy Expert insurance",
  features: [
    "Asset management helping this fast-growing insurer build recognition."
  ],
  primary: {
    class: "twist twist-left order-sm-last"
  },
  secondary: {
    class: "text-md-right"
  },
  actions: [
    {
      colClass: "col-6",
      class: "btn-thin",
      href: "/gallery/brand/policy-expert",
      text: "Brand"
    },
    {
      colClass: "col-6",
      class: "btn-black",
      href: "/gallery/ui-design/insurance-questions",
      text: vars.text.detail
    }
  ]
}


//
const ctas = [
  {
    colClass: "col-12 mb-4",
    text: `<i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>GALLERY`,
    href: paths.pageGallery,
    class: " px-0",
    data: {
      name: "-my-menu",
      value: "2"
    }
  },
  {
    colClass: "col-6",
    text: `<i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>CV`,
    href: paths.pageCV,
    class: "j-cv px-0",
    data: {
      name: "",
      value: ""
    }
  },
  {
    colClass: "col-6 ",
    text: `<i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>Career`,
    href: paths.pageCareer,
    class: "j-t-menu px-0",
    data: {
      name: "-my-menu",
      value: "1"
    }
  }
]

const page_content = {
  config: {
    html_template: "template_page_master",
    nav_text: "Home",
    body_class: `homepage`
  },
  head:{
    title: vars.site_name_full,
    description: `Welcome to the ${vars.site_name_full} website: browse my brand, design and UI work.`
  },
  body:[
    "homepage"
  ],
  footer:[]
};

module.exports = page_content;
