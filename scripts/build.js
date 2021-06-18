const fs = require("file-system");
const fse = require("fs-extra");
const dirTree = require("directory-tree");
//const bootstrapRoot = './node_modules/bootstrap/js/src';
const thumb = require('node-thumbnail').thumb;
const paths = require('../src/js_build/paths.js');
const vars = require('../src/js_build/vars.js');
const pdf = require('html-pdf');
//
const border = "10mm"
const templateCVfooter = `
<div class="cv-footer">
  <span class="cv-footer-link cv-footer-text">
    &copy;Simon Rollett ${vars.theDate.year}. All rights reserved.
    ${vars.site_footer_caption} ${vars.buildDate}
  </span>
  <span class="cv-footer-page cv-footer-text">{{page}}/{{pages}}</span>
</div>
`
const options = {
  format: 'A4',
  height: "297mm",
  width: "210mm",
  quality: 100,
  orientation: 'portrait',
  directory: `${paths.publicDir}/assets`,
  timeout: '100000',
  border: {
    "top": border,            // default is 0, units: mm, cm, in, px
    "right": border,
    "bottom": 0,
    "left": border
  },
  footer: {
    "height": "15mm",
    "contents": {
      default: templateCVfooter
    }
  }
}

// RETURN SRC FILES AS OBJECT
//const pageDefinitionsDir = dirTree(`./${paths.definitionsDir}`,{extensions:/\.js/});
//const imagesDirSrc = dirTree(`${paths.imagesDir}/gallery`,{extensions:/\.jpg/});

// const buildActions = {
//   directory: function(data,level){
//     data.children.map((dirItem,index) =>
//        {
//          buildActions[dirItem.type](dirItem,level,index)
//        }
//     ).join("");
//   },
//   file: function(data,level,index){
//     const pageContent = require(`../${data.path}`);
//     const pageTemplate = require(`${paths.templatesDir}/${pageContent.config.html_template}`);
//     const relativeUrl = data.path.replace(paths.definitionsDir,"");
//     const outputUrl = relativeUrl.replace(data.extension,".html");
//     pageContent.pageContentUrl = outputUrl.replace("index.html","");
//     pageContent.navDirActive = `${level}`;
//     fs.writeFile(`${paths.publicDir}${outputUrl}`, pageTemplate(pageContent), function(err) {});
//     console.log(`Output ${data.name} into ${paths.publicDir}${outputUrl}`)
//   }
// }

const buildThumbs = {
  directory: function(data){
    data.children.map(dirItem => buildThumbs[dirItem.type](dirItem)).join("")
    console.log('buildThumb path',data.path)
  },
  file: function(data){
    let destPath = `${data.path.replace(data.name,'')}`
    destPath = destPath.replace('src','./public')
    thumb({
      source: `${data.path}`,
      destination: destPath,
      suffix: paths.thumbSuffix,
      width: vars.thumbWidth,
      overwrite: true,
      concurrency: 4
    }, function(files, err, stdout, stderr) {
      //console.log('Image thumbs complete.');
    })
    console.log('destPath: '+ destPath)
  }
}

const printProjects = [
  {
    content: paths.pageCVsource,
    destination: paths.pageCVfile
  },
  {
    content: paths.pageWorksource,
    destination: paths.pageWorkfile
  }
]

// end cv
function buildPDFS(data){
  data.map(eachProject => {
    const eachProjectData = require(eachProject.content)
    const pageTemplate = require(`${paths.templatesDir}/${eachProjectData.config.html_template}`)
    pdf.create(pageTemplate(eachProjectData), options).toFile(`./public${eachProject.destination}`, function(err, res) {
      if (err) return console.log(err);
      console.log(`PDF build complete for: ${res.filename}`)
    })
  })
}

// RETURN SRC FILES AS OBJECT
const pageDefinitionsDir = dirTree(`./${paths.definitionsDir}`,{extensions:/\.js/});
const imagesDirSrc = dirTree(`${paths.imagesDir}/gallery`,{extensions:/\.jpg/});

const buildActions = {
  directory: function(data,level){
    data.children.map((dirItem,index) =>
       {
         buildActions[dirItem.type](dirItem,level,index)
       }
    ).join("");
  },
  file: function(data,level,index){
    const pageContent = require(`../${data.path}`);
    const pageTemplate = require(`${paths.templatesDir}/${pageContent.config.html_template}`);
    const relativeUrl = data.path.replace(paths.definitionsDir,"");
    const outputUrl = relativeUrl.replace(data.extension,".html");
    pageContent.pageContentUrl = outputUrl.replace("index.html","");
    pageContent.navDirActive = `${level}`;
    fs.writeFile(`${paths.publicDir}${outputUrl}`, pageTemplate(pageContent), function(err) {});
    console.log(`Output ${data.name} into ${paths.publicDir}${outputUrl}`)
  }
}

// BUILD PAGES
pageDefinitionsDir.children.forEach((ChildItem,index) => {
  let level = index
  buildActions[ChildItem.type](ChildItem,level,index)
})

function copyThumbs(){
  console.log('Start generate thumbnails...')
  imagesDirSrc.children.forEach(imgItem => {
    buildThumbs[imgItem.type](imgItem)
  })
}

// SETUP LOCALHOST DASHBOARD RESOURCES
fse.copy(`${paths.src}/assets`, `${paths.publicDir}/assets`)
.then(() => copyThumbs())
//.then(() => buildPDFS(printProjects))
//.then(() => buildCV())
.catch(err => console.error(err))
