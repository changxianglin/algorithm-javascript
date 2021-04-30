class Mvvm {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.vm = this

    new Observer(this.$data)
    new Compiler(this.vm)
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

    Object.defineProperty(data, key, {
      set(newValue) {
        console.log('set called')
        // 新旧值相等不做操作提升性能
        if (newValue == value) return
        
        value = newValue
      },
      get() {
        console.log('get called')
        return value
      }
    })
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

  compileText() {

  }

  compile(fragment) {
    let childnode = fragment.childNodes;
    [...childnode].forEach(node => {
      let nodeType = node.nodeType
      // 编译元素节点的内容
      if (nodeType === 1) {
        this.compileElement(node)
      }

      // 编译文本节点的内容
      if (nodeType === 3) {
        this.compileText()
      }
    })
  }
}

let Utils = {
  getValue(data, expr) {
    return expr.replace(/\{\{(.*?)\}\}/, (...args) => {
      return data[args[1]]
    })
  },

  model(node, expr, vm) {
    let value = this.getValue(vm.$data, expr)
    this.updater.model(node, value)
  },

  updater: {
    model: (node, value) => {
      node.value = value
    }
  }
}