let tableau = []

let section = document.querySelector('section')
for(i=0; i < 12 ;i++){
    let div = document.createElement('div')
    tableau.push(div)
    section.appendChild(div)
}




let previouscircle = 0
let score = 0


function newmole(){
    let circle = document.getElementsByTagName('div')
    circle[previouscircle].style.backgroundColor = "white"

    let rancircle = Math.floor(Math.random()*circle.length)
    circle[rancircle].style.backgroundColor = "red"
    previouscircle = rancircle

   function hiden() {
       let circle = document.getElementsByTagName('div')
       circle[rancircle].style.backgroundColor = "white"
        score ++
        document.body.querySelector('span').innerHTML = score
   } 
   circle[rancircle].addEventListener('click',hiden)

  
}
setInterval(newmole, 1000);
