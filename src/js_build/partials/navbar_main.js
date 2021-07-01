const paths = require("../paths.js")
const vars = require("../vars.js")
const functions = require("../functions.js")
const navTab = function(data){
  const navItem = paths.menuData[data]
  return `
  <a href="#${navItem.value}" data-toggle="tab--" role="tab" aria-controls="${navItem.value}" aria-selected="false" class="nav-item nav-item-content-${data}">
    ${navItem.text}
  </a>
  `
}

function navbar(data){return `
  <nav class="navbar navbar-main navbar-expand-sm fixed-top p-0">
    <div class="container-xl navbar-container p-0">

      <div class="navbar-expand">

        <div class=" nav nav-tabs text-center nav-items navbar-nav navbar-site">
          <a href="/" class="nav-item nav-item-home">
            ${functions.render_img({
              src: paths.imagesSimonRLogo,
              class: "nav-logo",
              alt: `Logo for ${vars.site_name_full}: ${vars.site_cv_caption}`
            })}
            <span class="d-none d-md-inline strong">${vars.site_name}</span>
          </a>
          ${navTab("contact")}
          ${navTab("cv")}
        </div>

      </div>

      <div class="d-none d-sm-flex navbar-expand nav nav-tabs nav-items ml-auto">
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
