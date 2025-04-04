class Sprite {
    constructor(config){

        //set up images
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;   
        }
        
        this.shadow = new Image();
        this.useShadow = true; // 
        if (this.useShadow){
            this.shadow.src = "/01-pizza-legends-intro/images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        //config animation
        this.animations = config.animations || {
            "idle-down": [[0, 0] ],
            "idle-right": [[0, 1] ],
            "idle-up": [[0, 2] ],
            "idle-left": [[0, 3] ],
            "walk-down": [ [1, 0], [0, 0], [3, 0], [0, 0] ],
            "walk-right": [ [1, 1], [0, 1], [3, 1], [0, 1] ],
            "walk-up": [ [1, 2], [0, 2], [3, 2], [0, 2] ],
            "walk-left": [ [1, 3], [0, 3], [3, 3], [0, 3] ]
        };
        this.currentAnimation = "idle-down"; //config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 16;
        this.animationFrameProgress = this.animationFrameLimit;


        //reference game obj
        this.gameObject = config.gameObject;
    }

    get frame(){
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation (key) {
        if (this.currentAnimation != key){
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        // downtick frame prog
        if (this.animationFrameProgress > 0){
            this.animationFrameProgress -= 1;
            return;
        }

        //reset it
        this.animationFrameProgress = this.animationFrameLimit;
        //uptick frame
        this.currentAnimationFrame += 1;
        
        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }

    }

    //ctx = 2d canvas aka context
    draw(ctx, cameraPerson){
        const x = this.gameObject.x - 8 + utils.widthGrid(10.5) - cameraPerson.x;
        const y = this.gameObject.y - 18 + utils.widthGrid(6) - cameraPerson.y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y) // draw a shadow

        //drawing sprite and creating new image on each draw.
        const [frameX,frameY] = this.frame;
        this.isLoaded && ctx.drawImage(this.image, 
            frameX * 32, frameY *32,
            32,32,
            x,y,
            32,32
        ) // draw whichever character was specified
        
        this.updateAnimationProgress();
    }
}