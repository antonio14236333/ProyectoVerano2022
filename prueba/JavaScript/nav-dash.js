document.querySelector(".dropdown-container").addEventListener("click", function(){
            
    document.querySelector(".dropdown-container ul").classList.toggle("show");
});
    // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    console.log(e);
    if (!e.target.matches('.dropdown-container') && !e.target.matches('.dropdown-container span')) {
        var myDropdown = document.getElementById("list");
    console.log(myDropdown);
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
    }
}


const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('open')
    navigation.classList.toggle('open')
}