const paths = require("../paths.js")
const vars = require("../vars.js")
const functions = require("../functions.js")

function navbar(data){return `
  <nav class="navbar navbar-main navbar-expand-sm fixed-top p-0">
    <div class="container-xl navbar-container p-0">

      <div class="navbar-expand">
        <div class="nav-items navbar-nav navbar-site">
          <a href="/" class="col-auto nav-item nav-item-link" id="sjr-nav-logo">
            ${functions.render_img({
              src: paths.imagesSimonRLogo,
              class: "nav-logo",
              alt: `Logo for ${vars.site_name_full}: ${vars.site_cv_caption}`
            })}
            <span class="d-none d-md-inline strong">${vars.site_name}</span>
          </a>
          <a href="${paths.pageContact}" class="col nav-item nav-item-link j-contact">
            Contact
          </a>
          <a href="${paths.pageCV}" class="col nav-item nav-item-link j-cv">
            CV
          </a>
        </div>
      </div>

      <div class="d-none d-sm-flex navbar-expand ml-auto">
        <div class="nav-items navbar-nav navbar-site ml-auto-">
          <a href="${paths.pageGallery}" class="col nav-item nav-item-link j-t-menu" data-my-menu="2">
            Gallery
          </a>

          <a href="${paths.pageCareer}" class="col nav-item nav-item-link j-t-menu" data-my-menu="1">
            Career
          </a>

          <a href="${paths.pageAbout}" class="col nav-item nav-item-link j-t-menu" data-my-menu="0">
            About
          </a>

        </div>
      </div>

      <span class="navbar-toggler j-main-menu" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
        <span class="nav-fas fas fa-bars"></span>
      </span>
    </div>
  </nav>

`};

module.exports = navbar;
