window.onload = function () {
    let blockHTML = '<html><head><title>X_X [BLOCKED] X_X</title><meta charset="UTF-8"/></head><body>';
    blockHTML += '<style>html { display: flex; align-items: center; justify-content: center;';
    blockHTML += 'background-color: black; width:100vw; height: 100vh; text-align: center; } img { height: 250px }';
    blockHTML += 'h1 { color: rgb(255,50,50); font-family: Arial, sans-serif; font-size: 300%; } p { color: white; }';
    blockHTML += 'a { color: white } </style>';
    blockHTML += '<img src="https://cdn0.iconfinder.com/data/icons/universal-signs-symbols/128/stop-sign-hand-512.png">';
    blockHTML += '<h1>Internet has been blocked!</h1>';
    blockHTML += '<p>This in an example text of internet block script</p>';
    blockHTML += '<p>See more at <a href="https://github.com/diveloper53/InjectJS/">https://github.com/diveloper53/InjectJS/</a></p></body></html>';

    document.querySelector('html').innerHTML = blockHTML;
};