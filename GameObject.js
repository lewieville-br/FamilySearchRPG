class GameObject{
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/01-pizza-legends-intro/images/characters/people/hero.png",
        });
    }
    update(){

    }
};