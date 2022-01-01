window.addEventListener("load", (event) => {
  let paragraph = document.querySelector("p.planet__info");
  paragraph.className += " " + "transition";
  document.querySelector("h1.planet__name").className += " " + "transition";
  document.querySelector("div.planet__info__image").className +=
    " " + "transition";
  document.querySelector("div.planet__bar").className += " " + "transition";
  document.querySelector("div.planet__number").className += " " + "transition";
  document.querySelector("div.planet__header").className += " " + "transition";
});
