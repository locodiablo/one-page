const paths = require("../js_build/paths.js");
const vars = require("../js_build/vars.js");
const dirTree = require("directory-tree");
const fs = require("file-system")

const render_link_item = function(data){
  let rtn = '';
  const templateLink = function(data){
    return `<a href="${data.href}" class="${data.class ? data.class : ''}" ${data.target ? `target="${data.target}"` : ''}>${data.text}</a>`
  };
  const template = function(data){
    return `<span class="${data.class ? data.class : ''}">${data.text}</span>`
  };
  data.href ? rtn = templateLink(data) : rtn = template(data);
  return rtn;
}

const functions = {

  render_heading: function(data){
    return `<h1 class="${data.class ? data.class : ''} page-title text-${data.align}">${data.text}</h1>`
  },
  render_link: function(data){
    data.class = `text-link ${data.class}`;
    return render_link_item(data);
  },
  render_btn: function(data){
    data.class += " btn ";
    return render_link_item(data);
  },
  render_script: {
    returns: function(data){
      return `
      <script>${data}</script>
      `
    }
  },
  render_bullets: function(data){
    return `
      <ul class="bullets text-left pb-4 ${data.classes ? data.classes : ''}">
        ${data.bullets.map(bulletpoint =>
          `<li class="pb-3">${bulletpoint}</li>`
          ).join("")}
      </ul>
    `
  },
  render_blockquote: function(data){
    return `
      <blockquote class="blockquote">${data}</blockquote>
    `
  },
  render_img: function(data){
    return `
      <img src="${data.src}" class="${data.class}" alt="${data.alt}">
    `
  },
  render_centered_col: function(data){
    return `
    <div class="row justify-content-center">
      <div class="${data.classes}">
        ${data.content}
      </div>
    </div>
    `
  },
  render_body_corporate: function(data){
    return functions.render_centered_col({
      classes: "col-12 col-md-9 col-lg-10 col-xl-6",
      content: data
    })
  },
  render_text_curve: function(data){
    // thanks to CSS tricks
    return   `
    <div class="brand-font curve-text">
      <svg viewBox="0 0 425 300">
        <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
        <text x="25">
        <textPath xlink:href="#curve">
          ${data}
        </textPath>
        </text>
      </svg>
    </div>`
  },
  render_links: function(data){
    return `
    <div class="nav-items nav-items-column">
      ${vars.menuData[data].children.map(eachPage => {
        return eachPage.type == "directory" ?
         `
          <a href="${eachPage.path.replace(paths.definitionsDir,'')}" class="nav-item d-block">
           <i class="site-icon nav-fas fas fa-arrow-right mr-2"></i> ${eachPage.name}
          </a>
          ` : ''

      }).join("")}
    </div>
    `
  },
  return_dirs: function(data){
    let dirsToReturn = [];
    let dirs = dirTree(data).children
    dirs.map(eachItem => {
      eachItem.type == 'directory' ? dirsToReturn.push(eachItem) : ''
    })
    return dirsToReturn;
  },
  return_img_src: function(data){
    const theSrc = fs.readFileSync("./src/assets/images/" + data, 'utf8')
    return theSrc
  },
  return_child_links: function(data){
    let links = []
    data.map(eachPage => {
      //let eachPageData11111 = require(`../${eachPage.path.replace(paths.definitionsDir,'')}/index.js`)// works in /about
      let eachPageData = require(`./page_definitions${eachPage.path.replace(paths.definitionsDir,'')}/index.js`)
      links.push({
        href: eachPage.path.replace(paths.definitionsDir,''),
        text: eachPageData.config.nav_text
      })
    }).join("")
    //console.log('links',links)
    return links
  },
  return_pagepath: function(data){
    let fpathS = data.lastIndexOf("/page_definitions");
    let fpathE = data.length;
    let thisFile = data.slice(fpathS+1,fpathE);
    let newPath = thisFile.replace("/index.js","");
    return newPath;
  },
  return_pages_data: function(data){
    let output = [];

    function filterByID(item) {
      if (item.type!=='file') {
        return true
      }
      return false;
    }

    const arrOfDirs = data.filter(filterByID);

    const renderPagePreviews = arrOfDirs.map(eachPage =>
      {
        const relativeUrl = eachPage.path.replace(paths.definitionsDir,"");
        const outputUrl = relativeUrl.replace(eachPage.extension,".html");
        const pageData = require(`./page_definitions/${relativeUrl}/index.js`);
        pageData.link = outputUrl;
        output.push(pageData);
      }
    );
    return output;
  },
  text_capitalize: function(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
  },
  lipsum: function(){
    return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore`
  },
  mathIsEven: function(value){
    if(value%2 == 0){return true}else{return false}
  },
  mathRandomNumber: function(num1,num2){
    return Math.floor(Math.random() * num2 + num1)
  }
}

module.exports = functions;
