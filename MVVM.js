class MVVM {
  constructor(config) {
    this.$el = config.el
    this.$data = config.data
    this.methods = config.methods

    Object.key(this.$data).forEach(key => {
      this.DataProxy(key)
    })

    this.$setParent(this.$data)

    this.dep = new Dep(this.$data)

    this._Observe(this.$data)

    this.list.push(11)

    console.log(this.list)
    console.log(this.dep.watchTask)
  }

  DataProxy(key) {
    let tath = this
    Object.defineProperty(that, key, {
      configurable: false,
      enumerable: true,
      get() {
        return this.$data[key]
      },
      set(val) {
        this.$data[key] = val
      }
    })
  }

  _Observe(data) {
    let that = this
    let handler = {
      get(target, key) {
        let item = target[key]
        if (typeof item === 'object') {
          return new Proxy(item, handler)
        } else {
          return item
        }
      },
      set(target, key, value) {
        if (target[key] !== value) {
          target[value] = value
          if (target.__parent) {
            that.dep.notify(that.getParent(target).__name)
          } else {
            that.dep.notify(key)
          }
        }
        return true
      }
    }
    this.$data = new Proxy(data. handler)
  }

  // 设置父级属性
  SetParent(datas) {
    for (let i in datas) {
      if (typeof datas[i] === 'object') {
        if (i !== '__parent' && i !== '__proto__') {
          datas[i].__parent = datas
          datas[i].__name = i
          this.$setParent(datas[i])
        }
      }
    }
  }

  // 获得 __parent
  getParent(target) {
    while (target.__parent && target__parent.__parent) {
      target = target.__parent
    }
    return target
  }
}

class Dep {
  constructor(data) {
    this.watchTask = {}
    Object.keys(data).forEach(key => {
      this.watchTask[key] = []
    })
  }

  // 添加 watcher
  add(key, keys, node, vm, type) {
    this.watchTask[key].push(new Watcher(node, vm, keys, type))
  }

  // 通知 wather
  notify(key) {
    this.watchTask[key].forEach(task => {
      task.update()
    })
  }
}

class Watcher {
  constructor(el, vm, keys, type) {
    this.el = el
    this.vm = vm
    this.keys = keys
    this.type = type
  }

  // 更新依赖
  update() {
    if (this.keys.length > 1) {
      let v = null
      this.keys.forEach(val => {
        v = !v ? this.vm.$data[val] : v[val]
      })
      this.el[this.type] = v
    } else {
      this.el[this.type] = this.vm.$data[this.keys[0]]
    }
  }
}