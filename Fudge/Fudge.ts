namespace FudgeCore {
    import ƒ = FudgeCore;
    window.addEventListener("load", start);
    const node: ƒ.Node = new ƒ.Node("Node");
    const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera;
    const viewport: ƒ.Viewport = new ƒ.Viewport();
    const cubes: Array<Node> = [];

     ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        createCube(8);

        camera.mtxPivot.translateZ(-6);

        viewport.initialize("viewport", node, camera, canvas);

        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_GAME, 60);
        ƒ.Time.game.setScale(1);
    }

    function createCube(_num: number): void {
        const cube: ƒ.Mesh = new ƒ.MeshCube("Cube");
        const clrCube: ƒ.Color = new ƒ.Color(1, 0.2, 0.1, 1);
        const material: ƒ.Material = new ƒ.Material("Texture", FudgeCore.ShaderLit, new ƒ.CoatColored(clrCube));
        const transfrom: ƒ.ComponentTransform = new ƒ.ComponentTransform;
        node.addComponent(new ƒ.ComponentMesh(cube));
        node.addComponent(new ƒ.ComponentMaterial(material));
        node.addComponent(transfrom);
        node.mtxLocal.rotate(new ƒ.Vector3(-30, 0, 0));
        for (let i: number = 0; i <= _num; i++) {
            cubes.push(node);
        }
    }

    // for (let i: number = 0; i <= _num; i++){}
    // for (let i: number = 0; i <= cubes.length; i++){}

    // function moveCamera(): void {
    // }

    function rotateCube(_degrees: number): void {
        node.mtxLocal.translateX(0.002, false);
        // let position: Vector3 = node.mtxWorld.get();
        // console.log(position);
        node.mtxLocal.rotate(new ƒ.Vector3(0.2, 1, 0.5));
    }

    function update(): void {
        const time: number = ƒ.Loop.timeFrameGame
        const ftps: number = time * 1000;
        const degrees: number = 360 / ftps;
        rotateCube(degrees);
        viewport.draw();
    }
}