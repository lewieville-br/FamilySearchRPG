class OverworldMap {
    constructor(config){
        this.gameObjects = config.gameObjects;
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson){
        ctx.drawImage(this.lowerImage, utils.widthGrid(10.5) - cameraPerson.x,
        utils.widthGrid(6) - cameraPerson.y )
    }

    drawUpperImage(ctx, cameraPerson){
        ctx.drawImage(this.upperImage, utils.widthGrid(10.5) - cameraPerson.x,
        utils.widthGrid(6) - cameraPerson.y )
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "01-pizza-legends-intro/images/maps/DemoLower.png",
        upperSrc: "01-pizza-legends-intro/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.widthGrid(5),
                y: utils.widthGrid(6),
            }),
            npc1:  new Person({
                x: utils.widthGrid(7),
                y: utils.widthGrid(9),
                src: "01-pizza-legends-intro/images/characters/people/npc1.png",
            })
        }
    },

    Kitchen: {
        lowerSrc: "01-pizza-legends-intro/images/maps/KitchenLower.png",
        upperSrc: "01-pizza-legends-intro/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.widthGrid(2),
                y: utils.widthGrid(6),
                
            }),
            npcA: new Person({
                x: utils.widthGrid(10),
                y: utils.widthGrid(5),
                src: "01-pizza-legends-intro/images/characters/people/npc5.png",
            }),
            npcB: new Person({
                x: utils.widthGrid(3),
                y: utils.widthGrid(9),
                src: "01-pizza-legends-intro/images/characters/people/npc4.png",
            }),
        }
    },
}
