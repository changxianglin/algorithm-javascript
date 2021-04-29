const log = console.log.bind(console)

log('demo3...')

$(function () {
  var MVC = MVC || {}
  MVC.model = function () {
    var M = {}
    M.data = {}
    M.conf = {}
    return {
      getData: function (m) {
        return M.data[m]
      },
      getConf: function (c) {
        return M.conf[c]
      },
      setData: function (m, v) {
        M.data[m] = v
        return this
      },
      setConf: function (c, v) {
        M.conf[c] = v
        return this 
      }
    }
  }()

  MVC.view = function () {
    var M = MVC.model
    var V = {}
    return function (v) {
      V[v]()
    }
  }()

  MVC.ctrl = function () {
    var M = MVC.model
    var V = MVC.view
    var C = {}
  } ()
})

MVC.model = function () {
  var M = {}
  M.data = {
    sliderBar: [
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
      {
        text: '萌妹子',
        icon: '',
        content: '',
        img: '',
        href: '',
      },
    ]
  }
  M.conf = {
    sliderBarCloseAnimate: false
  }
  return {}
}()