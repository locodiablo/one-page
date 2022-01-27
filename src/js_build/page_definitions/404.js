const functions = require("../functions");
const template_tab_content = require("../templates/template_tab_content.js")
const template_link = require("../templates/template_link.js")
const paths = require("../paths");

const actions = [
  paths.menuData.contact,
  paths.menuData.cv,
  paths.menuData.gallery
]

const page_content = {
  config: {
    html_template: "template_page_master",
    nav_text: "404 error. Crikey.",
    body_class: "page-404"
  },
  head:{
    title: "404 Error. Oops.",
    description: "Quite frankly, this is a shock to us all."
  },
  body:[
    `
<div class="tab-content text-center" id="tab-content">

<div class="tab-pane show active text-center align-items-center justify-content-center" id="content-404"  style="display: flex !important">
    <div class="container-xl">
      <h1 class="py-4 m-0">404 error</h1>
      <div class="pb-4">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 text-center">
            <h2>*Horrified squeals*</h2>
            <p class="my-4 text-left">Well ... not quite sure what's happened here - please try the links below to find what you were looking for:</p>
            <div class="my-4 text-center">
              ${actions.map(eachAction =>
                template_link(eachAction)).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
    `
  ]
}

module.exports = page_content;
