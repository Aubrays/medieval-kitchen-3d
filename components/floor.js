AFRAME.registerComponent("floor", {
  init: function () {
    this.el.setAttribute('id', "floor");

    for (let row = 0; row <= 4; row++) {
      for (let col = 0; col <= 4; col++) {
        let tile = document.createElement("a-entity");
        tile.setAttribute("gltf-model", "#floor_tile_large");
        tile.setAttribute("position", {
          x: 4 * row,
          y: 0,
          z: 4 * col,
        });
        tile.setAttribute('shadow', "receive: true; cast: false;");
        this.el.appendChild(tile);

      }
    }
  },
});
