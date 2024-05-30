let a = document.querySelector("img")
a.style.display = "block"

let c = 2
document.querySelector(".next").addEventListener("click", ()=> {
    c += 2
    console.log(c)
    if (c != 18) {
        a = a.nextElementSibling
        a.style.transform = "translateX(1000px)"
        a.style.display = "block"
        a.style.zIndex = "2"
        a.classList.add('animate');
        setTimeout(()=> {
            a.previousElementSibling.style.display = "none"
            a.style.zIndex = "0"
            a.classList.remove('animate')
            a.style.transform = "translateX(0px)" 
        }, 1000)
    } else {
        a = document.querySelector("img")
        a.style.transform = "translateX(1000px)"
        a.style.display = "block"
        a.style.zIndex = "2"
        a.classList.add('animate');
        setTimeout(()=> {
            a.previousElementSibling.style.display = "none"
            a.style.zIndex = "0"
            a.classList.remove('animate')
            a.style.transform = "translateX(0px)" 
        }, 1000)
    }
})

document.querySelector(".prev").addEventListener("click", ()=> {
    c -= 2
    console.log(c)
    if (c != 0) {
        a = a.previousElementSibling
        console.log(a)
        a.style.transform = "translateX(-1000px)"
        a.style.display = "block"
        a.style.zIndex = "3"
        a.classList.add('animateR');
        setTimeout(()=> {
            a.nextElementSibling.style.display = "none"
            a.style.zIndex = "0"
            a.classList.remove('animateR')
            a.style.transform = "translateX(0px)" 
        }, 1000)
    }
    else {
        a = document.querySelector(".body").lastChild.previousSibling
        a.style.transform = "translateX(-1000px)"
        a.style.display = "block"
        a.style.zIndex = "3"
        a.classList.add('animateR');
        setTimeout(() => {
            document.querySelector(".body").firstChild.nextElementSibling.nextElementSibling.style.display = "none"
            a.style.zIndex = "0"
            c = 16
            a.classList.remove('animateR')
            a.style.transform = "translateX(0px)" 
            
        }, 1000);
    }
})

document.querySelector(".prev").innerHTML = "<"
document.querySelector(".next").innerHTML = ">"