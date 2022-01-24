const template_link = require("./template_link.js")
function template(data){
  return `
  <div class="tab-pane fade text-center align-items-center justify-content-center" id="content-${data.id}" role="tabpanel" aria-labelledby="profile-tab">
    <div class="container-xl">
      <h1 class="py-4 m-0">${data.title}</h1>
      <div class="pb-4">
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 text-center">
            <h2>${data.subtitle}</h2>
            ${data.intro ? `<p class="strong text-center my-4">${data.intro}</p>` : ''}
            ${data.paras.map(eachPara => `<p class="my-4 text-left">${eachPara}</p>`).join("")}
            <div class="my-4 text-center">
              ${data.actions.map(eachAction => template_link(eachAction)).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

module.exports = template
