const vars = require("../vars.js")
const paths = require("../paths.js")
const functions = require("../functions.js")
const template_link = require("../templates/template_link.js")
const template_tab_content = require("../templates/template_tab_content.js")
const img_logo = require("../partials/img_logo.js")

const link_data_contact = {
  href: '#content-contact',
  text: "Contact",
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
  icon: 'btn-icon fas fa-image'
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
            subtitle: "Story so far:",
            paras: [
              `<strong>Running DBA Design Services</strong> from Jun 2021 onwards – Projects included:
              ${functions.render_bullets({
                bullets: [
                  "Creating the Brand Strategy for a cryptocurrency startup",
                  "Brand asset configuration consulting for fintech re-brand"
                ]
              })}`,
              `<strong>Lead Designer at Policy Expert </strong> from Oct 2011 to May 2021
              ${functions.render_bullets({
                bullets: [
                  "Brand champion across all touchpoints: digital and traditional, UI and UX",
                  "Directed UI and web teams",
                  "Championed the successful introduction of digital brand asset library",
                  "Applied data-driven design",
                  "Implemented customer-first user testing process and workshops",
                  "Developed processes for rapid, brand-friendly, media development"
                ]
              })}`,
              `<strong>Running DBA Design Services</strong> from Jun 2002 to Sep 2011 – Projects included:
              ${functions.render_bullets({
                bullets: [
                  "Providing brand, graphic and web design for large and medium sized customers",
                  "UI and UX design and development of portals, websites, intranets and web products",
                  "Clients included Barclaycard*, Very*, Chubb* and Triangle (*Via sub-contract)"
                ]
              })}`,
              `<strong>Running MadJester Clothing </strong> from Dec 2004 onwards`,
              "Founded new clothing business to address a segment of which I had deep experience. Designed:",
              functions.render_bullets({
                bullets: [
                  "Product – using innovative materials and research to bridge the gap between motorbike practicality and leisure",
                  "Marketing – everything from brochures, exhibition stands, packaging and comms",
                  "Web – complete e-commerce platform using the leading-edge technologies of the time"
                ]
              }),
              `<strong>Creative Director for Triangle Group </strong> from May 1998 to Aug 2002`,
              "Evolved from Graphic Designer to Creative Director, responsible for designing all media used by this highly technical IT solutions provider. I owned brand identity for the group, provided creative input to customer projects, and managed a small team of designers.",
              `<strong>Editor - Glenigan</strong>`,
              "‘Trends’ journal - author, edit and approve content for monthly construction industry journal:",
              functions.render_bullets({
                bullets: [
                  "Updated design, improved layout and content structure",
                  "Doubled paid subscriptions from £17k to £34k within 12 months"
                ]
              })
            ],
            actions: [
              link_data_cv,
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
