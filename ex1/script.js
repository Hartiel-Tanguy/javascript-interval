const h1 = document.querySelector('h1')

let i = 0
const sentence = 'prount'

const myinterval = setInterval(()=>{
    h1.innerHTML += sentence.charAt(i)
    i++

    if(i > sentence.length - 1)
    clearInterval(myinterval)
}, 1000)



