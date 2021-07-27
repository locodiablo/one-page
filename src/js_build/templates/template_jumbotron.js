function template(data){
  const align = data.align == "right" ? "order-sm-last text-left" : "text-right"
  return `
  <div class="jumbotron ${data.class}">
    <div class="container-xl">
      <div class="row align-items-center">
        <div class="col-sm-6 ${align} primary">
          <h1 class="title strong has-subtitle">${data.title}</h1>
          <h2 class="h3 strong subtitle">${data.subtitle}</h2>
          <p class="caption mt-2">
            ${data.description}
          </p>
        </div>
        <div class="col-sm-6">
          ${data.secondary}
        </div>
      </div>
    </div>
  </div>
  `
}

module.exports = template
