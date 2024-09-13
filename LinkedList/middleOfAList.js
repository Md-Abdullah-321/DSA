/**
 * Title: Middle of a linked list
 * Description: Get the middle of a linked list
 * Author: Md Abdullah
 * Date: 13/09/2024
 */

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
    constructor(x){
        this.head = null;
    }

    addNode = (data) => {
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }else {
            let current = this.head;

            while(current.next != null){
                current = current.next;
            }

            current.next = newNode;
        }
    }
}

//Get Length:
const getLength = (head) => {
    let len = 0;

    while(head){
        len++;
        head = head.next;
    }

    return len;
}

//Get Middle:
const getMiddle = (head) => {
    const len = getLength(head);

    let mid_index = Math.floor(len / 2);

    while(mid_index -- > 0){
        head = head.next;
    }

    return head;
}


const main = () => {
    let list = new Linkedlist();

    list.addNode(10);
    list.addNode(20);
    list.addNode(30);
    list.addNode(40);
    list.addNode(50);
    list.addNode(60);

    const head = list.head;

    console.log(head);
    console.log(getLength(head));
    console.log(getMiddle(head));
}

main();