const paths = require("../paths.js")
const vars = require("../vars.js")
const functions = require("../functions.js")

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
          <a href="${paths.menuData.contact.href}" class="nav-item nav-item-content-contact">
            ${paths.menuData.contact.text}
          </a>
          <a href="${paths.menuData.cv.href}" class="nav-item nav-item-content-cv">
            ${paths.menuData.cv.text}
          </a>
        </div>

      </div>

      <div class="d-none d-sm-flex navbar-expand nav nav-tabs nav-items ml-auto">
        <a href="${paths.menuData.gallery.href}" class="nav-item nav-item-content-gallery">
          ${paths.menuData.gallery.text}
        </a>
        <a href="${paths.menuData.career.href}" class="nav-item nav-item-content-career">
          ${paths.menuData.career.text}
        </a>
      </div>

      <span class="navbar-toggler j-main-menu" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-fas fas fa-bars"></span>
      </span>

    </div>
  </nav>

`};

module.exports = navbar;
