let tabsBox = document.querySelector(".tabs-box")
let arrowIcons = document.querySelectorAll(".icon i")
let tabs = document.querySelectorAll(".tabs-")

let isDragging = false

let handleIcons = () => {
    let scrollLeft = Math.round(tabsBox.scrollLeft)
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth
    arrowIcons[0].parentElement.style.display = maxScrollableWidth > scrollLeft ? "flex" : "none"
    arrowIcons[1].parentElement.style.display = scrollLeft > 0 ? "flex" : "none"
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        tabsBox.scrollLeft += icon.id === "left" ? -300 :300
        setTimeout(() => handleIcons(), 50)
    })
})

tabs.forEach(icon => {
    icon.addEventListener('click', () => {
       tabsBox.querySelector(".active").classList.remove("active")
       icon.classList.add("active")
    })
})


let dragger = (e) => {
    if (!isDragging) return
    tabsBox.classList.add("dragging")
    tabsBox.scrollLeft -= e.movementX
    handleIcons()
}

let dragStop = () => {
    isDragging = false
    tabsBox.classList.remove('dragging')
}

tabsBox.addEventListener("mousemove", dragger)
tabsBox.addEventListener("mousedown", () => isDragging = true)
document.addEventListener("mouseup", dragStop)





// tabs.forEach(icon => {
//     icon.addEventListener("click", () => {
//      tabsBox.querySelector(".active").classList.remove("active")
//        icon.classList.add("active") 
      
//     })
// })

// let dragger = (e) => {
//     if (!isDragging) return
//     tabsBox.classList.add("dragging")
//     tabsBox.scrollLeft -= e.movementX
//     handleIcons()
// }

// let dragStop = () => {
//     isDragging = false
//     tabsBox.classList.remove('dragging')
// }

// tabsBox.addEventListener("mousemove", dragger)
// tabsBox.addEventListener("mousedown", () => isDragging = true)
// document.addEventListener("mouseup", dragStop)
