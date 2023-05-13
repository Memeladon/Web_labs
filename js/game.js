const canvas = document.querySelector ('canvas')
const c = canvas.getContext ('2d')

canvas.width = 600
canvas.height = 900

let character = new Image();
let background = new Image();
let block = new Image();

character.src = "img/character.png";
background.src = "img/background.png";
block.src = "img/block.png";

let score = 0;

let blocks = [];

blocks[0] = ({    
    x : 0,
    y : 0,
  })

class Player {
    constructor(position) {
        this.position = position
        this.veloctiy = {
            x: 0,
            y: 0,
        }
        this.width = character.width
        this.height = character.height
    }

    draw() {
        c.drawImage (character, this.position.x, this.position.y) 
    }

    update() {
        this.draw()

        let topLimit = this.position.y + this.veloctiy.y >= 0;
        let rightLimit = this.position.x + this.width + this.veloctiy.x <= canvas.width;
        let bottomLimit = this.position.y + this.height + this.veloctiy.y <= canvas.height;
        let leftLimit = this.position.x + this.veloctiy.x >= 0;

        if (topLimit && bottomLimit) this.position.y += this.veloctiy.y
        else this.veloctiy.y = 0
        if (rightLimit && leftLimit) this.position.x += this.veloctiy.x
        else this.veloctiy.x = 0
    }
}

const player = new Player({
    x : 250,
    y : 800,
    })

const key = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    w: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            key.d.pressed = true
        break
        case 'a':
            key.a.pressed = true
        break
        case 'w':
            key.w.pressed = true
        break
        case 's':
            key.s.pressed = true
        break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            key.d.pressed = false
        break
        case 'a':
            key.a.pressed = false
        break
        case 'w':
            key.w.pressed = false
        break
        case 's':
            key.s.pressed = false
        break
    }
})


function animation() {
    window.requestAnimationFrame(animation)
    c.drawImage(background, 0, 0);
    player.update()

    player.veloctiy.x = 0
    player.veloctiy.y = 0

    if (key.d.pressed) player.veloctiy.x = 7
    else if (key.a.pressed) player.veloctiy.x = -7

    if (key.w.pressed) player.veloctiy.y = -7
    else if (key.s.pressed) player.veloctiy.y = 7

    for (let i = 0; i < blocks.length; i++) {
        c.drawImage (block, blocks[i].x, blocks[i].y)

        blocks[i].y+=5; 

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const randomx = random (1, canvas.width-block.width)

        if (blocks[i].y == 300) {
            blocks.push({
                x : randomx,
                y : 0,
            });
        }
        if (blocks[i].y == 1000) blocks.splice(i, 1) 

        let isGoingToHitX = player.position.x + player.width  >= blocks[i].x && player.position.x <= blocks[i].x + block.width;
        let isGoingToHitY = player.position.y <= blocks[i].y + block.height && player.position.y + player.height >= blocks[i].y;

        if (isGoingToHitX && (isGoingToHitY)) {
            location.reload();
            }

        if (blocks[i].y == canvas.height) {
        score++;
        }
  }
  c.fillStyle = "red";
  c.font = "36px Arial";
  c.fillText(score, 20, canvas.height - 20);
}

animation()