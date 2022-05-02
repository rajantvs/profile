const themes = {
    dark: {
        '--b_color': 'var(--colorb1)',
        '--nav_color': 'var(--colornb1)',
        '--t_color': 'var(--colort1)',
        '--s_color1': 'var(--color_1)',
        '--s_color2': 'var(--color_3)',
        '--opt1': 0,
        '--opt2': 1,
    },
    light: {
        '--b_color': 'var(--colorb2)',
        '--nav_color': 'var(--colornb2)',
        '--t_color': 'var(--colort2)',
        '--s_color1': 'var(--color_3)',
        '--s_color2': 'var(--color_1)',
        '--opt1': 1,
        '--opt2': 0,
    },
}

const inputs = document.getElementById('change')

inputs.addEventListener('click', function () {
    if (inputs.checked) {
        var theme = themes[Object.keys(themes)[1]];
    }
    else {
        var theme = themes[Object.keys(themes)[0]];
    }
    activateTheme(theme);
});

function activateTheme(theme) {
    for (let prop in theme) {
        document.querySelector(':root').style.setProperty(prop, theme[prop]);
    }
}
function isday() {
    const hours = new Date().getHours();
    return hours > 6 && hours < 18
    // return 1
}

if (isday()) {
    var theme = themes[Object.keys(themes)[1]];
    inputs.checked = true;
    activateTheme(theme);
}
else {
    var theme = themes[Object.keys(themes)[0]];
    inputs.checked = false;
    activateTheme(theme);
}

const menu = document.getElementById('mmenu')

menu.addEventListener('click', function () {
    if (menu.checked) {

        document.getElementById('navbar').style.visibility = "visible"
    }
    else {
        document.getElementById('navbar').style.visibility = "collapse"
    }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById('navbar').style.visibility = "visible"

    }
    else {
        document.getElementById('navbar').style.visibility = "collapse"
    }
}

var x = window.matchMedia("(min-width: 720px)")
myFunction(x)
x.addListener(myFunction) // Attach listener function on state changes