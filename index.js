function print(tag, value){
    console.log(tag,value)
}
// TODO: Listen for page loading (window)
window.onload = () => {
    console.log('window:', 'loaded')
}

// TODO: Listen for page loading (document)
document.addEventListener('DOMContentLoaded', (e)=>{
    console.log('event',e);
    // TODO: Access the h1 in HTML page
const h1 =document.getElementById('app_title');
print('h1', h1)
    // TODO: Change color of app_title
    h1.classList.add('title')
    // TODO: Change color of app_paragraph
    const p = document.getElementById('app_paragraph')
    p.classList.add('paragraph')

    // TODO: Change color of main page
    const body = document.querySelector('body')
    body.classList.add('main')

    // TODO: Add a new element to the container
    const div = document.getElementById('container')
    const header = document.createElement('h2')
    header.innerText = 'Newly added'
    div.appendChild(header)

    // TODO: Select the button elements
    const b1 = document.getElementById('btn-title')
    const b2 = document.getElementById('btn-paragraph')
    const b3 = document.getElementById('btn-main')

     // TODO: Remove the h1 from the page
    b1.addEventListener('click',()=> {h1.remove()})
    b2.addEventListener('click',()=> {})
    b3.addEventListener('click',()=> {})


    // TODO: Listen for three mouse events
    document.addEventListener('mousedown', () => {print('mouusedown', 'Hello')})

})