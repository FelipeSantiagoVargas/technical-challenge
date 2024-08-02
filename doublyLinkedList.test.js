import DoublyLinkedList from "./doublyLinkedList.js";

describe("DoubleLinkedList",()=>{
    let doublyLinkedList 

    beforeEach(()=>{
        doublyLinkedList = new DoublyLinkedList();
    })

    test("Agregar nodo al principio de la lista", ()=>{
        doublyLinkedList.appendFirst(1)
        expect(doublyLinkedList.head.value).toBe(1)
    })

    test("Agregar nodo al final de la lista", ()=>{
        doublyLinkedList.appendLast(1)
        expect(doublyLinkedList.tail.value).toBe(1)
    })

})