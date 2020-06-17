let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function chooseName(){
para = names[Math.random() * 7];
return para;
}
chooseName();
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);