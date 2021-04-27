const log = console.log.bind(console)

log('...start...')

function Stack() {
  let items = []

  this.push = function(element) {
    items.push(element)
  }

  this.pop = function() {
    return items.pop()
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.print = function () {
    log(items.toString())
  }
}

function Dictinary() {
  let items = {}

  this.has = function (key) {
    return key in items
  }

  this.set = function (key, value) {
    items[key] = value
  }

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined
  }
}

function Queue() {
  let items = []

  this.enqueue = function(element) {
    items.push(element)
  }

  this.dequeue = function () {
    return items.shift()
  }

  this.isEmpty = function () {
    return items.length == 0
  }
}

function Graph() {
  var vertices = []
  var adjList = new Dictinary()

  this.addVertex = function (v) {
    vertices.push(v)
    adjList.set(v, [])
  }

  this.addEdge = function (v, w) {
    adjList.get(v).push(w)
    adjList.get(w).push(v)
  }

  this.toString = function () {
    var s = ''
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> '
      var neighbors = adjList.get(vertices[i])
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }

  var initializeColor = function () {
    var color = []
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'
    }
    return color 
  }

  this.bfs = function (v, callback) {
    var color = initializeColor()
    var queue = new Queue()
    queue.enqueue(v)
    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      neighbors = adjList.get(u)
      color[u] = 'grey'
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i]
        if (color[w] === 'white') {
          color[w] = 'grey'
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
      if (callback) {
        callback(u)
      }
    }
  }

  this.BFS = function (v) {
    var color = initializeColor()
    var queue = new Queue()
    d = []
    pred = []
    queue.enqueue(v)

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0
      pred[vertices[i]] = null
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue()
      neighbors = adjList.get(u)
      color[u] = 'grey'
      for (var j = 0; j < neighbors.length; j++) {
        var w = neighbors[j]
        if (color[w] === 'white') {
          color[w] = 'grey'
          d[w] = d[u] + 1
          pred[w] = u
          queue.enqueue(w)
        }
      }
      color[u] = 'black'
    }
    return {
      distances: d,
      predecessors: pred,
    }
  }

  var dfsVisit = function (u, color, callback) {
    color[u] = 'grey'
    if (callback) {
      callback(u)
    }
    var neighbors = adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i]
      if (color[w] === 'white') {
        dfsVisit(w, color, callback)
      }
    }
    color[u] = 'black'
  }

  this.dfs = function (callback) {
    var color = initializeColor()
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        dfsVisit(vertices[i], color, callback)
      }
    }
  }

  var DFSVisit = function (u, color, d, f, p) {
    log('discovered ' + u)
    color[u] = 'grey'
    d[u] = ++time
    var neighbors = adjList.get(u)
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i]
      if (color[w] === 'white') {
        p[w] = u
        DFSVisit(w, color, d, f, p)
      }
    }
    color[u] = 'black'
    f[u] = ++time
    log('explored ' + u)
  }

  var time = 0
  this.DFS = function () {
    var color = initializeColor(),
      d = [],
      f = [],
      p = [];
    time = 0;
    for (var i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0
      d[vertices[i]] = 0
      f[vertices[i]] = null
    }

    for (i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p)
      }
    }
    return {
      discovery: d,
      finished: f,
      predecessors: p,
    }
  }

  var graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 1, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
  ]

  this.dijkstra = function (src) {
    var dist = [], visited = [],
      length = this.graph.length
    
    for (var i = 0; i < length; i++) {
      dist[i] = INF
      visited[i] = false
    }
    dist[src] = 0

    for (var i = 0; i < length - 1; i++) {
      var u = miniDistance(dist, visited)
      visited[u] = true

      for (var v = 0; v < length; i++) {
        if (!visited[v] && this.graph[u][v] != 0 && dist[u] != INF && dist[u] + this.graph[u][v] < dist[v]) {
          dist[v] = dist[u] + this.graph[u][v]
        }
      }
    }
    return dist
  }
}


var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

log(graph.toString())

function printNode(value) {
  log('Visited vertex: ' + value)
}

graph.bfs(myVertices[0], printNode)

var shortestPathA = graph.BFS(myVertices[0])
log(shortestPathA)

log('...')
var fromVertex = myVertices[0]
for (var i = 1; i < myVertices.length; i++) {
  var toVertex = myVertices[i]
  var path = new Stack()
  for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v)
  }
  path.push(fromVertex)
  var s = path.pop()
  while (!path.isEmpty()) {
    s += ' - ' + path.pop()
  }
  log(s)
}

graph.dfs(printNode)

graph = new Graph()
myVertices = ['A', 'B', 'C', 'D', 'E', 'F']
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
var result = graph.DFS()

var miniDistance = function (dist, visited) {
  var min = INF, minIndex = -1

  for (var v = 0; v < dist.length; v++) {
    if (visited[v] == false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}