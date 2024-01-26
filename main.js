// import "./components/shaders/fire";
import "./components/triangleFire";
import "./components/logs";
import "./components/floor";
import "./components/pillars";
import "./components/guyde";
import "./style.css";
import "./components/playAudioGuide";

const btn = document.getElementById("start-exp");
const ui = document.getElementById("UI");

let context;
window.onload = function () {
  context = THREE.AudioContext.getContext();

  btn.addEventListener("click", () => {
    if (context.state !== "running") {
      context.resume().then(() => {
        console.log("Playback resumed successfully");
      });
    }

    ui.style.display = "none";

    let checkpointEl = document.getElementById("point-start").parentNode;

    checkpointEl.setAttribute(
      "sound",
      `src: #ping; autoplay:true; volume: 1.5;`,
    );

    checkpointEl.addEventListener("sound-ended", () => {
      let entityEl = document.createElement("a-entity");
      entityEl.setAttribute("add-next-guyde", "");

      checkpointsEl.appendChild(entityEl);
    });
  });
};

const checkpointsEl = document.getElementById("checkpoints");

const checkpoints = [
  {
    id: "point-1",
    position: "0.5 0 9",
    offset: "1 0 1",
    rotation: "0 90 0",
    sound: "#ping",
  },
  {
    id: "point-2",
    position: "0.5 0 4",
    offset: "1 0 1",
    rotation: "0 90 0",
    sound: "#ping",
  },
  {
    id: "end-point",
    position: "17 0 17",
    offset: "-1 0 -1",
    rotation: "0 0 0",
  },
];

let stepCounter = 0;

AFRAME.registerComponent("add-next-guyde", {
  init: function () {
    let checkpoint = checkpoints[stepCounter];
    this.el.setAttribute("id", checkpoint.id);
    this.el.setAttribute("position", checkpoint.position);
    this.el.setAttribute("guyde", `offset: ${checkpoint.offset}`);
  },
});

AFRAME.registerComponent("remove-previous-guyde", {
  init: function () {
    if (stepCounter - 1 >= 0) {
      let checkpoint = checkpoints[stepCounter - 1];

      let previous = document.getElementById(checkpoint.id);
      previous.parentNode.removeChild(previous);
    }
  },
});

window.addEventListener("navigation-end", function (event) {
  let currentCheckpoint = checkpoints[stepCounter];
  let currentCheckpointEl = event.detail.checkpoint;

  currentCheckpointEl.parentNode.setAttribute(
    "play-audio-guide",
    currentCheckpoint.sound,
  );

  stepCounter++;
  if (currentCheckpointEl.id !== "checkpoint-end-point") {
    let entityEl = document.createElement("a-entity");
    entityEl.setAttribute("add-next-guyde", "");

    // Remove the previous guyde group with the light
    entityEl.setAttribute("remove-previous-guyde", "");

    checkpointsEl.appendChild(entityEl);

    // Remove the current checkpoint with the guy but keep the light
    currentCheckpointEl.parentNode.removeChild(currentCheckpointEl);
  }
});
