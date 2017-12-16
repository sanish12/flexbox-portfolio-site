var el = document.getElementById("burger");
el.addEventListener("click", () => {
    
    var target = document.getElementById("here");
    console.log(target);
    target.classList.toggle("open");
})