AFRAME.registerComponent("pillars", {
  init: function () {
    let offset = 2;
    
    for (let row = 0; row <= 2; row++) {
      for (let col = 0; col <= 2; col++) {
        
        // No pillar in the middle of room
        if (col === 1 && row === 1) {
          continue;
        }

        let tile = document.createElement("a-entity");

        tile.setAttribute("gltf-model", "#pillar");
        tile.setAttribute("position", {
          x: 6 * row + offset,
          y: 0,
          z: 6 * col + offset,
        });
        tile.setAttribute('shadow', "receive: false; cast: true;");
        this.el.appendChild(tile);
      }
    }
  },
});
