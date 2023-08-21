AFRAME.registerComponent("flying",{
    init:function(){
        for(i=1; 1<=20; i++){
            var id = `bird${i}`

      var posX =Math.floor(Math.random() * 3000 + (-1000));      
      var posY = Math.floor(Math.random() * 2 + (-1));
      var posZ = Math.floor(Math.random() * 3000 + -1000);

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingBirds(id, position);
        }
    },
    flyingBirds:(id,position)=>{
        var terrain_el = document.querySelector("#terrain")
        var bird_el = document.createElement("a-entity")
        bird_el.setAttribute("id",id)
        bird_el.setAttribute("position", position)     
        bird_el.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        bird_el.setAttribute("scale",{x:500,y:500,z:500})
        bird_el.setAttribute("animation-mixer",{})
        terrain_el.appendChild(bird_el)

    }
})