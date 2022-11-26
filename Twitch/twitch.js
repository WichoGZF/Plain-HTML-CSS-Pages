function restyleNav(event) { 
    console.log(event);
    if(event.matches){
        console.log('menor')
        navbar.innerHTML = `<img id="nav-menu-icon" src="./svg/video-icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    <img id="nav-menu-icon" src="./svg/person_icon.svg">
                    `
}
    else{
        console.log('mayor')
        navbar.innerHTML = `<div id="nav-header">
        <p id="nav-header-text">RECOMMENDED CHANNELS </p>
        <button class="icon-button">
            <img class="header-icon" src="./svg/close-icon.svg">
        </button>

    </div>
    <menu id="nav-menu">
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
        <li>
            <img id="nav-menu-icon" src="./svg/person_icon.svg">
            <h4 id="nav-menu-streamer">Streamer</h3>
            <p id="nav-menu-game">Game</p>
            <div id="nav-menu-viewers-div">
                <div id="nav-menu-viewers-icon"></div>
                <p>99.9K</p>
            </div>
        </li>
    </menu>    `
    }
}

const navbar = document.getElementById('nav-bar');

let sizeLessEqual1200 = window.matchMedia("(max-width: 1200px)")

sizeLessEqual1200.addEventListener('change', restyleNav); 

restyleNav(sizeLessEqual1200);




