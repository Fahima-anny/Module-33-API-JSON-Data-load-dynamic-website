// function loadPosts(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( res => res.json() )
//     .then( data => displayPosts(data) )
// }
// loadPosts()


const loadPosts = async () => {
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts') ;
const data = await res.json() ;
displayPosts(data) ;
}
catch (error){
    console.error('Error is:' ,error)
}
}

loadPosts()

function displayPosts(posts){
    let postContainer = document.getElementById('postContainer') ;
for(let post of posts){
    console.log(post)
let div = document.createElement('div') ;
div.innerHTML = `
<h3>User Id: ${post.id}</h3>
<h3>Post Title: ${post.title}</h3>
<p>Post Description:  ${post.body}</p>
`
div.classList.add('post') ;
postContainer.appendChild(div) ;
}
}