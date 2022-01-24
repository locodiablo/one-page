const vars = require("../vars.js")
const paths = require("../paths.js")
const functions = require("../functions.js")
const img_logo = require("../partials/img_logo.js")

const template_tab_content = function(data){
  return `
  <div class="tab-pane fade text-center align-items-center justify-content-center" id="content-${data.id}" role="tabpanel" aria-labelledby="profile-tab">
    <div class="container-xl">
      <h1 class="py-4 m-0">${data.title}</h1>
      <div class="pb-4">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 text-center">
            <h2>${data.subtitle}</h2>
            ${data.intro ? `<p class="strong text-center my-4">${data.intro}</p>` : ''}
            ${data.paras.map(eachPara => `<p class="my-4 text-left">${eachPara}</p>`).join("")}
            <div class="my-4 text-center">
              ${data.actions.map(eachAction => template_link(eachAction)).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

const template_link = function(data){
  return `
    <a class="btn-2" href="${data.type == 'href' ? '#':''}${data.href}">
      <span class="btn-1 btn-icon ${data.icon}"></span>${data.text}
    </a>
  `
}

const link_data_contact = {
  href: '#content-contact',
  text: "Contact info",
  class: '',
  icon: 'btn-icon fas fa-phone'
}

const link_data_cv = {
  href: vars.url_cv,
  text: "PDF C.V.",
  class: '',
  icon: 'btn-icon fas fa-file'
}

const link_data_portfolio = {
  href: vars.url_portfolio,
  text: "PDF portfolio",
  class: '',
  icon: 'btn-icon fas fa-images'
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

          <div class="tab-pane bg-sunset fade text-center align-items-center justify-content-center active show" id="content-home" role="tabpanel" aria-labelledby="profile-tab">
            <div class="container-xl homepage-poster-container">

              <div class="row homepage-poster-row">

                <div class="homepage-poster-content">
                  ${img_logo({id: 'logo_main',class: 'invert'})}
                  <h4 class="homepage-poster-title brand-font py-2 pb-md-4">Designer</h4>
                  <div class="homepage-poster-options">
                    ${template_link(paths.menuData['cv'])}
                    ${template_link(paths.menuData['gallery'])}
                    ${template_link(paths.menuData['contact'])}
                  </div>
                </div>
              </div>

            </div>
          </div>

          ${template_tab_content({
            id: "contact",
            title: "Contact",
            subtitle: "Ignore those bus shelter scribblings - this is how to get in touch:",
            paras: [
              ""
            ],
            actions: vars.profileLinks
          })}

          ${template_tab_content({
            id: "cv",
            title: "CV",
            subtitle: "View / download my CV",
            intro: "A teeny 112kb",
            paras: [
            ],
            actions: [
              link_data_cv
            ]
          })}

          ${template_tab_content({
            id: "gallery",
            title: "Gallery",
            subtitle: "View / download portfolio PDF",
            intro: "A paltry 10.5mb",
            paras: [

            ],
            actions: [
              link_data_portfolio
            ]
          })}

          ${template_tab_content({
            id: "career",
            title: "Career",
            subtitle: "Career intro",
            paras: [
              "text"
            ],
            actions: [
              link_data_contact
            ]
          })}

          ${template_tab_content({
            id: "about",
            title: "About",
            subtitle: "A cross-discipline creative, optimising digital design for over 20 years",
            intro: "Some past and present fascinations:",
            paras: [
              "Unguarded biscuits. Beaches (winter, summer, rain or shine). Motorbikes - especially the crazy-fast ones. Badminton and squash so I can run around and hit things with impunity. Kickboxing (W-2 L-1 D-0) for resolving biscuit ownership disputes. Games - nerdishly mesmerised by the the attention to detail in Assassin’s Creed: Odyssey on PlayStation. Sublime technology: electric vehicles and genetics."
            ],
            actions: [
              link_data_contact,
              link_data_cv,
              link_data_portfolio
            ]
          })}

      </div>
    `
  ],
  footer:[]
};

module.exports = page_content;
