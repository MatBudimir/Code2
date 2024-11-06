"use strict";
var FudgeCore;
(function (FudgeCore) {
    var ƒ = FudgeCore;
    window.addEventListener("load", start);
    const node = new ƒ.Node("Node");
    const camera = new ƒ.ComponentCamera;
    const viewport = new ƒ.Viewport();
    const cubes = [];
    ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
    function start() {
        const canvas = document.querySelector("canvas");
        createCube(8);
        camera.mtxPivot.translateZ(-6);
        viewport.initialize("viewport", node, camera, canvas);
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_GAME, 60);
        ƒ.Time.game.setScale(1);
    }
    function createCube(_num) {
        const cube = new ƒ.MeshCube("Cube");
        const clrCube = new ƒ.Color(1, 0.2, 0.1, 1);
        const material = new ƒ.Material("Texture", FudgeCore.ShaderLit, new ƒ.CoatColored(clrCube));
        const transfrom = new ƒ.ComponentTransform;
        node.addComponent(new ƒ.ComponentMesh(cube));
        node.addComponent(new ƒ.ComponentMaterial(material));
        node.addComponent(transfrom);
        node.mtxLocal.rotate(new ƒ.Vector3(-30, 0, 0));
        for (let i = 0; i <= _num; i++) {
            cubes.push(node);
        }
    }
    // for (let i: number = 0; i <= _num; i++){}
    // for (let i: number = 0; i <= cubes.length; i++){}
    // function moveCamera(): void {
    // }
    function rotateCube(_degrees) {
        node.mtxLocal.translateX(0.002, false);
        // let position: Vector3 = node.mtxWorld.get();
        // console.log(position);
        node.mtxLocal.rotate(new ƒ.Vector3(0.2, 1, 0.5));
    }
    function update() {
        const time = ƒ.Loop.timeFrameGame;
        const ftps = time * 1000;
        const degrees = 360 / ftps;
        rotateCube(degrees);
        viewport.draw();
    }
})(FudgeCore || (FudgeCore = {}));
//# sourceMappingURL=Fudge.js.map