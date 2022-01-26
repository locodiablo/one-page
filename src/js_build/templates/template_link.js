function template(data){
  return `
    <a class="btn-2" href="${data.type == 'href' ? '/#':''}${data.href}">
      <span class="btn-icon ${data.icon}"></span>${data.text}
    </a>
  `
}

module.exports = template
