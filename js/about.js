document.getElementById("burger").addEventListener("click",fadein);
        
function fadein(){
    let links = document.getElementById("links");
    links.classList.toggle("sidebar");
    document.getElementById('burger').classList.toggle("toggle");
}