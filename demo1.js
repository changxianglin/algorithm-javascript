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

var mult = (function () {
  var cache = {}
  return function () {
    var args = Array.prototype.join.call(arguments, ',')
    if (cache[args]) {
      return cache[args]
    }
    var a = 1
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i]
    }
    return cache[args] = a
  }
})()

// mult(1, 2, 3)

window.onload = function () {
  log(document.getElementsByTagName('*').length)
}

Function.prototype.after = function (afterfn) {
  var _self = this
  return function () {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

window.onload = (window.onload || function () { }).after(function () {
  log(document.getElementsByTagName('*').length)
})

log('....')

//  v1
// var makeSound = function (animal) {
//   if (animal instanceof Duck) {
//     log('嘎嘎嘎')
//   } else if (animal instanceof Chicken) {
//     log('咯咯咯')
//   } else if (animal instanceof Dog) {
//     log('汪汪汪')
//   }
// }

// var Duck = function () { }
// var Chicken = function () { }

// makeSound(new Duck())
// makeSound(new Chicken())

// var Dog = function () { }
// makeSound(new Dog())

// v2
var makeSound = function (animal) {
  animal.sound()
}

var Duck = function () { }

Duck.prototype.sound = function () {
  log('嘎嘎嘎')
}

var Chicken = function () { }

Chicken.prototype.sound = function () {
  log('咯咯咯')
}

makeSound(new Duck())
makeSound(new Chicken())

var Dog = function () { }
Dog.prototype.sound = function () {
  log('汪汪汪')
}

makeSound(new Dog())

log('map')

var arrayMap = function (ary, callback) {
  var i = 0,
    length = ary.length,
    value,
    ret = []
  
  for (; i < length; i++) {
    value = callback(i, ary[i])
    ret.push(value)
  }

  return ret
}

var a = arrayMap([1, 2, 3], function (i, n) {
  return n * 2
})

var b = arrayMap([1, 2, 3], function (i, n) {
  return n * 3
})

log(a)
log(b)