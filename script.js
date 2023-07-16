function highlight() {
 let boldTxt = document.getElementsByTagName("strong");
 for (let i = 0; i < boldTxt.length; i++) {
    boldTxt[i].style.color = "green";
 }
}


function return_normal() {
    let boldTxt = document.getElementsByTagName("strong");
    for (let i = 0; i < boldTxt.length; i++) {
        boldTxt[i].style.color = "black";
    }
}
