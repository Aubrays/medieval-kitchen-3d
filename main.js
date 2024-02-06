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

    let checkpointEl = document.getElementById("point-start");

    checkpointEl.setAttribute(
      "sound",
      `src: #welcome-guyde; autoplay:true; volume: 1.5;`,
    );

    checkpointEl.addEventListener("sound-ended", () => {
      checkpointEl.remove(document.getElementById("start-guyde"));
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
    offset: "0 0 2",
    rotation: "0 -12 0",
    speech: "#fire-guyde",
  },
  {
    id: "point-2",
    position: "0.5 0 2",
    offset: "0 0 2",
    rotation: "0 30 0",
    speech: "#table-guyde",
    sound: "#cutting_sound",
  },
  {
    id: "point-3",
    position: "6 0 2",
    offset: "-1 0 1",
    rotation: "0 -50 0",
    speech: "#carrots-guyde",
  },
  {
    id: "point-4",
    position: "12 0 4",
    offset: "-2 0 1",
    rotation: "0 -75 0",
    speech: "#spit-guyde",
  },
  {
    id: "end-point",
    position: "12 0 17",
    offset: "-1 0 -1",
    rotation: "0 225 0",
    speech: "#bye-guyde",
  },
];

let stepCounter = 0;

AFRAME.registerComponent("add-next-guyde", {
  init: function () {
    let checkpoint = checkpoints[stepCounter];
    this.el.setAttribute("id", checkpoint.id);
    this.el.setAttribute("position", checkpoint.position);
    this.el.setAttribute("guyde", `offset: ${checkpoint.offset}`);
    this.el.setAttribute("rotation", checkpoint.rotation);
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
    currentCheckpoint.speech,
  );

  currentCheckpointEl.setAttribute("play-audio-guide", currentCheckpoint.sound);

  stepCounter++;

  if (currentCheckpointEl.id !== "checkpoint-end-point") {
    let entityEl = document.createElement("a-entity");

    currentCheckpointEl.parentNode.addEventListener("sound-ended", function () {
      entityEl.setAttribute("add-next-guyde", "");
      checkpointsEl.appendChild(entityEl);
      // Remove the previous guyde group with the light
      entityEl.setAttribute("remove-previous-guyde", "");
    });
  }
});
