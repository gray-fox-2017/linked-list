class LinkedList{
  constructor(input){
    this.head = null;
    this.input = input
    this._length = 0
    this.next = null
  }


add(value){
  let node = {
    data: value,
    next: null
    }
  let current;
  if (this.head === null){
      this.head = node;
      this._length++
    }
  else {
    this._length++
    current = this.head
    while(current.next){
        current = current.next
      }
      current.next = node
    }
    return node;
  }

addAll(){
  for (let i = 0; i < this.input.length-1; i++){
    this.add(this.input[i])
  }
}

remove(node){
  let current, value = node.value
  if(this.head === node){
      this.head = this.head.next;
      node.next = null
      return value
    }
    current = this.head
    while(current.next){
      if(current.next === node){
        current.next = node.next;
        return value
      }
      current = current.next
    }
  }

 print(){
   console.log(this.head)
 }
 getHead(){
   return (this.head.data)
 }

 getTail(){
   let tail = {
     data: this.input[this.input.length-1],
     next: this.input[this.input.length-1].next
   }
  return tail;
 }
 getLength(){
   return this._length;
 }

}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
list.addAll()
list.print()
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
//console.log(list)
