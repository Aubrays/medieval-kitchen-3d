// import "./components/shaders/fire";
import "./components/triangleFire";
import "./components/logs";
import "./components/floor";
import "./components/pillars";
import "./style.css";

const btn = document.getElementById("start-exp");

let context;
window.onload = function () {
  context = THREE.AudioContext.getContext();

  if (context.state !== "running") {
    btn.addEventListener("click", () => {
      context.resume().then(() => {
        btn.style.display = "none";
        console.log("Playback resumed successfully");
      });
    });
  } else {
    btn.style.display = "none";
  }
};

window.addEventListener("navigation-end", function (event) {
  console.log("Navigation ended", event.detail.checkpoint);
});
