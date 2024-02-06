AFRAME.registerComponent("play-audio-guide", {
  schema: { type: "string", default: "#ping" },
  init: function () {
    this.el.setAttribute(
      "sound",
      `src: ${this.data}; autoplay:true; volume: 1.5; positional: false`,
    );
  },
});
