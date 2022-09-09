import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion"

document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("img");
  scroll(animate(elementderskalparallaxes, { y: [-500, 300] }), {
    target: elementderskalparallaxes,
  });
});