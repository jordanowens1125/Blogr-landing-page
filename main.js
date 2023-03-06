//add event listeners to dl items in dropdown ul
const dlElements = document.getElementsByTagName('dl')
for (let i = 0; i < dlElements.length; i++){
    dlElements[i].addEventListener('click', handleSectionClick)
}

function openHamburger() {
    const dropdown = document.getElementById('dropdown')
    dropdown.style.display = 'flex'
    //add cancel image
    const cancel = document.getElementById('cancel')
    cancel.style.display ='flex'
    //remove hamburger image
    const hamburger = document.getElementById("hamburger");
    hamburger.style.display = "none";
}

function closeHamburger() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = "none";
    //add back hamburger image
    const cancel = document.getElementById("cancel");
    cancel.style.display = "none";
    //remove cancel image
    const hamburger = document.getElementById("hamburger");
    hamburger.style.display = "flex";
}

function handleSectionClick(e) {
    const image = e.currentTarget.querySelector('img')
    // //rotate img in dl
    rotateImg(image)
    const parent = e.currentTarget.parentNode;
    toggleExpandedClass(parent)
    
}

function rotateImg(element) {
    element.classList.toggle('rotated')
}

function toggleExpandedClass(element) {
    const sectionList = element.querySelector('.list')
    sectionList.classList.toggle('expanded')
}
