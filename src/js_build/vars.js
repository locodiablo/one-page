const fs = require("file-system");
const site_domain = "sjrollett.com";
const paths = require("../js_build/paths")
const dirTree = require("directory-tree");
const today = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const leadingZero = function(data){
  let leader = ''
  data < 10 ? leader = "0" + data : leader = data
  return leader
}

const vars = {
  site_url: `www.${site_domain}`,
  site_name: "S.J.Rollett",
  site_name_full: "Simon Rollett",
  site_email: `simon@madjester.co.uk`,
  site_domain: site_domain,
  site_cv_caption: "Web and brand creative",
  site_footer_caption: "Lovingly designed and built with .js by me. So there.",
  site_name_caption: "Former Lead Designer at Policy Expert: fast-growing UK insurer and number 1 rated UK home insurance provider on Review Centre, founder of MadJester Clothing",
  brand_font: 'Titillium Web',// Titillium Web
  // url_cv: "assets/cv/simon-rollett-i-cv-2022.pdf",
  // url_portfolio: "/assets/cv/simon-rollett-portfolio-v1-2022-z.pdf",
  //logo_src: fs.readFileSync("./src/assets/images/brand_vector/logo-sr.svg", 'utf8'),

  skyClasses: [
    "dusk",
    "midnight",
    "sunset"
  ],
  skills: [
    {"Photoshop": 15},
    {"InDesign": 10},
    {"Illustrator": 10},
    {"JavaScript": 10},
    {"Node": 10},
    {"HTML": 10},
    {"CSS, CSS3": 10},
    {"PHP": 10},
    {"WordPress": 10}
  ],
  thumbWidth: 300,
  theDate: {
    year: today.getFullYear()
  },
  text: {
    detail: "View project",
    details: "Projects"
  },
  buildDate: `${leadingZero(today.getHours())}${leadingZero(today.getMinutes())}-${leadingZero(today.getDate())}${months[today.getMonth()].substring(0,3).toUpperCase()}${today.getFullYear()}`
}

module.exports = vars;
