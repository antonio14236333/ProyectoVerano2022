    document.querySelector(".links").addEventListener("click", function(){
        document.querySelector(".links").classList.toggle("show");
        var x = document.getElementById("menu");
        if(x.className === 'fa-solid fa-bars'){
            x.className = 'fa-solid fa-xmark';
        } else {
            x.className = 'fa-solid fa-bars';
        }
    });

    // window.onclick = function (e) {
    //     if(!e.target.matches('i#menu') || e.target.matches('.links')){
    //         console.log('noup, no soy el menu o los links');
    //     }
    // }

    // window.onclick = function(e) {
    //     if (!e.target.matches('section.links') || !e.target.matches('i#menu')) {
    //         console.log(e);

    //         if(!e.target.matches('i#menu.fa-solid.fa-bars')){
    //             document.querySelector(".links").classList.toggle("show");
    //             var x = document.getElementById("menu");
    //             if(x.className === 'fa-solid fa-bars'){
    //                 x.className = 'fa-solid fa-xmark';
    //             } else {
    //                 x.className = 'fa-solid fa-bars';
    //             }
    //         }
    //     }
    // }