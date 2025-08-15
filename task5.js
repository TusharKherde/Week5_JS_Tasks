let paragraph = document.querySelector("p");
let button = document.querySelector("button");
button.addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.innerText = "hide";
    }
    else{
        paragraph.style.display = "none";
        button.innerText = "show";
    }
});