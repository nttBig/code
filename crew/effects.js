window.addEventListener("load", (event) => {
  document.querySelector("h2.person__info__header").style.transform =
    "translate(0)";
  document.querySelector("h2.person__info__header").style.opacity = "1";

  document.querySelector("h1.person__name").style.transitionDelay = "0.75s";
  document.querySelector("h1.person__name").style.transform = "translateY(0)";
  document.querySelector("h1.person__name").style.opacity = "1";

  document.querySelector("p.person__info").style.transitionDelay = "1.5s";
  document.querySelector("p.person__info").style.transform = "translate(0)";
  document.querySelector("p.person__info").style.opacity = "1";

  document.querySelector("div.person__image").style.transitionDelay = "0.75s";
  document.querySelector("div.person__image").style.transform = "translate(0)";
  document.querySelector("div.person__image").style.opacity = "1";
});
