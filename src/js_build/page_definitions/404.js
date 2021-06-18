const functions = require("../functions");
const paths = require("../paths");

const page_content = {
  config: {
    html_template: "template_page_master",
    nav_text: "404 error. Crikey.",
    body_class: ""
  },
  head:{
    title: "Crikey.<br>Something's missing.",
    description: "Crikey. 404 error. Somebody's asking for a smacked bottom."
  },
  body:[
    "404 page text"
  ]
}

module.exports = page_content;
