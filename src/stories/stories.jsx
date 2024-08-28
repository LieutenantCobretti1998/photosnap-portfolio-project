import "./stories.css";
import stories from "../works.json";
import {useEffect, useRef, useState} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import Footer from "../footer/footer.jsx";
import {Link, Outlet, useParams} from "react-router-dom";
import storyLoader from "../data_loading.js";
import MountainsImageSmall from "../assets/stories/mobile/moon-of-appalacia.jpg";
import MountainsImageMedium from "../assets/stories/tablet/moon-of-appalacia.jpg";
import ResponsiveImage from "../helpers/responsiveImage.jsx";

const imageVariants = {
    hidden: {
        opacity: 0,
        pointerEvents: "none",
        y: 50
    },
    visible: (index) => ({
        opacity: 1,
        pointerEvents: "auto",
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.1 * index,
            ease: "easeInOut",
        }
    })
}

const breakPoints = {
    "mobile": {
        "min": 330,
        "max": 600
    },
    "tablet": {
        "min": 600,
        "max": 1280
    },
}

export default function Stories() {
    const [storiesData, setStoriesData] = useState([]);
    const controls = useAnimation();
    const storiesContainer = useRef(null);
    const isInView = useInView(storiesContainer, {once:true, amount:"some"});
    const {story_id} = useParams();
    const [story, setStory] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setStoriesData(stories);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView, storiesData.length, story_id]);

    useEffect(() => {
        function fetchStory() {
            if (story_id) { // Ensure story_id is not undefined or null
                try {
                    const data = storyLoader(Number(story_id));
                    setStory(data);
                } catch (err) {
                    setError(err.message);
                    console.error(error)
                }
            } else {
                console.log("story_id is undefined or null");
            }
        }

        fetchStory();
    }, [story_id, error]);


    if(story_id && story) {
        return (
            <Outlet context={story} />
        )
    }

    return (
        <main>
            {
                window.innerWidth > breakPoints.mobile.min && window.innerWidth < breakPoints.mobile.max ? (
                    <motion.section
                        className="big-image"
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: .5, ease: "easeIn"}}
                    >
                        <ResponsiveImage alt="Man looking on the lake"
                                         smallSrc={MountainsImageSmall}
                                         mediumSrc={MountainsImageMedium}
                                         defaultSrc={MountainsImageMedium}
                        />
                        <div className="black-box">
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
                        </div>
                    </motion.section>
                ) : (
                    <motion.section
                        className="big-image"
                        initial={{y: -20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: .5, ease: "easeIn"}}
                    >
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
                    </motion.section>
                )
            }
            <motion.section id="works" ref={storiesContainer}>
                {storiesData.map((story) => (
                    <motion.div
                              key={story.id}
                              custom={story.id}
                              initial="hidden"
                              animate={controls}
                              variants={imageVariants}
                              whileHover={{
                                  translateY: -25,
                                  transition: {duration: 0.1, ease: "easeInOut",}
                              }}
                    >
                        <Link to={`/stories/${story.id}`}>

                        <div className="story-details">
                            <h3 className="story-details__place">{story.title}</h3>
                            <p className="story-details__name">{story.author}</p>
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
                        <motion.img srcSet={`
                                        ${story.imageSmall} 600w,
                                        ${story.image}
                                    `}
                                    sizes="
                                            (max-width: 600px) 100vw,
                                            (max-width: 1200px) 100vw,
                                        "
                                    className="stories-image"
                                    alt={story.alt}
                        />
                        </Link>
                    </motion.div>
                ))}
            </motion.section>
            <Footer />
        </main>
    )
}