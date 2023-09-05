// let red=document.getElementById('red');
// let yellow=document.getElementById('yellow');
// let pink=document.getElementById('pink');
// let orange=document.getElementById('orange');

// let body=document.querySelector('body')
// red.addEventListener('click',(e)=>{

//     body.style.backgroundColor=red.value
//     console.log('works')
// })
// // let change=()=>{
// //     body.style.backgroundColor='red'
// // }
//******************************************project 1 js */
let btns = document.querySelectorAll('.button');
let body = document.querySelector('body');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.id)
        e.target.id === 'red' ? body.style.backgroundColor = e.target.id :
            e.target.id === 'yellow' ? body.style.backgroundColor = e.target.id :
                e.target.id === 'pink' ? body.style.backgroundColor = e.target.id :
                    e.target.id === 'orange' ? body.style.backgroundColor = e.target.id : null
    })
})