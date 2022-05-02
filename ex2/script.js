
const timerelement = document.querySelector('p')
const div1 = document.querySelector('div')

let temps = 0

function augtemps(){
    let minutes = parseInt(temps / 60, 10)
    let secondes = parseInt(temps % 60, 10)

    minutes = minutes < 10 ? "0" + minutes : minutes
    secondes = secondes < 10 ? "0" + secondes : secondes

    timerelement.innerHTML = minutes+":"+secondes
    temps++
    
    if(temps > minutes)
    div1.innerHTML = minutes+"se sont ecoulé"

}
setInterval(augtemps, 1000)


