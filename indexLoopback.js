// Замыкания

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

const comUrl = urlGenerator('com')
//console.log(comUrl('google'))