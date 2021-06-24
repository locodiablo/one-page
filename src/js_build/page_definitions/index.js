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
    `
        <div class="tab-content text-center h-100" id="tab-content">

          <div class="tab-pane fade text-center show active h-100" id="content-home" style="background: #eee">
            <div class="container-xl h-100">
              <div class="row align-items-center h-100 justify-content-center">

                <div class="col-12 col-sm-8 col-md-6 text-center pt-2">
                  <img class="w-25 d-block my-4 mx-auto" src="/assets/images/brand_vector/logo-sr.svg" alt="Simon Rollett: Design Director">

                  <h1 class="h3 has-subtitle strong">SIMON ROLLETT</h1>
                  <h2 class="h5">DESIGN DIRECTOR</h2>
                  <div class="text-list">
                    <div class="text-list-item mx-auto small py-2">
                      Former Lead Designer at Policy Expert: fast-growing UK insurer and number 1 rated UK home insurance provider on Review Centre, founder of MadJester Clothing
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-10 col-md-9 col-lg-10 col-xl-6">
                      <div class="row justify-content-center btn-grouped my-4">

                          <div class="col-12 mb-4">
                            <a href="/gallery/" class=" px-0 btn btn-black-outline d-block " data-my-menu="2">
                              <i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>GALLERY
                            </a>
                          </div>
                          <div class="col-6">
                            <a href="/about/download-cv" class="j-cv px-0 btn btn-black-outline d-block " data="">
                              <i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>CV
                            </a>
                          </div>
                          <div class="col-6 ">
                            <a href="/career/" class="j-t-menu px-0 btn btn-black-outline d-block " data-my-menu="1">
                              <i class="site-icon d-none d-sm-inline-block nav-fas fas fa-arrow-right mr-2"></i>Career
                            </a>
                          </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="tab-pane fade text-center h-100" id="content-contact" style="background: #ccc">
            <div class="container-xl h-100">
              <h1 class="py-4">Contact</h1>
            </div>
          </div>

          <div class="tab-pane fade text-center h-100" id="content-cv">
            <h1 class="py-4">CV</h1>
          </div>

          <div class="tab-pane fade text-center h-100" id="content-gallery">
            <h1 class="py-4">Gallery</h1>
          </div>

          <div class="tab-pane fade text-center h-100" id="content-career">
            <h1 class="py-4">Career</h1>
          </div>

      </div>
    `
  ],
  footer:[]
};

module.exports = page_content;
