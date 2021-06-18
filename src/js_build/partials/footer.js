const vars = require("../vars.js");
const paths = require("../paths.js");
const modal = require("./modal.js");

function footer(data){return `
  <footer class="footer py-4" role="contentinfo">
      <div class="container">
          <h5 class="small text-center">
              Copyright &copy; 2019 - ${new Date().getFullYear()}. ${vars.site_name}.
              <br class="d-sm-none">All rights reserved.
              <br class="d-sm-none">${vars.site_footer_caption}
          </h5>
          ${data.footer ? data.footer : ''}
      </div>
  </footer>
  ${modal(data)}
  `};

module.exports = footer;
