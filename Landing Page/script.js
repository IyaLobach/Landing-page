let allImages = 4;
let curLeftImage = 0;
let imageOnPage = 2; 
let headers = ["Project Livingroom", "Project workspace", "Library", "Project hall"];
let texts = [ "Bright and spacious livingroom with bright accents",
"Functional and comfortable workspace",
"Cozy and relaxing library",
"Spacious and calm hall with bright details"];


function leftButton() {
    const screenWidth = window.screen.width;
    if (screenWidth > 500) {
        if ((curLeftImage - imageOnPage) >= 0) {
            curLeftImage -= imageOnPage;
            document.getElementById("imageLeft").src = "image/image_" + curLeftImage + ".jpg";
            document.getElementById("header-result-1").innerHTML = headers[curLeftImage];
            document.getElementById("text-result-1").innerHTML = texts[curLeftImage];
            document.getElementById("imageRight").src = "image/image_" + (curLeftImage + 1) + ".jpg";
            document.getElementById("header-result-2").innerHTML = headers[curLeftImage + 1];
            document.getElementById("text-result-2").innerHTML = texts[curLeftImage + 1];
        }
    } else {
        if ((curLeftImage - 1) >= 0) {
            curLeftImage--;
            document.getElementById("imageLeft").src = "image/image_" + curLeftImage + ".jpg";
            document.getElementById("header-result-1").innerHTML = headers[curLeftImage];
            document.getElementById("text-result-1").innerHTML = texts[curLeftImage];
        }
    }
}

function rightButton() {
    const screenWidth = window.screen.width;
    if (screenWidth > 500) {
        if ((curLeftImage + imageOnPage) < allImages) {
            curLeftImage += imageOnPage;
            document.getElementById("imageLeft").src = "image/image_" + curLeftImage + ".jpg";
            document.getElementById("header-result-1").innerHTML = headers[curLeftImage];
            document.getElementById("text-result-1").innerHTML = texts[curLeftImage];
            document.getElementById("imageRight").src = "image/image_" + (curLeftImage + 1) + ".jpg";
            document.getElementById("header-result-2").innerHTML = headers[curLeftImage + 1];
            document.getElementById("text-result-2").innerHTML = texts[curLeftImage + 1];
        }
    } else {
        if ((curLeftImage + 1) < allImages) {
            curLeftImage++;
            document.getElementById("imageLeft").src = "image/image_" + curLeftImage + ".jpg";
            document.getElementById("header-result-1").innerHTML = headers[curLeftImage];
            document.getElementById("text-result-1").innerHTML = texts[curLeftImage];
        }
    }
}



function sendReview() {
    let name = (String)(document.getElementById("userName").value);
    let email = (String)(document.getElementById("userEmail").value);
    if (name.length != 0 && email.length != 0 && email.includes("@")) {
        alert("Your form has been successfully submitted. You will be contacted as soon as possible.");
        return false;
    }
}