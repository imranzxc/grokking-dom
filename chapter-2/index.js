const arr = ["html", "css", "js"]
const ul = document.createElement("ul")
document.body.append(ul)

for (let i = 0; i < arr.length; i++) {
  let li = document.createElement("li")
  ul.append(li)
  li.append(arr[i])
}


function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li")
    ul.append(li)
    li.append(arr[i])
    document.body.prepend(li)
  }
}
console.log(render(arr))


const array = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    name: 'intocode',
    url: 'https://intocode.ru'
  },
]

function renderSecond(array) {
  const ulSec = document.createElement('ul');
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ulSec.append(li)
    a.textContent = array[i].name
    li.append(a)
    a.href = array[i].url
    document.body.prepend(ulSec)

  }
}
console.log(renderSecond(array));