
var i = 0,text;
text = "Rakib Mahbub Khan";

function typing() {
if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,80);
}
}
typing();

var j = 0,info;
info = "Hi there! I am Rakib Mahbub Khan. I am specialized in fixing frontend and backend issues of any website and developing professional websites via Laravel and Vue. I have 2 years of experience in the field and committed to deliver you high-quality work in the least possible turnaround time.";

function infotyping() {
if (j < info.length) {
    document.getElementById("info").innerHTML += info.charAt(j);
    j++;
    setTimeout(infotyping,120);
}
}
infotyping();
