const vars = require("../vars.js")
const paths = require("../paths.js")
const functions = require("../functions.js")
const img_logo = require("../partials/img_logo.js")
const template_jumbotron = require("../templates/template_jumbotron")
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


const tab_content = function(data){
  return `
  <div class="tab-pane fade text-center h-100 align-items-center justify-content-center" id="content-${data.id}" role="tabpanel" aria-labelledby="profile-tab">
    <div class="container-xl">
      <h1 class="py-4">${data.title}</h1>
    </div>
  </div>
  `
}

const page_content = {
  config: {
    html_template: "template_page_master",
    nav_text: "Home",
    body_class: ``
  },
  head:{
    title: vars.site_name_full,
    description: `Welcome to the ${vars.site_name_full} website: browse my brand, design and UI work.`
  },
  body:[
    `
        <div class="tab-content text-center" id="tab-content">

          <div class="tab-pane fade text-center active-show-- h-100 align-items-center" id="content-home---" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container-xl h-100--">
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

            ${template_jumbotron({
              class: "jumbotron-beefy",
              title: functions.render_link({
                class: "text-link",
                text: "Brand",
                href: "/"
              }),
              subtitle: "Asset management",
              description: "Configuring brand assets for multi-media efficient consistency",
              align: "right",
              secondary: "bing"
            })}

            ${template_jumbotron({
              class: "jumbotron-beefy bg-dark",
              title: functions.render_link({
                class: "text-link",
                text: "UI/UX",
                href: "/"
              }),
              subtitle: "Defining journeys",
              description: "Examples for home insurance and online clothing retail",
              align: "left",
              secondary: `
                <div class="phone col-10 col-sm-8 col-md-6">
                  <div class="inner">
                    <img src="/assets/images/gallery/ui-design/insurance-questions/question-start.svg" alt="jam">
                  </div>
                </div>
              `
            })}

          </div>

          <div class="tab-pane bg-sunset fade text-center h-100 align-items-center justify-content-center active show" id="content-home" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container-xl homepage-logo-container">

              <div class="row justify-content-center homepage-logo">
                <div class="col-8 col-sm-6 col-md-4 col-xl-2">
                  ${img_logo({id: 'logo_main',class: 'invert'})}
                </div>
                <h4 class="col-12 fg-white brand-font pt-2 m-0" style="text-transform: uppercase">Designer</h4>
              </div>

              <div class="row justify-content-center homepage-options">
                <div class="col-12 col-sm-8 col-md-6">
                  <div class="row justify-content-center">
                    <div class="col-4">
                      <a href="#${paths.menuData['cv'].value}" class="btn btn-1">CV</a>
                    </div>
                    <div class="col-4">
                      <a href="#${paths.menuData['gallery'].value}" class="btn btn-1">Portfolio</a>
                    </div>
                    <div class="col-4">
                      <a href="#${paths.menuData['contact'].value}" class="btn btn-1">Contact</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          ${tab_content({
            id: "contact",
            title: "Contact"
          })}

          ${tab_content({
            id: "cv",
            title: "CV"
          })}

          ${tab_content({
            id: "gallery",
            title: "Gallery"
          })}

          ${tab_content({
            id: "career",
            title: "Career"
          })}

          ${tab_content({
            id: "about",
            title: "About"
          })}

      </div>
    `
  ],
  footer:[]
};

module.exports = page_content;
