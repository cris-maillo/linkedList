class Node{
  constructor(value){
    this.value = value || null;
    this.nextNode = null;
  }
} 

class LinkedList{
    constructor(){
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) this.prepend(value);
        else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) tmp = tmp.nextNode;
            tmp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        let tmp = null;
        if (this.listHead != null) tmp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    size(){
        let tmp = this.listHead;
        let counter = 0;
        while (tmp != null) {
          counter++;
          tmp = tmp.nextNode;
        }
        return counter;
    }

    head(){
        return this.listHead.value
    }

    tail(){
        let tmp = this.listHead;
        while (tmp.nextNode != null) {
          tmp = tmp.nextNode;
        }
        return tmp.value;
    }

    at(index){
        let tmp = this.listHead;
        for (let i = 0; i < index; i++) {
            tmp = tmp.nextNode;
        }
        return tmp.value;
    }

    pop(){
        let cur = this.listHead;
        let prev = null
        while (cur.nextNode != null) {
            prev = cur;
            cur = cur.nextNode;
        }
        prev.nextNode = null;
    }

    contains(value){
        let tmp = this.listHead;
        while (tmp != null) {
            if (value === tmp.value){
                return true
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value){
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
            if (value === tmp.value){
                return index
            }
            tmp = tmp.nextNode;
            index++;
        }
        return "Not in List";
    }

    toString(){
        let tmp = this.listHead;
        let listString = "";
        while (tmp != null) {
            listString += "(" + tmp.value + ") -> "
            tmp = tmp.nextNode;
        }

        return (listString + "null")
    }
}


let myList = new LinkedList();
myList.append("Hello");
myList.append("wishywashy");
myList.prepend("test");
console.log(myList.size())
console.log(myList.head())
console.log(myList.tail())
console.log(myList.at(1))
myList.pop()
console.log(myList.contains("tt"))
console.log(myList.contains("Hello"))
console.log(myList.find("tt"))
console.log(myList.find("test"))

myList.append("4");
myList.append("5");
myList.prepend("01");

console.log(myList.toString())