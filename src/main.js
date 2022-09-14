import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

// Video i sidste sektion
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

// Progress bar
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
    scroll(animate(elementderskalparallaxes3, { y: [0, 1000] }), {
      target: elementderskalparallaxes3,
    });

    /* element 4 (nederst til højre) */
    const elementderskalparallaxes4 = parallaxcontainer.querySelector(".img4");
    scroll(animate(elementderskalparallaxes4, { y: [0, 1000] }), {
      target: elementderskalparallaxes4,
    });

    /* element 5 (nederst til højre) */
    const elementderskalparallaxes5 = parallaxcontainer.querySelector(".img5");
    scroll(animate(elementderskalparallaxes5, { y: [0, 1000] }), {
      target: elementderskalparallaxes5,
    });

    /* element 6 (nederst til højre) */
    const elementderskalparallaxes6 = parallaxcontainer.querySelector(".img6");
    scroll(animate(elementderskalparallaxes6, { y: [0, 1000] }), {
      target: elementderskalparallaxes6,
    });
  });

/* parallax 2*/

document
  .querySelectorAll(".parallaxcontainermedflereelementer2")
  .forEach((parallaxcontainer) => {
    /* element 5 (øverst til venstre)*/
    const elementderskalparallaxes5 = parallaxcontainer.querySelector(".img5");
    scroll(animate(elementderskalparallaxes5, { y: [0, 700] }), {
      target: elementderskalparallaxes5,
    });

    /* element 6 (øverst til højre) */
    const elementderskalparallaxes6 = parallaxcontainer.querySelector(".img6");
    scroll(animate(elementderskalparallaxes6, { y: [0, 700] }), {
      target: elementderskalparallaxes6,
    });
  });

// stagger element
inView(".fotogalleryinview", ({ target }) => {
  animate(
    target.querySelectorAll("img"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});

/* parallax 3*/

document
  .querySelectorAll(".parallaxcontainermedflereelementer3")
  .forEach((parallaxcontainer) => {
    /* element 5 (øverst til venstre)*/
    const elementderskalparallaxes7 = parallaxcontainer.querySelector(".img7");
    scroll(animate(elementderskalparallaxes7, { y: [0, 700] }), {
      target: elementderskalparallaxes7,
    });

    /* element 6 (øverst til højre) */
    const elementderskalparallaxes8 = parallaxcontainer.querySelector(".img8");
    scroll(animate(elementderskalparallaxes8, { y: [0, 700] }), {
      target: elementderskalparallaxes8,
    });
  });

// citat_2
inView(".citat_2", () => {
  animate(".citat_2", { x: [-2000, 0] }, { duration: 1 });
  animate(
    ".citat_2",
    { opacity: [0.4, 1] },
    { delay: 1, duration: 2, direction: "alternate" }
  );
});

// polaroids
inView(".polaroid_section", () => {
  animate(".polaroid_section", { x: [-2000, 0] }, { duration: 3 });
  animate(
    ".polaroid_section",
    { opacity: [0, 1] },
    { delay: 1, duration: 5, direction: "alternate" }
  );
});
