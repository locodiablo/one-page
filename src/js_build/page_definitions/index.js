const vars = require("../vars.js")
const paths = require("../paths.js")
const functions = require("../functions.js")
const img_logo = require("../partials/img_logo.js")

const tab_content = function(data){
  return `
  <div class="tab-pane fade text-center align-items-center justify-content-center" id="content-${data.id}" role="tabpanel" aria-labelledby="profile-tab">
    <div class="container-xl">
      <h1 class="py-4">${data.title}</h1>
      <div class="pb-4">
        ${data.content}
      </div>
    </div>
  </div>
  `
}

const content_contact = `

  <div class="row justify-content-center">
    <div class="nav-items col-12 col-md-6 col-lg-4 text-left">
      <p class="pb-4 pmb-4">Ignore those hurtful bus shelter scribblings - these are the fastest ways to get in touch:</p>
      ${vars.profileLinks.map(eachLink => `
        <a class="d-block mb-4 nav-item ${eachLink.class}" href="${eachLink.href}">
          <span class="btn-1 ${eachLink.icon} mr-4"></span>${eachLink.text}
        </a>
      `).join("")}
    </div>
  </div>
`

const content_gallery = `
  <h2>Text</h2>
  <h3><b>More</b></h3>
  <div class="row justify-content-center">
    <div class="nav-items col-12 col-md-6 text-left">
        <p class="strong text-center my-4">
          Intro:
        </p>
        <p class="my-4">
          Desc.
        </p>

        <div class="row justify-content-center my-4">
          <div class="nav-items col-12 col-lg-6 text-left">
            <a class="d-block mb-4 nav-item" href="#content-contact">
              <span class="btn-1 btn-icon fas ${vars.profileLinks[1].icon} mr-4"></span>Contact
            </a>
          </div>
          <div class="nav-items col-12 col-lg-6 text-left">
            <a class="d-block mb-4 nav-item" href="#content-cv">
              <span class="btn-1 btn-icon fas fa-file mr-4"></span>CV
            </a>
          </div>
        </div>

    </div>
  </div>

`

const content_about = `
  <div class="row justify-content-center">
    <div class="nav-items col-12 col-md-6 text-center">
      <h2>A cross-discipline creative, optimising digital design for over 20 years</h2>
        <p class="strong text-center my-4">
          Some past and present fascinations:
        </p>
        <p class="my-4 text-left">
          Unguarded biscuits.
          Beaches (winter, summer, rain or shine).
          Motorbikes - especially the crazy-fast ones.
          Badminton and squash so I can run around and hit things with impunity. Kickboxing (W-2 L-1 D-0) for resolving biscuit ownership disputes.
          Games - nerdishly mesmerised by the the attention to detail in Assassin’s Creed: Odyssey on PlayStation.
          Sublime technology: electric vehicles and genetics.
        </p>

        <div class="row justify-content-center my-4">
          <div class="nav-items col-12 col-lg-6 text-left">
            <a class="d-block mb-4 nav-item" href="#content-contact">
              <span class="btn-1 btn-icon fas ${vars.profileLinks[1].icon} mr-4"></span>Contact
            </a>
          </div>
          <div class="nav-items col-12 col-lg-6 text-left">
            <a class="d-block mb-4 nav-item" href="#content-cv">
              <span class="btn-1 btn-icon fas fa-file mr-4"></span>CV
            </a>
          </div>
        </div>

    </div>
  </div>

`

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
                    <a href="#${paths.menuData['cv'].value}" class="btn btn-1">CV</a>
                    <a href="#${paths.menuData['gallery'].value}" class="btn btn-1">Gallery</a>
                    <a href="#${paths.menuData['contact'].value}" class="btn btn-1">Contact</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          ${tab_content({
            id: "contact",
            title: "Contact",
            content: content_contact
          })}

          ${tab_content({
            id: "cv",
            title: "CV",
            content: ''
          })}

          ${tab_content({
            id: "gallery",
            title: "Gallery",
            content: content_gallery
          })}

          ${tab_content({
            id: "career",
            title: "Career",
            content: ''
          })}

          ${tab_content({
            id: "about",
            title: "About",
            content: content_about
          })}

      </div>
    `
  ],
  footer:[]
};

module.exports = page_content;
