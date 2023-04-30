import React, { useEffect } from 'react'
import './Home.css'
//Import threeJS
import * as THREE from 'three'


import { Typography } from '@mui/material'
import TimeLine from '../TimeLine/TimeLine'

import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiRedux,
  SiTypescript,SiCplusplus
} from 'react-icons/si'




function Home({ timelines, skills }) {

  useEffect(() => {

    const scene = new THREE.Scene();


    // geomerty

    const geometry = new THREE.TorusGeometry(3, 1, 12, 100);
    const particalesGeometry = new THREE.BufferGeometry;
    const particalsCnt = 5000;
    const positionArray = new Float32Array(particalsCnt * 3)
    for (let i = 0; i < particalsCnt; i++) {
      positionArray[i] = (Math.random() - 0.5) * (Math.random() * 10) * 6
    }
    particalesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))

    // material
    const material = new THREE.PointsMaterial({
      size: 0.01
    })
    const particalsMaterial = new THREE.PointsMaterial({
      size: 0.01
    })



    // mesh
    material.color = new THREE.Color(0xffffff)
    const gem = new THREE.Points(geometry, material)
    scene.add(gem)
    // gem.position.x = 10;

    const particalMesh = new THREE.Points(particalesGeometry, particalsMaterial)
    scene.add(particalMesh)

    //  gem.position.set(2,0,0)
    // lights
    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.position.set(-15, 2, 3)
    scene.add(light)

    // camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, -1)
    scene.add(camera)




    // renderer
    const canvas = document.querySelector('.homeCanvas')
    const renderer = new THREE.WebGL1Renderer({ canvas })
    renderer.setClearColor(new THREE.Color('#222222'))

    // light helper
    const lightHelper = new THREE.PointLightHelper(light)
    scene.add(lightHelper)


    // mouse  position
    let mouseX = 0
    let mouseY = 0

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    })
    
    window.addEventListener('scroll',()=>{
      // camera.rotation.y = window.scrollY * 0.001;
      // camera.rotation.x = window.scrollX * 0.001;
      // camera.rotation.z = window.scrollY* 0.002;
    })

    gem.rotateY(90)
    // animate function to rotate the sphere
    const clock = new THREE.Clock()
    const animate = () => {
      const elapsTime = clock.getElapsedTime()
      particalMesh.rotation.y = mouseY * (elapsTime * 0.0001)
      if (camera.position.z < 10) {
        camera.position.z += 0.1
      }
      requestAnimationFrame(animate)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
      gem.rotation.y += 0.005;
    }
    animate()

  }, [])

  return (
    <div className='home'>

      <div className="cotainer">
        <div className="content">
          <h1>Welcome to my Portfolio</h1>
          <p>Hii I'm Harshit Tripathi <br /> A Web Developer</p>
        </div>
      </div>

      <canvas className='homeCanvas'></canvas>

      <div className="homeContainer">
        <Typography variant='h1'>Timeline</Typography>
        <TimeLine timelines={timelines} />
      </div>

      <div className="homeskill">
        <Typography variant='h3' >Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face6" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face2" />
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeskillsBox">
          <div className='skill'>
            <SiReact />
            <span className='skill-text'>ReactJS</span>
          </div>
          <div className='skill'>
            <SiJavascript />
            <span className='skill-text'>JavaScript</span>
          </div>
          <div className='skill'>
            <SiNodedotjs />
            <span className='skill-text'>NodeJS</span>
          </div>
          <div className='skill'>
            <SiMongodb />
            <span className='skill-text'>MongoDB</span>
          </div>
          <div className='skill'>
            <SiCss3 />
            <span className='skill-text'>CSS3</span>
          </div>
          <div className='skill'>
            <SiHtml5 />
            <span className='skill-text'>HTML5</span>
          </div>
          <div className="skill">
            <SiExpress />
            <span className='skill-text'>ExpressJS</span>
          </div>
          <div className="skill">
            <SiRedux />
            <span className='skill-text'>Redux-Toolkit</span>
          </div>
          <div className="skill">
            <SiTypescript />
            <span className='skill-text'>TypeScript</span>
          </div>
          <div className="skill">
            <SiCplusplus/>
            <span className='skill-text'>C++</span>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Home
