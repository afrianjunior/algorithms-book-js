/**
 * Reference
 * 
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list
 * https://humanwhocodes.com/blog/2019/01/computer-science-in-javascript-linked-list/
 */

// Fundamental Linked List
class LinkedList {
  constructor (data = 0) {
    this.data = data
    this.next = null
  }
}

let List = new LinkedList(12)

List.next = new LinkedList(99)
List.next.next = new LinkedList(120)
List.next.next.next = new LinkedList(131)

// Print result

let Result = List

while (Result !== null) {
  console.log(Result.data);
  Result = Result.next;
}
