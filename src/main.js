import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

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

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

/* paralax */

document
  .querySelectorAll(".parallaxcontainermedflereelementer")
  .forEach((parallaxcontainer) => {
    /*eleement 1 (øverst til venstre) */
    const elementderskalparallaxes1 = parallaxcontainer.querySelector(".img1");
    scroll(animate(elementderskalparallaxes1, { y: [0, 1000] }), {
      target: elementderskalparallaxes1,
    });

    /* element 2 (nederst til venstre)*/
    const elementderskalparallaxes2 = parallaxcontainer.querySelector(".img2");
    scroll(animate(elementderskalparallaxes2, { y: [0, 1000] }), {
      target: elementderskalparallaxes2,
    });

    /* element 3 (øverst til højre)*/
    const elementderskalparallaxes3 = parallaxcontainer.querySelector(".img3");
    scroll(animate(elementderskalparallaxes3, { y: [0, 500] }), {
      target: elementderskalparallaxes3,
    });

    /* element 4 (nederst til højre) */
    const elementderskalparallaxes4 = parallaxcontainer.querySelector(".img4");
    scroll(animate(elementderskalparallaxes4, { y: [0, 700] }), {
      target: elementderskalparallaxes4,
    });
  });

document.querySelectorAll(".polaroid").forEach((polaroid) => {
  const elementderskalvises = polaroid.querySelector("p");
  scroll(animate(elementderskalvises, { opacity: [1, 0] }), {
    target: elementderskalvises,
  });
});

inView(".polaroid_section", ({ target }) => {
  animate(
    target.querySelectorAll(".polaroid"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});
