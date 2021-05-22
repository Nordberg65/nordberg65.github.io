// // // console.dir(document)
// // // console.log(document.head)
// // // console.log(document.body)
// // // document.title = 'New Title'
// // // console.log(document.title)
// // // let  navbar = document.getElementById('navbar')
// // // navbar.innerHTML = 'Changed'
// // // let main = document.getElementById('main')
// // // main.innerHTML = 'NEW'
// // // let  navbar = document.getElementById('navbar')
// // // navbar.style.border = '5px solid red'
// // // let main = document.getElementById('main')
// // // main.style.backgroundColor = 'red'
// // // let items = document.getElementsByClassName('list-group-item')
// // // console.log(items)
// // // items[1].style.backgroundColor = 'yellow'
// // // items[1].style.color = 'red'
// // // items[1].innerHTML = 'NEW CONTENT'
// // // items[1].style.fontWeight = '900'
// // // let items = document.getElementsByClassName('list-group-item')
// // // console.log(items)
// // // for (let i = 0; i < items.length; i++) {
// // //     items[i].style.backgroundColor = 'yellow'
// // //     items[i].style.color = 'red'
// // //     items[i].textContent = i
// // // }
// // let header = document.querySelector('#navbar')
// // header.style.borderBottom = 'solid 5px red'
// let titles = document.querySelectorAll('.h1')
// console.log(titles)
let items = document.querySelectorAll('li')
console.log(items)
// for (let i = 0; i < items.length; i += 2) {
//     items[i].style.backgroundColor = 'grey'
// }
// for (let i = 1; i < items.length; i += 2) {
//     items[i].style.backgroundColor = 'lightblue'
// }

for (let i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
        items[i].style.backgroundColor = 'grey'
    } else {
        items[i].style.backgroundColor = 'lightblue'
    }
    
}