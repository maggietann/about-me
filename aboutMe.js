alert("Welcome to my JavaScript page! We're going to get interactive now. Press OK");

function makeImageBig(pic){
    pic.style.width = "500px"
}

function makeImageOriginalSize(pic){
    pic.style.width = "200px"
}

function showHideSection(section){
    var showHideSection = document.getElementById(section)
    if (showHideSection.style.display == "none") {
        showHideSection.style.display = "block";
        document.getElementById("bragsButton").innerHTML = "HIDE INFO";
    }else {
        showHideSection.style.display = "none";
        document.getElementById("bragsButton").innerHTML = "SHOW INFO";
    }
}