const btn = document.getElementById("view-more-btn")

function viewMore(){
    document.getElementById("blog-four").style.display = "initial"
    document.getElementById("blog-five").style.display = "initial"
    document.getElementById("blog-six").style.display = "initial"
}

btn.addEventListener("click", viewMore)

