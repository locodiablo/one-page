const vars = require("../vars.js");
const paths = require("../paths.js");
var today = new Date();

const site_cache = `
<meta http-equiv=“Pragma” content=”no-cache”>
<meta http-equiv=“Expires” content=”-1″>
<meta http-equiv=“CACHE-CONTROL” content=”NO-CACHE”>
`

const old_icons = `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">`

function head(data){
const head = data.head;
const pageUrl = `https://${vars.site_url}${data.pageContentUrl}`
const pageImageUrl = head.hasOwnProperty('page_img_url') ? head.page_img_url : paths.imagesLogoSR
  return `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
    <title>${data.head.title} - ${vars.site_name}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    ${site_cache}

    <meta property="og:type" content="website">
    <meta property="og:title" content="${head.title}">
    <meta property="og:description" content="${head.hasOwnProperty('description') ? head.description : ''}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:site_name" content="${vars.site_name}">
    <meta property="og:locale" content="en_GB">
    <meta property="og:image" content="${pageImageUrl}">
    <meta property="og:updated_time" content="${today.toISOString()}">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${head.title}">
    <meta name="twitter:image" content="${pageImageUrl}">

    <meta property="og:type" content="website">
    <meta property="og:title" content="${head.title}">
    <meta property="og:url" content="${pageUrl}">
    <meta property="og:site_name" content="${vars.site_name}">
    <meta property="og:locale" content="en_GB">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${head.title}">

    <link rel="canonical" href="https://${vars.site_url}${data.pageContentUrl}" />

    <link rel="shortcut icon" href="${paths.faviconDir}favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="${paths.faviconDir}apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="${paths.faviconDir}favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="${paths.faviconDir}favicon-16x16.png">
    <link rel="manifest" href="${paths.faviconDir}site.webmanifest">
    <link rel="mask-icon" href="${paths.faviconDir}safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/assets/css/style.css?${today.getTime()}">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": "https://${vars.site_url}${data.pageContentUrl}",
      "name": "${vars.site_name}, Design Director",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "${vars.site_email}",
        "contactType": "Enquiries"
      }
    }
    </script>
  </head>
    `};

module.exports = head;
