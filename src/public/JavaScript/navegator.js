function myFunction() {
    var x = document.getElementById("container-header");
    var y = document.getElementById("icon");
        if (x.className === "container-header") {
            x.className += " responsive";
            y.className = "fa-solid fa-xmark";
        } else {
            x.className = "container-header";
            y.className = "fa fa-bars";
        }
}