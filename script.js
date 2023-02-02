const title = document.querySelector(".hero__title")
const descr = document.querySelector(".hero__descr")
const btn = document.querySelector(".hero__btn")
const firstImg = document.getElementById("1-img")
const secondImg = document.getElementById("2-img")
const thirdImg = document.getElementById("3-img")
const author = document.querySelector(".photos__author")

gsap.from(title, {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 1
});

gsap.from(descr, {
  opacity: 0,
  duration: 1,
  delay: 1.7
});

gsap.from(btn, {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 1
});

gsap.from(firstImg, {
  opacity: 0,
  scale: 0.8,
  duration: .5,
  delay: 2
});

gsap.from(secondImg, {
  opacity: 0,
  scale: 0.8,
  duration: .5,
  delay: 2.2
});

gsap.from(thirdImg, {
  opacity: 0,
  scale: 0.8,
  duration: .5,
  delay: 2.4
});

gsap.from(author, {
  opacity: 0,
  duration: 1,
  delay: 2.6
});


let menuTimeline = gsap.timeline({paused: true});
const burger = document.querySelector(".burger");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".menu");

menuTimeline
.fromTo(menu, {display: "none"}, {display: "block"})
.from(menu, {duration: 2, opacity: 0})
.from(document.querySelector(".menu__container"), {duration: .5, opacity: 0}, 0)
.from(document.querySelector(".menu__top"), {duration: 1.5, y: -100, opacity: 0}, 0)
.from(document.querySelector(".menu__nav"), {y: 100, opacity: 0, duration: 1.5}, 0)
.from(document.querySelector(".menu__right"), {y: 100, opacity: 0, duration: .7, x: 0}, 1.3)
.from(document.querySelector(".social"), {y: 100, opacity: 0, duration: .7, x: 0}, 1.3);

burger.addEventListener("click",  () => menuTimeline.play());
closeMenu.addEventListener("click",  () => menuTimeline.reverse());
