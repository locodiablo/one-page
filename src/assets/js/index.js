"use strict";

const id_modal = "#myModal"
const id_cover_bg = ".jumbotron-cover"
const modal_nav_class = "modal-nav"
const classScrollActive = 'scrollActive'
const classNavBackDefaults = "nav-back"//nav-item nav-back disabled j-back
const classNavMain = ".navbar-main"
const classNavItems = "modal-nav-btns"
const classNavItem = "btn-2"
const scroll_min = 40
const classNavTabActive = "nav-t-active"
let scroll_top = 0
const transition_interval = 1200
const nav_carousel_id = ".nav_carousel"
const idNavBack = ".nav-back"
let clickedNavIndex = []
let currentIndex = 0
let classBody = ''
let lastActiveNav = 0
let gallery = ''

function isMobileDevice() {
    //return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
    let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function do_modal(data) {
  classBody = data.class
  $("body").addClass(classBody)
  $(id_modal + " .modal-title").html(data.title)
  $(id_modal + " .modal-body").html(data.body)
  data.footer ? $(id_modal + " .modal-footer").html(data.footer) : ''
  $(id_modal).modal({
    backdrop: data.backdrop
  })
}

function navCarouselActive(){
 currentIndex > 0 ? $(idNavBack).attr("class",`${classNavBackDefaults} j-nav-back`) : $(idNavBack).attr("class",`${classNavBackDefaults} disabled`)
}

function clearModalOnClose(){
  $(id_modal).attr("class", "modal fade")
  $(id_modal + " .modal-body").html("")
  $(id_modal + " .modal-footer").html("")
  $(id_modal).data('bs.modal',null)
  $("body").removeClass(classBody)
  $("body .modal-backdrop").remove()
}

function resetModalNav(){
  currentIndex = 0;
  clickedNavIndex = []
  navCarouselActive()
  clearModalOnClose()
  $(`.nav-item-${lastActiveNav}`).removeClass(classNavTabActive)
}

const templates = {
  navItemsText: function(data){
    return `<div class="nav-title nav-section-heading h3 m-0">${data.parentData.text}</div>`
  },
  navItemsLink: function(data){
    return `<a class="nav-title d-block p-0 nav-section-heading h3 m-0" href="${data.parentData.href}"><i class="site-icon nav-fas icon-chevron-right mr-2"></i>${data.parentData.text}</a>`
  },
  navItems: function(data){
    return `<div class="${classNavItems} nav-items-column">
      ${data.map(eachNavItem => {return `
        <a class="${classNavItem} ${eachNavItem.class}" href="${eachNavItem.href}">
          <span class="btn-icon ${eachNavItem.icon} mr-2"></span>${eachNavItem.text}
        </a>
        `}).join("")}
    </div>
    `
  },
  navCarouselItem: function(data){
    return `
    <div class="carousel-item item-${data.carouselItemIndex} ${data.carouselItemIndex == 0 ? 'active' : ''}">
        <div class="row align-items-center">
          <div class="nav-items col-12 col-sm-6">
            <div class="p-4 p-sm-0 py-sm-4 brand-font nav-section-description">
              ${data.left}
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="text-center ${classNavItems} nav-items-column">
              ${data.right}
            </div>
          </div>
    </div>
    `
  },
  sideNavTypes: {
    href: function(incomingLinkData){
     return `
     <a class="${classNavItem} list-group-item-${incomingLinkData.href} nav-href" href="#${incomingLinkData.href}">
         <i class="btn-icon nav-fas ${incomingLinkData.icon}"></i>${incomingLinkData.text}
     </a>
     `
   },
    file: function(incomingLinkData){}
  },
  linkBack: `
      <div class="nav-back disabled j-back" aria-label="back link">
          <i class="nav-fas icon-chevron-left mr-2"></i>
      </div>
  `,
  navCarousel: function(data){
    return `
    <div class='container p-0'>
      <div id="nav_carousel" class="carousel slide nav_carousel" data-ride="false" data-interval="false">
        <div class="carousel-inner">
          ${
            templates.navCarouselItem({
              carouselItemIndex: currentIndex,
              //parentData: data.parentData,
              left: data.left,
              right: data.right
            })}
        </div>
      </div>
    </div>
    `
  }
}

function navSetTab(data){
  $(`.nav-item-${lastActiveNav}`).removeClass(classNavTabActive)
  $(`.nav-item-${data}`).addClass(classNavTabActive)
  lastActiveNav = data
}

function renderModalNav(data){
  $("body").removeClass(classBody)
  navSetTab(data.navTabIndex)
  const modal_data = {
    backdrop: true,
    title: data.modalTitle,
    body: data.modalBody,
    class: data.bodyClass
  }
  do_modal(modal_data)
}

function returnLastMenuData(data){
  let menuDataToUse = data
  clickedNavIndex.map(eachNavObjectIndex => {
    menuDataToUse = menuDataToUse[eachNavObjectIndex].children
  }).join("")
  return menuDataToUse
}

// moves nav carousel to next link group,
// based on last clicked link index
function goToCarouselNavMenu(data){

  const rightTitle = data.parentData.href ?
  templates.navItemsLink(data) : templates.navItemsText(data)
  const rightLinks = returnLastMenuData(menuData).map((navItem,index) => {
    let linkData = {
      data: navItem,
      thisLinkCount: index
    }
    return templates.sideNavTypes[navItem.type](linkData)
  }).join("")

  $(`${nav_carousel_id} .carousel-inner`).append(
    templates.navCarouselItem({
      carouselItemIndex: currentIndex+1,
      parentData: data.parentData,
      left: rightTitle +  data.parentData.description,
      right: rightLinks
  }))
  $(nav_carousel_id).carousel(currentIndex+1)
}

// $(".navbar-main .pupil-left").attr("cx",102)
// $(".navbar-main .pupil-right").attr("cx",275)

const startEyes = {
  pupilLeft: null,
  pupilRight: null
}

const setEyes = {
  load: function(){
    startEyes.pupilLeft = $(".navbar-main .logo_head_big .pupil-left").attr("cx")
    startEyes.pupilRight = $(".navbar-main .logo_head_big .pupil-right").attr("cx")
  },
  stare: function(){
    $(".navbar-main .logo_head_big .pupil-left").attr("cx",startEyes.pupilLeft)
    $(".navbar-main .logo_head_big .pupil-right").attr("cx",startEyes.pupilRight)
  },
  right: function(){
    $(".navbar-main .logo_head_big .pupil-left").attr("cx",107)
    $(".navbar-main .logo_head_big .pupil-right").attr("cx",268)
  },
  left: function(){
    $(".navbar-main .logo_head_big .pupil-left").attr("cx",45)
    $(".navbar-main .logo_head_big .pupil-right").attr("cx",165)
  }
}

$(document).ready(function ($) {

  setEyes.load()

  // open mobile nav
  $(document).on("click", ".j-main-menu", function(e){

    let newMenuContent = ""

    for(const i in menuData){
      console.log(`${i}: ${menuData[i].href}`)
      newMenuContent += templates.sideNavTypes[menuData[i].type](menuData[i])
    }

    resetModalNav()
    renderModalNav({
      modalTitle: templates.linkBack,
      modalBody: templates.navCarousel({
        parentData: {
          description: 'Start exploring!',
          text: 'Explore'
        },
        left: templates.navItemsText({
          parentData: {
            text: "Explore"
          }
        }),
        right: newMenuContent
      }),
      bodyClass: modal_nav_class
    })
  })

  // Navigate through menu carousel
  $(document).on("click", ".j-menu", function(e){
    e.preventDefault();
    const thisLinkLevel = Number(`${$(this).data("my-menu")}`)
    const parentData = returnLastMenuData(menuData)[thisLinkLevel].pageData
    clickedNavIndex.push(thisLinkLevel)
    goToCarouselNavMenu({
      clickedIndex: thisLinkLevel,
      parentData: parentData
    })
  })

  // open topnav menu

  $(document).on("click", ".j-nav-back", function(e){
    $(nav_carousel_id).carousel(currentIndex-1)
    clickedNavIndex.pop()
  })

  $(id_modal).bind("hidden.bs.modal", function(e) {
      $("body").removeClass("modal-top")
      resetModalNav()
  })

})

function checkScrollBar(){
    $(this).scrollTop() > scroll_min ?
    $("body").addClass(classScrollActive) : $("body").removeClass(classScrollActive)
}

// nav tabs
var hash = "";

function doTab(data){
  $('.tab-pane.active.show').removeClass("active show");
  $('.navbar-main .nav-item-' + data).addClass("active");
  $('body').addClass(hash);
  $('#' + data).addClass(" active");
  $('#' + data).addClass(" show");
  console.log('#' + data + ' done')
}

function setDefault(){
  hash = "content-home"
  doTab('content-home')
}

function locationHashChanged() {
  $('body').removeClass(hash);
  $('.navbar-main .nav-item-' + hash).removeClass("active");
  hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash
  //clearModalOnClose()
  $(id_modal).modal('hide')
  $('body').removeClass("modal-open");
  doTab(hash)
  //$("body").removeClass('model-open')
}

function hashCheck(){
  location.hash !== "" ? locationHashChanged() : setDefault()
}

window.onhashchange = hashCheck;

hashCheck()
// end navtab

$(document).on("slid.bs.carousel",nav_carousel_id,function(e){
  currentIndex = $(nav_carousel_id + ' div.active').index()
  $(`${nav_carousel_id} .item-${currentIndex+1}`).remove()
  navCarouselActive()
})

$(document).on("slid.bs.carousel",`.page-gallery`,function(e){// wa gallery.id
  currentIndex = $(`.page-gallery` + ' div.active').index()
  $(`.gallery-current-index`).text(currentIndex+1)
  lastGalleryIndex = currentIndex+1
  $(`.gallery-tabbed-content .gallery-texts`).removeClass('active show')
  $(`#gallery-text-${currentIndex}`).tab('show')
})

$(window).scroll(function () {
  checkScrollBar()
})
