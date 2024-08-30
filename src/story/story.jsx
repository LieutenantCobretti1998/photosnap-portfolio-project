import {useLocation, useOutletContext} from "react-router-dom";
import "./story.css"
import Footer from "../footer/footer.jsx";
import {useEffect} from "react";
function Story() {
    const story = useOutletContext();
    const location = useLocation();  // Hook to get the current location
    const sentences = story.story.match(/[^.!?]+[.!?]+/g);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 5) {
        paragraphs.push(sentences.slice(i, i + 5).join(' '));
    }

    useEffect(() => {
        // Set up the background image when the component mounts
        const imageContainer = document.querySelector('.background-image .image-container');

        // Cleanup the background image when the component unmounts
        return () => {
            imageContainer.style.backgroundImage = '';
        };
    }, [location]); // Re-run this effect if the background image changes

    return (
        <main>
            <section className="background-image">
                <div className="image-container">
                    <img src={story.background_img}
                         alt={story.alt}
                    />
                </div>
                <div className="story-container">
                    <h2>
                        {story.title}
                    </h2>
                    <h3>
                        {story.author}
                    </h3>
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Story;