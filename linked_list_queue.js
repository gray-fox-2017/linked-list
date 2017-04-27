class LinkedList{
  constructor(input){
    this.head = null;
    this.input = input;
    this._length = 0;
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
    return JSON.stringify(node);
  }

addAll(){
  for (let i = 0; i < this.input.length; i++){
    this.add(this.input[i])
  }
}

push(value){
  this.input.push(value)
}

pop(value){
  this.input.shift(value)
}

remove(node){
  let current, next = node.next
  if(this.head === node){
      this.head = this.head.next;
      node.next = null
      return next
    }
    current = this.head
    while(current.next){
      if(current.next === node){
        current.next = node.next;
        return next
      }
      current = current.next
    }
  }

 print(){
   console.log(JSON.stringify(this.head))
 }

 getHead(){
  // return (this.head.data)
   let head = {
     data: this.head.data,
     next: this.input[0].next
   }
  return head;
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
list.push(11);
list.pop();
list.addAll()
list.print()
console.log(`Length = ${list.getLength()}`);
console.log(`Head = ${JSON.stringify(list.getHead())}`);
console.log(`Tail = ${JSON.stringify(list.getTail())}`);
