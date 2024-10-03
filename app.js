function loadData() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1' ;
    fetch(url) 
    .then( res => res.json() )
    .then( data => console.log(data) )
}

function loadUser () {
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then( res => res.json() )
    .then( data => displayData(data) )
}

let userContainer = document.getElementById('userContainer') ;

function displayData(data){
    // console.log(data)
    for(let user of data){
        console.log(user.name)
let li = document.createElement('li') ;
li.innerText = user.name ;
userContainer.appendChild(li) ;
    }
}

