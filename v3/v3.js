function Start() {
    const startnow = prompt("Directions: The chipmunk must catch the hawk. Drag your icon to an adjacent box one at a time. Player 1 to move.");
}

const icons = document.getElementsByClassName('icon1', 'icon2')
const dragicon = null;
const dragRadius = 20;

function setup() {
    strokeWeight(5);

    for(let i = 0; i < 3; i++) {
        icons.push(createVector(random(width), random(height)));
    }
}

function draw() {
    background(220);
    for(let p of icons) {
        circle(p.x, p.y, dragradius * 2);
    }
}

function mousePressed() {
    for(let i = icons.length-1; i >= 0; i --) {
        if(mouseInCircle(icons[i], dragRadius)) {
            dragicon = icons.splice(i,1);
            dragicon.x = mouseX;
            dragicon.y = mouseY;
            icons.push(dragicon);

            break;
        }
    }
}

function mouseDragged() {
    if(dragicon) {
        dragicon.x = mouseX;
        dragicon.y = mouseY;
    }
}

function mouseReleased() {
    dragicon = null;
}

function mouseInCircle(pos, radius) {
    return dist(mouseX, mouseY, pos.x, pos.y) < radius
}