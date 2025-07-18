import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function ThreeDonut() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current;
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.set(0, 0, 25)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(300, 300)

    const effect = new AsciiEffect(renderer, ' .:-+*=%@#', {
      resolution: 0.15,
      scale: 1,
      color: false,
      alpha: false,
      block: false,
      invert: true
    })
    
    effect.setSize(300, 300)
    effect.domElement.style.color = '#FFB000'
    effect.domElement.style.backgroundColor = 'transparent'
    effect.domElement.style.fontSize = '10px'
    effect.domElement.style.lineHeight = '8px'
    effect.domElement.style.letterSpacing = '0px'
    effect.domElement.style.fontFamily = 'monospace'
    effect.domElement.style.fontWeight = 'bold'

    const controls = new OrbitControls(camera, effect.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = true
    controls.autoRotate = false // Desactivamos la rotación automática

    const geometry = new THREE.TorusGeometry(10, 4, 24, 48)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffb000,
      flatShading: true,
      shininess: 150,
    })

    const donut = new THREE.Mesh(geometry, material)
    scene.add(donut)

    const pointLight = new THREE.PointLight(0xffffff, 2)
    pointLight.position.set(20, 20, 20)
    scene.add(pointLight)
    
    const backLight = new THREE.PointLight(0xffffff, 1)
    backLight.position.set(-20, -20, -20)
    scene.add(backLight)
    
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)

    let frameId: number
    let time = 0
    
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.02

      donut.rotation.y = time
      donut.rotation.x = Math.sin(time * 0.5) * 0.3
      donut.rotation.z = Math.cos(time * 0.3) * 0.2
      const breathe = 1 + Math.sin(time * 2) * 0.02
      donut.scale.set(breathe, breathe, breathe)

      // Movimiento orbital suave
      donut.position.y = Math.sin(time * 0.5) * 2
      donut.position.x = Math.cos(time * 0.3) * 2

      effect.render(scene, camera)
    }

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }
    
    containerRef.current.appendChild(effect.domElement)
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      if (container) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="w-[300px] h-[300px] flex items-start justify-start overflow-hidden"
      style={{
        transformOrigin: 'top left',
      }}
    />
  )
}