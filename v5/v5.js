function Start() {
    const startnow = prompt("Directions: The chipmunk must catch the hawk. Drag your icon to an adjacent box one at a time. Player 1 to move.");
}


let currentDroppable = null;
draggable.onmousedown = function(event) {

let shiftX = event.clientX - draggable.getBoundingClientRect()
    .left;
let shiftY = event.clientY - draggable.getBoundingClientRect()
    .top;

    draggable.style.position = 'absolute';
    draggable.style.zIndex = 1000;
    document.body.append(draggable);
    moveAt(event.pageX, event.pageY);

function moveAt(pageX, pageY) {
    draggable.style.left = pageX - shiftX + 'px';
    draggable.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    draggable.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    draggable.hidden = false;
    if(!elemBelow) return;
          let droppableBelow = elemBelow.closest('.droppable');
          if(currentDroppable != droppableBelow) {
            if(currentDroppable) { // null when we were not over a droppable before this event
              leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if(currentDroppable) { // null if we're not coming over a droppable now
              // (maybe just left the droppable)
              enterDroppable(currentDroppable);
            }
          }
        }
        document.addEventListener('mousemove', onMouseMove);
        draggable.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          draggable.onmouseup = null;
        };
};
      
function enterDroppable(elem) {
    elem.style.background = 'pink';
}
      
function leaveDroppable(elem) {
    elem.style.background = '';
}
      
draggable.ondragstart = function() {
    return false;
};