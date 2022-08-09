var link = document.getElementsByClassName("link")

for(let i=0;i<link.length;i++){
    link[i].addEventListener("mouseover", () => {
        link[i].style.color="#ffffba";
    });
    link[i].addEventListener("mouseout", () => {
        link[i].style.color="#bae1ff";
    });
}

var send = document.getElementById("send")

send.addEventListener("mouseover", () => {
    send.style.backgroundColor="#ffffba";
});
send.addEventListener("mouseout", () => {
    send.style.backgroundColor="#bae1ff";
});

var sendfeedback = document.getElementById("sendfeedback")

sendfeedback.addEventListener("mouseover", () => {
    sendfeedback.style.backgroundColor="#ffffba";
});
sendfeedback.addEventListener("mouseout", () => {
    sendfeedback.style.backgroundColor="#bae1ff";
});

send.addEventListener("click", () => {
    alert("Project has been sent!")
});

sendfeedback.addEventListener("click", () => {
    alert("Feedback has been sent!")
});

