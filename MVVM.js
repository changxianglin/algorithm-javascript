class MVVM {
  constructor(config) {
    this.$el = config.el
    this.$data = config.data
    this.methods = config.methods

    Object.key(this.$data).forEach(key => {
      this.DataProxy(key)
    })

    this._Observe(this.$data)

    this.list.push(11)

    console.log(this.list)
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
          console.log('改更新了')
        }
        return true
      }
    }
    this.$data = new Proxy(data. handler)
  }
}