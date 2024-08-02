import Node from "./node.js";

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    appendLast(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    }

    appendFirst(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    removeRepeatedElements(value){
        if(!this.head) return;
        let current = this.head;
        while(current){
            if(current.data==value){
                if(current==this.tail){
                    this.tail = current.prev
                    this.tail.next = null;
                }else if(current==this.head){
                    this.head = current.next
                    this.head.prev=null;
                }else{
                current.prev.next = current.next;
                current.next.prev = current.prev; 
                }
            }
            current = current.next;
        }
    }

    searchElement(value){
        let current = this.head;
        while(current){
            if(current.data==value){
                return current.data
            }
            current = current.next;
        }
    }

    size(){
        let current = this.head;
        let count = 0;
        while(current){
            current = current.next;
            count++;
        }
        return count;
    }


    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}


export default DoublyLinkedList