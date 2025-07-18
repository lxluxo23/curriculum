import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'lil-gui';


export default function DancingRoach() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current;
    const scene = new THREE.Scene()
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
    controls.autoRotateSpeed = 2.0
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

    const roachMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xff0000,
      metalness: 0.6,
      roughness: 0.47,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      emissive: 0x333333,
      emissiveIntensity: 0,
      sheen: 0.5,
      sheenRoughness: 0.4
    })
    let roach: THREE.Mesh | null = null

    const loader = new STLLoader()
    loader.load(
      '/src/assets/cockroach.stl',
      function (geometry) {
        roach = new THREE.Mesh(geometry, roachMaterial)
        roach.castShadow = true
        roach.receiveShadow = true
        geometry.center()
        geometry.computeBoundingBox()
        const boundingBox = geometry.boundingBox
        const size = new THREE.Vector3()
        boundingBox?.getSize(size)
        const maxDim = Math.max(size.x, size.y, size.z)
        const scale = 70 / maxDim
        roach.scale.set(scale, scale, scale)
        roach.position.y = 20
        scene.add(roach)
        mainLight.target = roach

        let time = 0
        const animate = () => {
          requestAnimationFrame(animate)
          time += 0.03

          if (roach) {
            roach.rotation.y = time * 0.8
            const jumpHeight = Math.abs(Math.sin(time * 2)) * 8
            const tiltAngle = Math.sin(time * 2) * 0.4
            roach.position.y = 20 + jumpHeight
            roach.position.x = Math.sin(time) * 8
            roach.rotation.z = -tiltAngle
            const pitchAngle = Math.cos(time * 2) * 0.2
            roach.rotation.x = pitchAngle
          }

          mainLightHelper.update()
          updateLightConeRotation()
          controls.update()
          renderer.render(scene, camera)
        }

        animate()
      },
      undefined,
      function (error) {
        console.error('Error loading STL:', error)
      }
    )

    const mainLightHelper = new THREE.SpotLightHelper(mainLight)
    mainLightHelper.visible = false
    scene.add(mainLightHelper)

    const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 20)
    hemiLightHelper.visible = false
    scene.add(hemiLightHelper)

    const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10)
    dirLightHelper.visible = false
    scene.add(dirLightHelper)

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

    const roachMaterialFolder = gui.addFolder('Material Cucaracha')
    roachMaterialFolder.addColor({ color: roachMaterial.color.getHex() }, 'color')
      .name('Color')
      .onChange((val: THREE.ColorRepresentation) => {
        roachMaterial.color.set(val)
      })
    roachMaterialFolder.add(roachMaterial, 'metalness', 0, 1, 0.01).name('Metalness')
    roachMaterialFolder.add(roachMaterial, 'roughness', 0, 1, 0.01).name('Roughness')
    roachMaterialFolder.add(roachMaterial, 'emissiveIntensity', 0, 5, 0.1).name('Emissive Int.')
    roachMaterialFolder.open()

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

    const roachFolder = gui.addFolder('Cucaracha')
    const roachParams = {
      posX: 0,
      posY: 20,
      posZ: 0,
      rotX: 0,
      rotY: 0,
      rotZ: 0
    }
    roachFolder.add(roachParams, 'posX', -2000, 2000, 1).name('Pos X').onChange(() => {
      if (roach) roach.position.x = roachParams.posX
    })
    roachFolder.add(roachParams, 'posY', -2000, 2000, 1).name('Pos Y').onChange(() => {
      if (roach) roach.position.y = roachParams.posY
    })
    roachFolder.add(roachParams, 'posZ', -2000, 2000, 1).name('Pos Z').onChange(() => {
      if (roach) roach.position.z = roachParams.posZ
    })
    roachFolder.add(roachParams, 'rotX', -360, 360, 1).name('Rot X').onChange(() => {
      if (roach) roach.rotation.x = roachParams.rotX
    })
    roachFolder.add(roachParams, 'rotY', -360, 360, 1).name('Rot Y').onChange(() => {
      if (roach) roach.rotation.y = roachParams.rotY
    })
    roachFolder.add(roachParams, 'rotZ', -360, 360, 1).name('Rot Z').onChange(() => {
      if (roach) roach.rotation.z = roachParams.rotZ
    })
    roachFolder.open()

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
