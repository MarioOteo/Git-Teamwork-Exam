window.onload = loadWindow();

function loadWindow()
{
    let bShow = document.getElementById("show");
    bShow.onclick = show;

    let bList = document.getElementsByClassName("hide");
    for (let b of bList) {
        b.onclick = hide;
    }
    let artList = document.getElementsByClassName(".article");
    for (let art of artList) {
        art.onmouseover = artHover;
    }
}

function hide(evento)
{
    let bHide = evento.target;
    let clase = bHide.classList[1];
    clase = clase.substr(clase.length-1);
    let parentArt = document.getElementsByClassName("art"+clase);
    console.log(parentArt[0].classList);
    parentArt[0].classList.add("hidden");
}

function show()
{
    console.log("SHOW PULSADO");
    let artList = document.getElementsByClassName("article");
    for (let art of artList) {
        console.log(art.className);
        art.classList.remove("hidden");
    }
}

function artHover(evento)
{
    evento.target.classList.add("mouseOverArt");
}