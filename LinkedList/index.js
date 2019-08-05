/**
 * 
 * Fundamental Linked List
 * 
 */
const head = Symbol('head')

class LinkedListNode {
  constructor (data = 0) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor () {
    this[head] = null
  }

  add (data) {
    // create new node
    const newNode = new LinkedListNode(data)
    if (this[head] === null) {
      // assign first node
      this[head] = newNode
    } else {
      // next node
      let current = this[head]
      
      while (current.next !== null) {
        current = current.next
      }
      
      current.next = newNode
    }
  }

  get (index = 0) {
    let result = []

    // reject negative index
    if (index < 0) return result

    let current = this[head]
    let key = 0

    if (current === null) return result

    function collectDataNode () {
      result.push(current.data)
      current = current.next
      key++
      if (key <= index) collectDataNode()
    }

    collectDataNode()

    return result
  }
}

// Process

let List = new LinkedList(12)

// Print result

const Nodes = List.get(2)

console.log(Nodes)
