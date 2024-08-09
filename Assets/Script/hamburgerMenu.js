function showHideHamburger(){
    let dropdownHamburger = document.getElementById("dropdownHamburger");
    if(dropdownHamburger.className === "dropdownHamburger"){
        dropdownHamburger.className += " clicked"
    }else{
        dropdownHamburger.className = "dropdownHamburger";
    }
}

function showHideBiografiDropdown(){
    let dropdownBiografi = document.getElementById("dropdownBiografi");
    if(dropdownBiografi.className === "dropdownBiografi"){
        dropdownBiografi.className += " clicked";
    }else{
        dropdownBiografi.className = "dropdownBiografi";
    }
}

function setSelectedNavText(string) {
    let selectedNav = document.getElementById("selectedNav");
    selectedNav.innerText = string;
}


function generateHamburgerMenu(){
    const hamburgerMenu = document.getElementById("navHamburgerMenu");
    const biografiMenu = document.getElementById("biografiSpecial");
    const hamburgerNavMenus = document.querySelectorAll("#dropdownHamburger a");

    //onclick event listener untuk buka menu hamburger
    hamburgerMenu.addEventListener("click",function(evt){
        showHideHamburger();
    });
    
    //onclick event listener untuk buka sub menu Biografi
    biografiMenu.addEventListener("click",function(evt){
        showHideBiografiDropdown();
    });

    //onclick event listiner untuk semua navigasi
    for(const elemen of hamburgerNavMenus){
        //beri semua elemen a dalam navigasi event listener kecuali elemen biografi
        //a yang merupakan anak dari navigasi biografi menampilkan tambahan text Biografi >
        if(elemen.parentNode.id == "dropdownBiografi"){
            elemen.addEventListener("click",function(evt){
                let text = "Biografi > ";
                setSelectedNavText(text + evt.target.innerText)
                showHideHamburger();
                showHideBiografiDropdown();
            });
        }else if(elemen.id != "biografiSpecial"){
            elemen.addEventListener("click",function(evt){
                setSelectedNavText(evt.target.innerText);
                showHideHamburger();
            });
        }
    }
}

generateHamburgerMenu();