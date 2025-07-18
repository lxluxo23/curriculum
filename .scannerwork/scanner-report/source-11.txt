import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'lil-gui'

export default function CatModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return


    const container = containerRef.current;    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1a1a1a)
    const renderWidth = 400
    const renderHeight = 400

    const camera = new THREE.PerspectiveCamera(50, renderWidth / renderHeight, 0.1, 1000)
    camera.position.set(0, 80, 150)
    camera.lookAt(0, 30, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(renderWidth, renderHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 2.0
    containerRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.target.set(0, 20, 0)
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.3
    controls.update()

    const mainLight = new THREE.SpotLight(0xffffff, 3)
    mainLight.position.set(0, 120, 0)
    mainLight.angle = 0.6
    mainLight.penumbra = 0.5
    mainLight.decay = 1
    mainLight.distance = 250
    mainLight.castShadow = true
    mainLight.shadow.bias = -0.001
    mainLight.shadow.mapSize.width = 2048
    mainLight.shadow.mapSize.height = 2048
    scene.add(mainLight)

    const ambientLight = new THREE.AmbientLight(0x606060, 1.2)
    scene.add(ambientLight)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0)
    hemiLight.position.set(0, 200, 0)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0)
    dirLight.position.set(100, 150, 50)
    dirLight.castShadow = true
    scene.add(dirLight)

    const floorGeometry = new THREE.PlaneGeometry(200, 200)
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x8e8482,
      roughness: 0.4,
      metalness: 0.4
    })

    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = 0
    floor.receiveShadow = true
    scene.add(floor)

    const textureLoader = new THREE.TextureLoader()
    const texture = textureLoader.load('/src/assets/uiacat/textures/Muchkin2_BaseColor.png')

    let cat: THREE.Object3D | null = null
    const loader = new FBXLoader()

    loader.load(
      '/src/assets/uiacat/source/OiiaioooooiaiFin.fbx',
      (object) => {
        cat = object
        object.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => {
                if (material instanceof THREE.MeshStandardMaterial ||
                  material instanceof THREE.MeshPhongMaterial) {
                  material.map = texture
                  material.needsUpdate = true
                }
              })
            } else if (child.material instanceof THREE.MeshStandardMaterial ||
              child.material instanceof THREE.MeshPhongMaterial) {
              child.material.map = texture
              child.material.needsUpdate = true
            }

            child.castShadow = true
            child.receiveShadow = true
          }
        })

        // Centrar y escalar el modelo
        const bbox = new THREE.Box3().setFromObject(object)
        const size = new THREE.Vector3()
        bbox.getSize(size)
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 70 / maxDim
        object.scale.set(scale, scale, scale)

        // Centrar el modelo
        const center = new THREE.Vector3()
        bbox.getCenter(center)
        object.position.sub(center.multiplyScalar(scale))
        object.position.y = 3

        scene.add(object)
        mainLight.target = object

        let time = 0
        const animate = () => {
          requestAnimationFrame(animate)
          time += 0.03

          if (cat) {
            cat.rotation.y = time * 2
            const jumpHeight = Math.abs(Math.sin(time * 2)) * 8
            cat.position.y = 10 + jumpHeight
          }

          mainLightHelper.update()
          updateLightConeRotation()
          controls.update()
          renderer.render(scene, camera)
        }
        animate()
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.error('Error loading FBX:', error)
      }
    )

    // Light Helpers
    const mainLightHelper = new THREE.SpotLightHelper(mainLight)
    mainLightHelper.visible = false
    scene.add(mainLightHelper)

    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 20)
    hemiLightHelper.visible = false
    scene.add(hemiLightHelper)

    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10)
    dirLightHelper.visible = false
    scene.add(dirLightHelper)

    // Light Cone Helper
    const geometryHelper = new THREE.ConeGeometry(5, 10, 32)
    const materialHelper = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      wireframe: true
    })

    const lightConeHelper = new THREE.Mesh(geometryHelper, materialHelper)
    lightConeHelper.position.copy(mainLight.position)
    scene.add(lightConeHelper)

    const updateLightConeRotation = () => {
      const lightDirection = new THREE.Vector3()
      lightDirection.subVectors(mainLight.target.position, mainLight.position).normalize()
      const quaternion = new THREE.Quaternion()
      quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), lightDirection)
      lightConeHelper.setRotationFromQuaternion(quaternion)
    }

    // GUI Setup
    const gui = new GUI()

    const mainLightFolder = gui.addFolder('Luz Principal (Spot)')
    mainLightFolder.add(mainLight.position, 'x', -200, 200, 1).name('Pos X')
    mainLightFolder.add(mainLight.position, 'y', 0, 300, 1).name('Pos Y')
    mainLightFolder.add(mainLight.position, 'z', -200, 200, 1).name('Pos Z')
    mainLightFolder.add(mainLight, 'angle', 0, Math.PI / 2, 0.01).name('Ángulo')
    mainLightFolder.add(mainLight, 'intensity', 0, 5, 0.01).name('Intensidad')
    mainLightFolder.add(mainLight, 'penumbra', 0, 1, 0.01).name('Penumbra')
    mainLightFolder.add(mainLight, 'decay', 0, 2, 0.01).name('Decay')
    mainLightFolder.open()

    const ambientFolder = gui.addFolder('Luz Ambiente')
    ambientFolder.add(ambientLight, 'intensity', 0, 5, 0.1).name('Intensidad')
    ambientFolder.open()

    const hemiFolder = gui.addFolder('Luz Hemisférica')
    hemiFolder.add(hemiLight, 'intensity', 0, 5, 0.1).name('Intensidad')
    hemiFolder.add(hemiLight.position, 'x', -300, 300, 1).name('Pos X')
    hemiFolder.add(hemiLight.position, 'y', 0, 300, 1).name('Pos Y')
    hemiFolder.add(hemiLight.position, 'z', -300, 300, 1).name('Pos Z')
    hemiFolder.open()

    const dirFolder = gui.addFolder('Luz Direccional')
    dirFolder.add(dirLight, 'intensity', 0, 5, 0.1).name('Intensidad')
    dirFolder.add(dirLight.position, 'x', -300, 300, 1).name('Pos X')
    dirFolder.add(dirLight.position, 'y', 0, 300, 1).name('Pos Y')
    dirFolder.add(dirLight.position, 'z', -300, 300, 1).name('Pos Z')
    dirFolder.open()

    const floorFolder = gui.addFolder('Material Piso')
    floorFolder.addColor({ color: floorMaterial.color.getHex() }, 'color')
      .name('Color Piso')
      .onChange((val: THREE.ColorRepresentation) => {
        floorMaterial.color.set(val)
      })
    floorFolder.add(floorMaterial, 'metalness', 0, 1, 0.01).name('Metalness')
    floorFolder.add(floorMaterial, 'roughness', 0, 1, 0.01).name('Roughness')
    floorFolder.open()

    const cameraFolder = gui.addFolder('Cámara')
    cameraFolder.add(camera.position, 'x', -200, 200, 1).name('Pos X')
    cameraFolder.add(camera.position, 'y', 0, 300, 1).name('Pos Y')
    cameraFolder.add(camera.position, 'z', 0, 300, 1).name('Pos Z')
    cameraFolder.add(controls, 'autoRotate').name('Auto Rotar')
    cameraFolder.add(controls, 'autoRotateSpeed', -10, 10, 0.1).name('Vel. Rotación')
    cameraFolder.open()

    const debugFolder = gui.addFolder('Debug Helpers')
    const debugParams = {
      mainLightHelper: false,
      hemiLightHelper: false,
      dirLightHelper: false
    }
    debugFolder.add(debugParams, 'mainLightHelper').name('Main Light Helper')
      .onChange((val: boolean) => { mainLightHelper.visible = val })
    debugFolder.add(debugParams, 'hemiLightHelper').name('Hemisphere Helper')
      .onChange((val: boolean) => { hemiLightHelper.visible = val })
    debugFolder.add(debugParams, 'dirLightHelper').name('Dir Light Helper')
      .onChange((val: boolean) => { dirLightHelper.visible = val })
    debugFolder.open()

    return () => {
      gui.destroy()
      if (container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center"
      style={{
        width: '400px',
        height: '400px',
        transform: 'scale(0.85)',
        transformOrigin: 'center',
        margin: '-50px'
      }}
    />
  )
}