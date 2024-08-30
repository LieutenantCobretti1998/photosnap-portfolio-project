import {useLocation, useOutletContext} from "react-router-dom";
import "./story.css"
import Footer from "../footer/footer.jsx";
import {useEffect} from "react";

function Story() {
    const story = useOutletContext();
    const location = useLocation(); // Hook to get the current location
    console.log(location);
    const sentences = story.story.match(/[^.!?]+[.!?]+/g);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 5) {
        paragraphs.push(sentences.slice(i, i + 5).join(' '));
    }

    useEffect(() => {
        const imageContainer = document.querySelector('.image-container img');

        // Force image reload by appending a timestamp to the URL
        // Set the image source
        imageContainer.src = `${story.background_img}?t=${new Date().getTime()}`;

        // Cleanup the image source when the component unmounts or when the route changes
        return () => {
            imageContainer.src = '';  // Correctly clear the image src attribute
        };
    }, [location, story.background_img]);  // Re-run this effect when the location or background image changes

    return (
        <main>
            <section className="background-image">
                <div className="image-container">
                    <img alt={story.alt}/>
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