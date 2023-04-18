class LinkedList{
    constructor(){
        this.fullList = [];
    }

    append(value){
        this.fullList.push(new Node(value, "3"))
        console.log(this.fullList)
    }

    prepend(value){
        this.fullList.unshift(new Node(value, "3"))
        console.log(this.fullList)
    }

    size(){
        return this.fullList.length
    }

    head(){
        return this.fullList[0]
    }

    tail(){
        return this.fullList[this.fullList.length - 1]
    }
}

class Node{
    constructor(value, nextNode){
        this.value = value;
        this.nextNode = nextNode;
    }
}

let myList = new LinkedList();
myList.append("Hello");
myList.append("wishywashy");
myList.prepend("test");
console.log(myList.size())
console.log(myList.head())
console.log(myList.tail())