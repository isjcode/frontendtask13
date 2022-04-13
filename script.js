document.getElementsByTagName("button")[0].addEventListener("click", () => {
    let text = document.getElementById("text").value;

    let field = document.createElement("div");
    let inner_text = document.createElement("p");
    let x = document.createElement("span");

    field.classList.add("box");
    field.appendChild(x);

    x.innerHTML = "X";
    x.classList.add("x");

    inner_text.innerHTML = text;
    field.appendChild(inner_text);
    document.body.appendChild(field);

    x.addEventListener("click", (e) => {
        document.body.removeChild(e.target.parentNode);
    });


});