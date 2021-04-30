class Mvvm {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.vm = this

    new Observer(this.$data)
    new Compiler(this.vm)

    this.proxy(this.$data)
  }

  proxy(data) {
    for (let key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key]
        }
      })
    }
  }
}

class Observer {
  constructor(data) {
    this.observer(data)
  }

  observer(data) {
    if (!data || typeof data != 'object') {
      return 
    }

    for (let key in data) {
      this.definReactiveProp(data, key, data[key])
    }
  }

  definReactiveProp(data, key, value) {
    // value 可能是对象, 需要递归设置
    this.observer(value)

    let dep = new Dep()
    Object.defineProperty(data, key, {
      set(newValue) {
        console.log('set called')
        // 新旧值相等不做操作提升性能
        if (newValue == value) return
        
        value = newValue
        dep.notify()
      },
      get() {
        // console.log('get called')
        if (Dep.target) {
          dep.addSub(Dep.target)
        }

        return value
      }
    })
  }
}

// 观察者模式 观察者 dep 被观察者 watcher
class Dep {
  constructor() {
    this.subs = []
  }
  
  addSub(watcher) {
    this.subs.push(watcher)
  }

  notify() {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}

class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    this.oldVal = this.get()
  }

  get() {
    Dep.target = this
    let oldVal = this.vm.$data[this.key]
    Dep.targe = null 
    return oldVal
  }

  update() {
    let newVale = this.vm.$data[this.key]
    if (!this.oldVal != newVale) {
      this.cb(newVale, this.oldVal)
    }
  }
}

class Compiler {
  constructor(vm) {
    // 获得 app 节点
    this.el = document.getElementById(vm.$el)

    this.vm = vm

    // 获得 app 节点下面的内容, 并把他们暂时存在 fragment 节点中
    let fragment = this.getFragment(this.el)

    // 编译 fragment 节点中的内容
    this.compile(fragment)

    // 把 fragment 添加到 app 节点下面
    this.el.appendChild(fragment)
  }

  getFragment(node) {
    let firstChild;
    let fragment = document.createDocumentFragment()

    while (firstChild = node.firstChild) {
      fragment.appendChild(firstChild)
    }

    return fragment
  }

  compileElement(node) {
    let attrs = node.attributes
    if (attrs.length > 0) {
      let vmodel = attrs.getNamedItem('v-model')
      if (vmodel) {
        var expr = vmodel.value
        Utils.model(node, expr, this.vm)
      }
    }
  }

  compileText(node) {
    let exp = /\{\{(.*?)\}\}/g
    let text = node.textContent
    if (exp.test(text)) {
      Utils.text(node, text, this.vm)
    }
  }

  compile(fragment) {
    let childnode = fragment.childNodes;
    [...childnode].forEach(node => {
      let nodeType = node.nodeType
      // 编译元素节点的内容
      if (nodeType === 1) {
        this.compileElement(node)
        this.compile(node)
      }

      // 编译文本节点的内容
      if (nodeType === 3) {
        this.compileText(node)
      }
    })
  }
}

let Utils = {
  getValue(data, expr) {
    return expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
      return data[args[1]]
    })
  },

  getKey(expr) {
    return expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
      return args[1]
    })
  },

  model(node, expr, vm) {
    let value = this.getValue(vm.$data, expr)
    let key = this.getKey(expr)

    node.addEventListener('input', e => {
      let value = e.target.value
      vm.$data[key] = value
    }, false)

    this.updater.model(node, value)
  },

  text(node, expr, vm) {
    // 匹配表达式
    let textUpdater = this.updater.text
    expr.replace(/\{\{(.*?)\}\}/g, (...args) => {
      // console.log(vm.$data[args[1]])
      let cnt = expr.replace(/\{\{(.*?)\}\}/g, (...args2) => {
        return vm.$data[args2[1]]
      })

      new Watcher(vm, args[1], () => {
        let cnt = expr.replace(/\{\{(.*?)\}\}/g, (...args2) => {
          return vm.$data[args2[1]]
        })

        textUpdater(node, cnt)
      })

      textUpdater(node, cnt)
    })
  },

  updater: {
    model: (node, value) => {
      node.value = value
    },
    text: (node, value) => {
      node.textContent = value
    }
  }
}