let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let umbBg = document.getElementById("umb-bg");

let selectedColor = document.querySelector('input[name="color"]:checked');
let pinkBtn = document.getElementById("pink-btn-id")
let blueBtn = document.getElementById("blue-btn-id")
let yellowBtn = document.getElementById("yellow-btn-id")

let imageSelectBtn= document.getElementById("image-select-btn") 
let imageUploadStatus = document.getElementById("image-upload-status")

let svgColor = document.getElementById("uml-svg-color");

const div1 = document.getElementById("umb-image");
const div2 = document.getElementById("rotate");

const btnDiv1 = document.getElementById("image-upload");
const btnDiv2 = document.getElementById("image-select-loading");

svgColor.style.fill = "var(--blue-color)"
profilePic.style.display = "none"

umbBg.style.backgroundImage = "url('images/Blue umbrella.png')"
blueBtn.checked = true
blueBtn.className = "blue-btn-seleted";

imageSelectBtn.style.background = "var(--blue-color)";

document.body.style.background = "var(--blue-light)"


inputFile.onchange = function () {
    div1.style.display = "none";
    div2.style.display = "block";
    btnDiv1.style.display = "none";
    btnDiv2.style.display = "block";
    console.log(inputFile.files[0]?.name)
    const fileName = inputFile.files[0]?.name 
    imageUploadStatus.innerHTML = fileName
    profilePic.style.display = "block"
    profilePic.src = URL.createObjectURL(inputFile.files[0])
    
    setTimeout(() => {
        div1.style.display = "block";
        div2.style.display = "none";
        btnDiv1.style.display = "block";
        btnDiv2.style.display = "none";
    }, 3000);
    
}


const  changeColor = (inputRadio) =>{
    
    const colorValue = inputRadio.value;
    switch(colorValue){
        case "pink":
            pinkBtn.className = "pink-btn-seleted";
            blueBtn.className = "blue-btn";
            yellowBtn.className = "yellow-btn";
            umbBg.style.backgroundImage = "url('images/Pink umbrella.png')"
            imageSelectBtn.style.background = "var(--pink-color)";
            svgColor.style.fill = "var(--pink-color)"
            document.body.style.background = "var(--pink-light)"
            break;
        case "blue":
            pinkBtn.className = "pink-btn";
            blueBtn.className = "blue-btn-seleted";
            yellowBtn.className = "yellow-btn";
            umbBg.style.backgroundImage = "url('images/Blue umbrella.png')"
            imageSelectBtn.style.background = "var(--blue-color)";
            svgColor.style.fill = "var(--blue-color)"
            document.body.style.background = "var(--blue-light)"
            break;
        case "yellow":
            pinkBtn.className = "pink-btn";
            blueBtn.className = "blue-btn";
            yellowBtn.className = "yellow-btn-seleted";
            umbBg.style.backgroundImage = "url('images/Yello umbrella.png')"
            imageSelectBtn.style.background = "var(--yellow-color)";
            svgColor.style.fill = "var(--yellow-color)"
            document.body.style.background = "var(--yellow-light)"
            break;

    }
}