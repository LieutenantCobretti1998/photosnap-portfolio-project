import WomanShooting from "../assets/pricing/desktop/hero.jpg";

export default function Pricing() {
    return (
        <main>
            <section id="section-1">
                <div className="black-box">
                    <div className="features">
                        <h1 className="stories__title">Pricing</h1>
                        <span className="stories__text">
                                Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                                It’s the simple way to create and share your photos.
                            </span>
                    </div>
                </div>

                <div className="image-box">
                    <img src={WomanShooting} alt="woman is shooting"/>
                </div>
            </section>
        </main>
    )
}