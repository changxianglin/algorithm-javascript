class Mvvm {
  constructor(options) {
    this.$el = options.el
    this.$data = options.data
    this.vm = this

    new Observer(this.$data)
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