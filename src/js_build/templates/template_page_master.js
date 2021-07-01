const functions = require("../functions");
const dochead = require("../partials/head");
const navbar_main = require("../partials/navbar_main");

const footer = require("../partials/footer");
const paths = require("../paths.js");
const vars = require("../vars.js");

function template_home(data){
  const galleryCarouselJS = ('gallery' in data) ? `<script>$("#${data.gallery.id}").carousel();</script>` : ''
return `
${dochead(data)}
<body class="page-basic ${data.config.body_class ? data.config.body_class : ''}" data-tpb="${data.pageContentUrl}" data-date="${vars.buildDate}">
  ${navbar_main(data)}
  ${data.body.map(bodyPart => bodyPart).join("")}
  ${footer(data)}
  <script>
    const menuData = ${JSON.stringify(paths.menuData)}
    //const contacts = ${JSON.stringify(vars.profileLinks)}
    const cv = ${JSON.stringify({
      pageCV: paths.pageCV,
      pageCVfile: paths.pageCVfile,
      pageGalleryWorkFile: paths.pageGalleryWorkFile,
      pageGalleryArtFile: paths.pageGalleryArtFile
    })}
  </script>
  ${data.scripts ? data.scripts : ''}
  <script charset="utf-8" src="/assets/js/bundle.js?${Date.now()}"></script>
  ${galleryCarouselJS}

  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
       https://firebase.google.com/docs/web/setup#available-libraries -->
  <script src="https://www.gstatic.com/firebasejs/7.9.3/firebase-analytics.js"></script>

  <script>
    var firebaseConfig = {
      apiKey: "AIzaSyAG2LXdSJkA9aQ3ErDPafJnqcg3D85Z3mY",
      authDomain: "sjrollett.firebaseapp.com",
      databaseURL: "https://sjrollett.firebaseio.com",
      projectId: "sjrollett",
      storageBucket: "sjrollett.appspot.com",
      messagingSenderId: "763016570589",
      appId: "1:763016570589:web:c54186d0cf9adc459ddd34",
      measurementId: "G-C6DLPS7DXM"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>

  <script type="text/javascript">

  $(document).ready(function ($) {

    // var hash = "";
    //
    // function doTab(data){
    //   $('.tab-pane.active.show').removeClass("active show");
    //   $('.navbar-main .nav-item-' + data).addClass("active");
    //   $('#' + data).addClass(" active");
    //   setTimeout(function(){
    //     $(id_modal).hide()
    //     $("body .modal-backdrop").remove()
    //     $('#' + data).addClass(" show");
    //     console.log('#' + data + ' done')
    //   },300)
    //
    // }
    //
    // function setDefault(){
    //   doTab('content-home')
    // }
    //
    // function locationHashChanged() {
    //   hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash
    //   doTab(hash)
    // }
    //
    // function hashCheck(){
    //   location.hash !== "" ? locationHashChanged() : setDefault()
    // }
    //
    // window.onhashchange = hashCheck;
    //
    // hashCheck()

  })

  const page = {
    show: function(data){

    }
  }

</script>
</body>
</html>
`}
module.exports = template_home;
