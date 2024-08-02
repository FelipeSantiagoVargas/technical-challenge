import DoublyLinkedList from "./doublyLinkedList.js";

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.appendFirst(1);
doublyLinkedList.appendFirst(2);
doublyLinkedList.appendLast(3);

doublyLinkedList.printList()
console.log("Tamaño de la lista",doublyLinkedList.size())
console.log("==============")

doublyLinkedList.appendFirst(3);
doublyLinkedList.appendFirst(2);

doublyLinkedList.printList()
console.log("Tamaño de la lista",doublyLinkedList.size())

console.log("==============")

console.log("search", doublyLinkedList.searchElement(3))
console.log("search", doublyLinkedList.searchElement(2))
console.log("search", doublyLinkedList.searchElement(1))
console.log("search", doublyLinkedList.searchElement(4))

doublyLinkedList.appendFirst(2);
doublyLinkedList.appendFirst(3);
doublyLinkedList.removeRepeatedElements(3)
doublyLinkedList.printList()
console.log("Tamaño de la lista",doublyLinkedList.size())

console.log("==============")