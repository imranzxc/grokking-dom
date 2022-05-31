const ul = document.createElement('ul');
ul.classList.add('list');
const li = document.createElement('li');
li.textContent = 'hello world';
ul.append(li);
console.log(ul);