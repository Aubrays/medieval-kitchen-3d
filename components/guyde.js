AFRAME.registerComponent("guyde", {
  schema: {
    offset: { type: "string" },
  },
  init: function () {
    let point_id = this.el.getAttribute("id");
    let offset = this.data.offset;

    let guyde = document.createElement("a-entity");
    guyde.setAttribute("checkpoint", `offset: ${offset}`);
    guyde.setAttribute("gltf-model", "#guyde");
    guyde.setAttribute("id", `checkpoint-${point_id}`);

    let light = document.createElement("a-entity");
    light.setAttribute(
      "light",
      `type: spot; target: #${point_id}; angle: 2; intensity: 0.6;`,
    );
    light.setAttribute("position", "0 20 0");

    this.el.classList.add("guyde");

    this.el.appendChild(guyde);
    this.el.appendChild(light);
  },
});
