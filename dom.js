let anually = document.querySelector(".Anually");
let monthly = document.querySelector(".Monthly");
document.querySelector(".switch input").addEventListener("change", (e) => {
  monthly.style.display = e.target.checked ? "flex" : "none";
  anually.style.display = e.target.checked ? "none" : "flex";
});
