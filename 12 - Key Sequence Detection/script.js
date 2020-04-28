const pressed = [];
const secretCode = 'ricardo';


window.addEventListener('keyup', (e) => {
    pressed.push(e.key).pressed;
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }
});