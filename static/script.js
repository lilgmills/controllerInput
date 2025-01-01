window.addEventListener("gamepadconnected", (e) => {
    const gp = navigator.getGamepads()[e.gamepad.index];
    console.log(
        `Gamepad connected at index ${gp.index}: ${gp.id} with ${gp.buttons.length} buttons, ${gp.axes.length} axes.`,
    );
    console.log(navigator.getGamepads())    
    });

function updateGamepadState() {
    const gamepads = navigator.getGamepads();

    for (const gamepad of gamepads) {
        if (gamepad) {
        // Access button states
            for (let i = 0; i < gamepad.buttons.length; i++) {
                if (i == 4) {
                    if (gamepad.buttons[i].pressed) {
                        console.log("button 5 pressed");
                        document.getElementById('LB').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('LB').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('LB').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('LB').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i == 5) {
                    if (gamepad.buttons[i].pressed) {
                        console.log("button 5 pressed");
                        document.getElementById('RB').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('RB').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('RB').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('RB').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i==12) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('up').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('up').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('up').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('up').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i==13) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('down').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('down').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('down').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('down').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i==14) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('left').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('left').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('left').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('left').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i==15) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('right').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('right').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('right').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('right').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                    
                }
                else if (i == 3) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('Y').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('Y').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('Y').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('Y').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                }
                else if (i == 1) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('B').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('B').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('B').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('B').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                }
                else if (i == 0) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('A').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('A').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('A').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('A').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                }
                else if (i == 2) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('X').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('X').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('X').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('X').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }
                }
                else if (i == 8) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('view').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('view').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('view').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('view').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }

                }
                else if (i == 9) {
                    if (gamepad.buttons[i].pressed) {
                        document.getElementById('menu').querySelector('svg').querySelector('path').style.fill = 'red'
                        document.getElementById('menu').querySelector('svg').querySelector('path').style.stroke = 'red'
                    }
                    else {
                        document.getElementById('menu').querySelector('svg').querySelector('path').style.fill = 'black'
                        document.getElementById('menu').querySelector('svg').querySelector('path').style.stroke = 'black'
                    }

                }
                
                
            }

            // Access axes values
            for (let i = 0; i < gamepad.axes.length; i++) {
                // console.log(`Axis ${i}: ${gamepad.axes[i]}`);

                lAxis = document.querySelector('.L-axis')
                rAxis = document.querySelector('.R-axis')

                
                lAxis.style.transform = `translate(${6*gamepad.axes[0] +"px"}, ${6*gamepad.axes[1]+"px"} ) rotate3d(0,1,0,${30*gamepad.axes[0]}deg) rotate3d(-1,0,0,${30*gamepad.axes[1]}deg)`;
                rAxis.style.transform = `translate(${6*gamepad.axes[2] +"px"}, ${6*gamepad.axes[3]+"px"} ) rotate3d(0,1,0,${30*gamepad.axes[2]}deg) rotate3d(-1,0,0,${30*gamepad.axes[3]}deg)`;

                if (gamepad.axes[0]**2 + gamepad.axes[1]**2 > .09) {
                    lAxis.querySelector('svg').querySelector('path').style.fill = 'red'
                    lAxis.querySelector('svg').querySelector('path').style.stroke = 'red'
                }
                else {
                    lAxis.querySelector('svg').querySelector('path').style.fill = 'black'
                    lAxis.querySelector('svg').querySelector('path').style.stroke = 'black'
                }
                if (gamepad.axes[2]**2 + gamepad.axes[3]**2 > .09) {
                    rAxis.querySelector('svg').querySelector('path').style.fill = 'red'
                    rAxis.querySelector('svg').querySelector('path').style.stroke = 'red'
                }
                else {
                    rAxis.querySelector('svg').querySelector('path').style.fill = 'black'
                    rAxis.querySelector('svg').querySelector('path').style.stroke = 'black'
                }
                
                
            }
        }
    }

    requestAnimationFrame(updateGamepadState);
}

updateGamepadState();

                
            