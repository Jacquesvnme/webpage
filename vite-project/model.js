import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function setup3D(element) {
    $(document).ready(function(){
        $(".text").hide();
    }); 
    
    let scene, camera, renderer, nova;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040406);
    
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 20;
    camera.position.y = 20;
    camera.position.z = 20;
    
    /*
    let hlight = new THREE.AmbientLight (0x404040, 100);
    scene.add(hlight);
    
    //Adding directional lights
    let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    //Adding Shadow
    let light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);
    
    let light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);
    
    let light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    
    let light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,0);
    scene.add(light4);
    */
    
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);
    controls.enableZoom = false;
    
    let loader = new GLTFLoader();
    loader.load('./supernova_remnant__lighting_2.glb', function(gltf){
        //Reduce the nova size by half
        nova = gltf.scene.children[0];
        nova.scale.set(5, 5, 5);
        //nova.position.y = -10;
        scene.add(gltf.scene);
        animate();
    });
    
    function animate(){
        nova.rotation.z += 0.0005;
        nova.rotation.x += 0.0005;

        renderer.setSize(window.innerWidth, window.innerHeight);

        console.log(scrollY);

        var name = $("#name");

        if (scrollY > 1520) {
            name.animate({height: '500px'}, "slow");
        } else {
            name.animate({opacity: '1.0'}, "slow");
        }

        /* TODO start here >> fix animate*/

        /*        
            $("#socials").fadeOut(1000),
            $("#description").fadeOut(1000),
            $("#pimg").fadeOut(1000),
            $("#ot").fadeOut(1000);
        
            $("#socials").fadeIn(1000),
            $("#description").fadeIn(1000),
            $("#pimg").fadeIn(1000),
            $("#ot").fadeIn(1000);
        */

        window.onscroll = function () {
            if (scrollY > 0) {
            nova.rotation.x += 0.007;
            nova.rotation.z += 0.007;
            }
        }
    
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
    }
}