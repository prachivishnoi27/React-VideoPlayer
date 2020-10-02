import React, { useEffect, useState } from "react";
import _ from "lodash";
import VideoPlayer from "./video";
import {ReactComponent as GithubImage} from '../media/img/github-logo.svg';
import {ReactComponent as LinkedinImage} from '../media/img/linkedin-logo.svg';
    // const linkedinImage = require(`../media/img/linkedin-logo.svg`);

const videoList = [
    {
        id: 1,
        imageSource: "media/img/1.png",
        link: "media/1.mp4",
        description: "Aapki Nazron ne Samjha | Sanam Puri",
    },
    {
        id: 2,
        imageSource: "media/img/02.png",
        link: "media/2.mp4",
        description: "Bheegi Bheegi Raaton Mein | Sanam Puri",
    },
    {
        id: 3,
        imageSource: "media/img/03.png",
        link: "media/3.mp4",
        description: "Hum Bewafa Hargiz Na The | Sanam Puri",
    },
    {
        id: 4,
        imageSource: "media/img/04.png",
        link: "media/4.mp4",
        description: "Likhe Jo Khat Tujhe | Sanam Puri",
    },
    {
        id: 5,
        imageSource: "media/img/05.png",
        link: "media/5.mp4",
        description: "Main Rahoon ya na rahoon | Armaan Malik",
    },
    {
        id: 6,
        imageSource: "media/img/06.png",
        link: "media/6.mp4",
        description: "Neele Neele Ambar Par | Sanam Puri",
    },
    {
        id: 7,
        imageSource: "media/img/07.png",
        link: "media/7.mp4",
        description: "Tere Bina Zindagi Se | Sanam Puri",
    },
    {
        id: 8,
        imageSource: "media/img/08.png",
        link: "media/8.mp4",
        description: "Tujhse Naraz Nahi Zindagi | Sanam Puri",
    },
];

const VideoList = () => {
    const [isPlaying, setPlaying] = useState(null);
    const [renderList, setListToRender] = useState([]);

    useEffect(() => {
        setListToRender(videoList);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            let list = videoList;
            list = _.filter(list, (l) => {
                // (l.imageSource !== isPlaying.imageSource)
                // console.log("Lis === ", l.imageSource, isPlaying.imageSource)
                return l.link !== isPlaying.link;
            });
            console.log("List ==== ", list, videoList);
            setListToRender(list);
        } else {
            setListToRender(videoList);
        }
    }, [isPlaying]);

    const link = isPlaying ? require(`../media/${isPlaying.id}.mp4`) : null;
    const content = isPlaying ? isPlaying.description : null;

    return (
        <div>
            <div className="grid-container">
            {isPlaying && (
                <div className="col">
                    {/* <h2> */}
                    <video controls autoPlay src={link} />
                    {/* </h2> */}
                    <div>
                        <p>DESCRIPTION</p>
                        <p>{content}</p>
                    </div>
                </div>
            )}
            {/* {isPlaying ? '' : ''} */}
            <div className={isPlaying ? "vertical-main" : "main"}>
                <div className="list-div">
                {renderList.map((video) => {
                    return (
                        <VideoPlayer setPlaying={setPlaying} video={video} />
                    );
                })}
                </div>
            </div>
            </div>
            <div class="bottom">
                <div class="about-us" align="left">
                    <h1>About Us</h1>
                    <p>Sociosqu id suscipit sagittis habitasse nulla lacinia quisque ultrices. Lectus justo mattis inceptos torquent massa metus posuere parturient potenti augue. Eros facilisi dis, nunc taciti volutpat morbi posuere morbi tristique gravida non? Arcu purus condimentum, dictum odio facilisi nisi nisi scelerisque nunc! Non scelerisque curabitur tincidunt, scelerisque hac ultrices felis dolor sollicitudin. Placerat mus senectus per in dictum vulputate lacinia, himenaeos litora maecenas. Laoreet dapibus turpis suspendisse primis litora. Dictum hendrerit natoque sem class mollis tortor pretium vestibulum etiam faucibus. Mi sociis hendrerit.</p>
                </div>
                <div class="lower">
                    <a>
                        <GithubImage />
                    </a>
                    <a >
                        <LinkedinImage />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoList;
