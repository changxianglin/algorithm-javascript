const log = console.log.bind(console)

log('...start...!')
var myImage = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

var proxyImage = (function () {
  var img = new Image
  img.onload = function () {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function (src) {
      myImage.setSrc('http://imgcache.qq.com/music/photo/000GGDys0yA0Nk.jpg');
      img.src = src
    }
  }
})()

// proxyImage.setSrc('http://imgcache.qq.com/music/photo/000GGDys0yA0Nk.jpg')

var each = function (obj, callback) {
  var value,
    i = 0,
    length = obj.length,
    isArray = Array.isArray(obj)
  
  if (isArray) {
    for (; i < length; i++) {
      callback.call(obj[i] , i, obj[i])
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i])
    }
  }
  return obj
}

var appendDiv = function (data) {
  // v1
  // for (var i = 0, l = data.length; i < l; i++) {
  //   var div = document.createElement('div')
  //   div.innerHTML = data[i]
  //   document.body.appendChild(div)
  // }

  // v2
  each(data, function (i, n) {
    var div = document.createElement('div')
    div.innerHTML = n
    document.body.appendChild(div)
  })
}

// appendDiv([1, 2, 3, 4, 5, 6])

// appendDiv([1, 2, 3, 4, 5, 6])
// appendDiv({a: 1, b: 2, c: 3, d: 4})

var createLoginLayer = (function () {
  var div
  return function () {
    if (!div) {
      div = document.createElement('div')
      div.innerHTML = '我是登录浮窗'
      div.style.display = 'none'
      document.body.appendChild(div)
    }
    return div
  }
})()

// createLoginLayer()