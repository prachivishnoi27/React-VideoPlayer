import React from "react";
import {ReactComponent as VideoImage} from '../media/img/video.svg';

function NavBar() {
    return (
        <div class="topnav">
            <a>
            <VideoImage />
            </a>
            <a>
                Video Player
            </a>
        </div>
    );
}

export default NavBar;
