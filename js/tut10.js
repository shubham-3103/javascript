console.log("welcome to tut10");

let cont = document.querySelector('.no');
cont=document.querySelector('.container');
// console.log(cont.children);
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[0].nodeType;
console.log(cont)
console.log(nodeName);
console.log(nodeType);
//NOde Type
/*
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/
