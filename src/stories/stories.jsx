import "./stories.css";
import stories from "../works.json";
import {useEffect, useState} from "react";
export default function Stories() {
    const [storiesData, setStoriesData] = useState([]);

    useEffect(() => {
        setStoriesData(stories)
    }, []);
    return (
        <main>
            <section className="big-image">
                <div className="overview">
                    <p className="overview__featured">
                        <b>Last month's featured story</b>
                    </p>
                    <h1 className="overview__name">
                        Hazy full moon of Appalachia
                    </h1>
                    <p className="overview__time">March 2nd 2020 by John Appleseed</p>
                    <span className="overview__story">
                        The dissected plateau area, while not actually made up of geological mountains,
                        is popularly called "mountains", especially in eastern Kentucky and West Virginia,
                        and while the ridges are not high, the terrain is extremely rugged.
                    </span>
                    <div className="invite read-story-1">
                        <button type="button" className="invite-button">Read the Story</button>
                        <svg className="invite-button__arrow" xmlns="http://www.w3.org/2000/svg"
                             width="43"
                             height="14">
                            <g fill="none" fillRule="evenodd" stroke="#000">
                                <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </section>
            <section id="works">
                {storiesData.map((story) => (
                    <a href="#" key={story.id}>
                        <div className="story-details">
                            <h3 className="story-details__place">{story.title}</h3>
                            <p className="story-details__name">{story.title}</p>
                            <div className="line"></div>
                            <div className="invite read-story">
                                <button type="button" className="invite-button">Read the Story</button>
                                <svg className="invite-button__arrow" xmlns="http://www.w3.org/2000/svg"
                                     width="43"
                                     height="14">
                                    <g fill="none" fillRule="evenodd" stroke="#000">
                                        <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <img src={story.image} alt="Mountains"/>
                    </a>
                ))}
            </section>
        </main>
    )
}