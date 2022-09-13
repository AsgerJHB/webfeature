import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("img");
  scroll(animate(elementderskalparallaxes, { y: [-500, 300] }), {
    target: elementderskalparallaxes,
  });
});

document.querySelectorAll(".polaroid").forEach((polaroid) => {
  const elementderskalvises = polaroid.querySelector("p");
  scroll(animate(elementderskalvises, { opacity: [1, 0] }), {
    target: elementderskalvises,
  });
});

const lillevideo = document.querySelector("#videofil");
lillevideo.pause();

scroll(
  ({ y }) => {
    if (!lillevideo.readyState) return;
    lillevideo.currentTime = lillevideo.duration * y.progress;
  },
  {
    target: document.querySelector(".videoarticle"),
    offset: ["-100vh", "end end"],
  }
);

inView(".polaroid_section", ({ target }) => {
  animate(
    target.querySelectorAll(".polaroid"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});
