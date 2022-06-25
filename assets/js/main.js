/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.card__container`)
sr.reveal( `.card__content-1`, {delay: 500})
sr.reveal( `.card__content-2`, {delay: 600})
sr.reveal( `.about__container`, {delay: 700})
sr.reveal( `.social__container`, {delay: 900})
sr.reveal( `.games__movies-first`, {origin: 'left'})
sr.reveal( `.games__movies-second`, {origin: 'right'})