import {useOutletContext} from "react-router-dom";
import "./story.css"
function Story() {
    const story = useOutletContext();

    const sentences = story.story.match(/[^.!?]+[.!?]+/g);
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 5) {
        paragraphs.push(sentences.slice(i, i + 5).join(' '));
    }

    return (
        <main>
            <section className="background-image">
                <div className="image-container">
                    <img src={story.background_img} alt={story.alt}/>
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
        </main>
    );
}

export default Story;