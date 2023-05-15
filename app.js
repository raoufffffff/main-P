let our = document.querySelector(".our");
let pro = document.querySelector(".pro");
let span = document.querySelectorAll(".pro span");

console.log(pro);



window.addEventListener("scroll", () => {
    if (window.scrollY >= our.offsetTop) {
        span.forEach((e) => {
            e.style.width = pro.dataset.s;
        })
    } else {
        span.forEach((e) => {
            e.style.width = 0;
        })
    }
})

//

let stats = document.querySelector(".stats")
let nummber = document.querySelectorAll(".nummber")

window.addEventListener("scroll", () => {
    if (window.scrollY >= stats.offsetTop) {
        nummber.forEach((e) => {
            let goal = e.dataset.num;
            let con = setInterval(() => {

                if (e.textContent === goal) {
                    clearInterval(con)
                } else {
                    e.textContent++;
                }
            }, 3000 / goal)
        })
    }
})

function raouf() {

} 