AFRAME.registerComponent("logs", {
    init: function () {
        let log = document.createElement("a-gltf-model");
        log.setAttribute("src", "#log");
        log.setAttribute('shadow', "receive: false; cast: false;");

        let log1 = log.cloneNode();
        let log2 = log.cloneNode();
        let log3 = log.cloneNode();

        log1.setAttribute("position", "0 0 0.027");
        log1.setAttribute("rotation", "0 90 0");
        log1.setAttribute("scale", "0.75 1 0.9");

        log2.setAttribute("position", "0.183 0.069 -0.072");
        log2.setAttribute("rotation", "2 75 -15");

        log3.setAttribute("position", "0.305 0 0.118");
        log3.setAttribute("rotation", "0 69 0");

        this.el.appendChild(log1);
        this.el.appendChild(log2);
        this.el.appendChild(log3);
    }
});