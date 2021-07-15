


// fetch("https://api.github.com/users/gandhirishika")
// .then(res => res.json())
// .then(data => console.log(data))


const btn = document.querySelector("button")
const text = document.querySelector("p")
// const input = document.querySelector("input")

btn.addEventListener('click' , async ()=>{
    fetch('https://api.quotable.io/random')

    .then(res => res.json())
    .then(data => console.log(data.content))
})
text.innerHTML = {data.content}
// async function getData(username){
//     const res = await fetch('https://api.github.com/users/${username}')
//     const data = await res.json()
//     return data
// }

// btn.addEventListener('click' , async () => {
//     const username = input.value;
//     let response = getData(username);
//     let user = await response;
//     console.log(user);
// })
// localStorage.setItem('username' , "gandhirishika")
// const username = localStorage.getItem('username');
// console.log(username);
// localStorage.clear();