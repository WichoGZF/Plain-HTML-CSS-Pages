//Restyles the left aside depending on window size.
function restyleAsideLeft(mql) {
    if (mql.matches) {
        //If minor to :
        asideLeft.innerHTML = `<div id="aside-left-container">
            <menu id="aside-left-options-menu">
                <il>
                    <button id="aside-left-icon">
                        <img id="aside-left-options-menu-entry-icon" src="./media/twitter.svg">
                    </button>
                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al1.svg">
                    </button>
                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al2.svg">
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al3.svg">
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al4.svg">
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al5.svg">
                    </button>

                </il>

                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al6.svg">
                    </button>

                </il>
                <il id="aside-left-options-menu-button">
                    <img id=aside-left-options-menu-entry-publish-icon src="./media/postIcon.svg">
                </il>
            </menu>
            <div id="aside-left-user">
                <img id="aside-left-user-icon" src="./media/Circle.svg">
            </div>
        </div>`
    }
    else {
        asideLeft.innerHTML = `<div id="aside-left-container">
            <menu id="aside-left-options-menu">
                <il>
                    <button id="aside-left-icon">
                        <img id="aside-left-options-menu-entry-icon" src="./media/twitter.svg">
                    </button>
                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al1.svg">
                        <h3 id="aside-left-options-menu-entry-name">Home</h3>
                    </button>
                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al2.svg">
                        <p id="aside-left-options-menu-entry-name">Explore</p>
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al3.svg">
                        <p id="aside-left-options-menu-entry-name">Notifications</p>
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al4.svg">
                        <p id="aside-left-options-menu-entry-name">Messages</p>
                    </button>

                </il>
                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al5.svg">
                        <p id="aside-left-options-menu-entry-name">Profile</p>
                    </button>

                </il>

                <il id="aside-left-options-menu-entry">
                    <button type="button" id="aside-left-options-menu-entry-button">
                        <img id="aside-left-options-menu-entry-icon" src="./media/al6.svg">
                        <p id="aside-left-options-menu-entry-name">More</p>
                    </button>

                </il>
                <il id="aside-left-options-menu-button">
                    <p>Tweet</p>
                </il>
            </menu>
            <div id="aside-left-user">
                <img id="aside-left-user-icon" src="./media/Circle.svg">
                <b id="aside-left-user-bold">Username</b>
                <p id="aside-left-user-subtext">@Username</p>
                <img id="aside-left-user-three-icon" src="./media/three_dots.svg">
            </div>
        </div>`

    }
}
//Restyles the right aside depending on window size.
function restyleAsideRight(mql) {
    if (mql.matches) {
        asideRight.innerHTML = `<div></div>`
    }
    else {
        asideRight.innerHTML = `
        <section class="aside-right-container">
            <h3 id="aside-right-container-title">What's happening</h3>
            <div id="aside-right-container-content">
                <p class="right-sidebar-undertext">New 1 - 31 minutes ago</p>
                <h4 id="aside-right-container-content-title">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.</h4>
                <img id="aside-right-container-content-square" src="./media/smollcat.jpg">
            </div>
            <div id="aside-right-container-content">
                <p class="right-sidebar-undertext">Trending in the moon</p>
                <h4 id="aside-right-container-content-title">Some new trend</h4>
                <p class="right-sidebar-undertext-two">999 Tweets</p>
                <img id="right-sidebar-dot-icon" src="./media/three_dots.svg">
            </div>
            <div id="aside-right-container-content">
                <p class="right-sidebar-undertext">Gaming · Trending</p>
                <h4 id="aside-right-container-content-title">Some new trend</h4>
                <p class="right-sidebar-undertext-two">Trending with X</p>
                <img id="right-sidebar-dot-icon" src="./media/three_dots.svg">
            </div>
            <div id="aside-right-container-content">
                <p class="right-sidebar-undertext">Some new trend </p>
                <h4 id="aside-right-container-content-title">Latest update on some new trend</h4>
                <img id="aside-right-container-content-square" src="./media/smollcat2.jpg">
            </div>

            <div id="aside-right-container-showmore">
                <a class="blue-text aref" href="">Show more</a>
            </div>
        </section>
        <section class="aside-right-container">
            <h4 id="aside-right-container-title">
                Who to follow
            </h4>
            <div id="aside-right-container-user">
                <img id="aside-right-container-user-icon" src="./media/Circle.svg">
                <h4 id="aside-right-container-user-name">Username</h4>
                <p class="gray-text" id="aside-right-container-user-adress">@Username</p>
                <button id="aside-right-container-user-follow">Follow</button>
            </div>
            <div id="aside-right-container-user">
                <img id="aside-right-container-user-icon" src="./media/Circle.svg">
                <h4 id="aside-right-container-user-name">Username</h4>
                <p class="gray-text" id="aside-right-container-user-adress">@Username</p>
                <button id="aside-right-container-user-follow">Follow</button>
            </div>
            <div id="aside-right-container-user">
                <img id="aside-right-container-user-icon" src="./media/Circle.svg">
                <h4 id="aside-right-container-user-name">Username</h4>
                <p class="gray-text" id="aside-right-container-user-adress">@Username</p>
                <button id="aside-right-container-user-follow">Follow</button>
            </div>
            <div id="aside-right-container-showmore">
                <a class="blue-text aref" href="">Show more</a>
            </div>
        </section>
        <footer id="aside-right-footer">
            <div id="aside-right-footer-links">
                <a class="gray-text subaref" href="">Terms of service</a>
                <a class="gray-text subaref" href="">Privacy policy</a>
                <a class="gray-text subaref" href="">Cookie policy</a>
                <a class="gray-text subaref" href="">Accessibility</a>
                <a class="gray-text subaref" href="">Ads info</a>
                <a class="gray-text subaref" href="">More...</a>
            </div>
            <p>© 2022 Twitter, Inc.</p>
        </footer>`
    }
}
const asideRight = document.getElementById('aside-right');
const asideLeft = document.getElementById('aside-left');

let mqla = [
    window.matchMedia("(max-width:700px)"),
    window.matchMedia("(max-width:1300px)"),
]
//Left aside changes on 1100px. 
mqla[0].addEventListener('change', restyleAsideRight);
mqla[1].addEventListener('change', restyleAsideLeft);

restyleAsideRight(mqla[0]);
restyleAsideLeft(mqla[1]);