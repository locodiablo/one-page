const paths = require("../paths.js")
const vars = require("../vars.js")
const functions = require("../functions.js")
const img_logo = require("../partials/img_logo.js")
const navTab = function(data){
  const navItem = paths.menuData[data]
  return `
  <a href="/#${navItem.href}" role="tab" aria-controls="${navItem.href}" aria-selected="false" class="nav-item nav-item-content-${data}">
    ${navItem.text}
  </a>
  `
}

function navbar(data){return `
  <nav class="navbar navbar-main navbar-expand-md fixed-top p-0">
    <div class="container-xl navbar-container p-0">

      <div class="d-none d-md-flex navbar-expand navbar-contact col-md-5">
        <div class="nav nav-tabs text-center nav-items navbar-nav navbar-site">
          ${navTab("contact")}
          ${navTab("cv")}
        </div>
      </div>

      <div class="navbar-expand mx-auto">
        <div class=" nav nav-tabs text-center nav-items navbar-nav navbar-site">
          <a href="/#content-home" class="nav-item nav-item-home" role="tab" aria-controls="content-home" aria-selected="true">
            ${img_logo({id: 'nav_logo',class: ''})}
            <span class="d-none d-md-inline- strong">${vars.site_name}</span>
          </a>
        </div>
      </div>

      <div class="d-none d-md-flex navbar-expand navbar-about col-md-5 justify-content-end nav nav-tabs nav-items ml-auto">
        ${navTab("about")}
        ${navTab("gallery")}
        ${navTab("career")}
      </div>

      <span class="navbar-toggler j-main-menu" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-fas fas fa-bars"></span>
      </span>

    </div>
  </nav>

`};

module.exports = navbar;
