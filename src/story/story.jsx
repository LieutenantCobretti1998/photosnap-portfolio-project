import {useOutletContext} from "react-router-dom";
import "./story.css"
import Footer from "../footer/footer.jsx";
import {useState} from "react";
function Story() {
    const story = useOutletContext();
    const [imageLoaded, setImageLoaded] = useState(false);
    const sentences = story.story.match(/[^.!?]+[.!?]+/g);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 5) {
        paragraphs.push(sentences.slice(i, i + 5).join(' '));
    }
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <main>
            <section className="background-image">
                <div className="image-container">
                    <img src={story.background_img}
                         alt={story.alt}
                         onLoad={handleImageLoad}
                         style={{ display: imageLoaded ? "block" : "none" }}
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