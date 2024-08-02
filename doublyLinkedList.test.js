import DoublyLinkedList from "./doublyLinkedList.js";

describe("DoubleLinkedList",()=>{
    let doublyLinkedList 

    beforeEach(()=>{
        doublyLinkedList = new DoublyLinkedList();
    })

    test("Agregar nodo al principio de la lista", () => {
        doublyLinkedList.appendFirst(1);
        expect(doublyLinkedList.head.data).toBe(1);
        expect(doublyLinkedList.tail.data).toBe(1);
    });

    test("Agregar nodo al final de la lista", () => {
        doublyLinkedList.appendLast(1);
        expect(doublyLinkedList.tail.data).toBe(1);
        expect(doublyLinkedList.head.data).toBe(1);
    });

    test("Agregar múltiples nodos al principio de la lista", () => {
        doublyLinkedList.appendFirst(1);
        doublyLinkedList.appendFirst(2);
        doublyLinkedList.appendFirst(3);
        expect(doublyLinkedList.head.data).toBe(3);
        expect(doublyLinkedList.head.next.data).toBe(2);
        expect(doublyLinkedList.head.next.next.data).toBe(1);
    });

    test("Agregar múltiples nodos al final de la lista", () => {
        doublyLinkedList.appendLast(1);
        doublyLinkedList.appendLast(2);
        doublyLinkedList.appendLast(3);
        expect(doublyLinkedList.tail.data).toBe(3);
        expect(doublyLinkedList.tail.prev.data).toBe(2);
        expect(doublyLinkedList.tail.prev.prev.data).toBe(1);
    });

    test("Agregar nodos y remover elementos repetidos", () => {
        doublyLinkedList.appendLast(1);
        doublyLinkedList.appendLast(2);
        doublyLinkedList.appendLast(2);
        doublyLinkedList.appendLast(3);

        doublyLinkedList.removeRepeatedElements(2);

        expect(doublyLinkedList.size()).toBe(2);
        expect(doublyLinkedList.searchElement(1)).toBe(1);
        expect(doublyLinkedList.searchElement(2)).toBe(undefined); 
        expect(doublyLinkedList.searchElement(3)).toBe(3);
    });

    test("Buscar elemento en la lista", () => {
        doublyLinkedList.appendLast(1);
        doublyLinkedList.appendLast(2);
        doublyLinkedList.appendLast(3);

        expect(doublyLinkedList.searchElement(2)).toBe(2);
        expect(doublyLinkedList.searchElement(4)).toBe(undefined); 
    });

    test("Obtener el tamaño de la lista", () => {
        expect(doublyLinkedList.size()).toBe(0);

        doublyLinkedList.appendLast(1);
        doublyLinkedList.appendLast(2);
        doublyLinkedList.appendLast(3);

        expect(doublyLinkedList.size()).toBe(3);

        doublyLinkedList.removeRepeatedElements(2);
        expect(doublyLinkedList.size()).toBe(2); 
    });

})
