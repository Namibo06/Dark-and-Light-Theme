/*declarando variaveis*/

const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

/*verifica se o tema armazendo no localStorage é escuro,se sim aplica o tema body ao escuro*/
if (theme === "dark") document.body.classList.add("dark");

/* event listener para quanddo o botãode alterar o tema for clicado*/

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme","light");
    } else window.localStorage.setItem("theme","dark");
    
});

refresh.addEventListener("click", () => {
    window.location.reload();
});