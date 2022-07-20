import * as THREE from "three";
import Experience from "../Experience";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.island = this.resources.items.island;
        this.actualIsland = this.island.scene;

        this.setModel();
    }

    setModel() {
        this.scene.add(this.actualIsland);
    }

    resize() {}

    update() {}
}
