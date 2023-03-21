// ! To write the window size
window.onresize = screen;
window.onload = screen;
function screen(){
    mywidth = window.innerWidth;
    myheight = window.innerHeight;
    document.getElementById('size').innerText = "Resize to check responsiveness : " + 'Width : ' + mywidth + 'px' + ' Height : ' + myheight;
}

