const div = document.createElement('div');
const ul = document.createElement('ul');
const li = document.createElement('li');
const instagram = document.createElement('a');
instagram.href = 'https://instagram.com/intocode';
instagram.textContent = 'наш инстаграм';
const li1 = document.createElement('li1');
const site = document.createElement('a');
site.href = 'https://intocode.ru';
site.textContent = 'наш сайт';


div.append(ul);
ul.append(li, li1);
li.append(instagram);
li1.append(site);

console.log(div);
