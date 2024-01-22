// Adapted for Aframe from https://codepen.io/sjcobb/pen/gmjVqb?editors=0010

AFRAME.registerComponent("fire", {
    schema: {
        fire: {type: 'string'}
    },

    init: function () {
        let loader = new THREE.TextureLoader();
        loader.crossOrigin = '';

        let fireTex = loader.load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/212131/Fire.png");

        let wireframeMat = new THREE.MeshBasicMaterial({
            color : new THREE.Color(0xffffff),
            wireframe : true
        });
    
        let fire = new THREE.Fire(fireTex);
        this.data.fire = fire;
    
        let wireframe = new THREE.Mesh(fire.geometry, wireframeMat.clone());
        fire.add(wireframe);
        wireframe.visible = true;
        wireframe.visible = false;
        
        console.log(fire);
        fire.position.set(0, 0, 0);
        fire.position.set(0, 0.25, 1.3);
        
        this.data.fire = fire;
    },

    tick: function (time, timeDelta) {
        this.data.fire.update(timeDelta);
    }
  });
  