import React, { useEffect } from 'react'
import './Loader.css'
import * as THREE from 'three'
function Loader() {


  useEffect(() => {
   

    const scene = new THREE.Scene();

    const geomerty = new THREE.SphereGeometry(3,64,64)

    const material = new THREE.MeshStandardMaterial( {
      color: "0xffffff"
    } );


    // mesh
    const newmesh = new THREE.Mesh(geomerty,material)
    scene.add(newmesh)
    // light
    const light = new THREE.PointLight(0x669999, 1, 100)
    light.position.set(15, 2, 20)
    scene.add(light)

    // camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    // camera.position.set(0, 0, 1)
    camera.position.z = 20
    scene.add(camera)
    // canvas 
    const canvas = document.getElementById("canvas")
    const renderer = new THREE.WebGLRenderer({canvas})
    renderer.setSize(window.innerWidth,window.innerHeight)
    
    
    function animate(){
      
      if(light.position.x < -140){
        light.position.x = 100
      }else{
        light.position.x += -0.1
        light.position.y += -0.1

      }
      newmesh.rotateX += 1
      newmesh.rotateY += 1
      renderer.render(scene,camera)
      requestAnimationFrame(animate)
     }
     animate()

  },[])


  return (

    <>
      <canvas id='canvas'></canvas>
      <div className='loader'>
        <h1>Loading....</h1>
      </div>
    </>
  )
}

export default Loader
