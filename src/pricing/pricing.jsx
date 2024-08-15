import WomanShooting from "../assets/pricing/desktop/hero.jpg";
import "./pricing.css";
import pricingPlan from "./pricing-plan.jsx";
import pricing from "../pricing.json";
import {useState} from "react";
import PricingPlan from "./pricing-plan.jsx";

export default function Pricing() {
    const [plans, setPlans] = useState(pricing);
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

            <section className="price-list">
                <div className="price-changer">
                    <h3 className="monthly">Monthly</h3>
                    <label className="switch round" htmlFor="switch-mode">
                        <input id="switch-mode" placeholder="" type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <h3 className="yearly">Yearly</h3>
                </div>
                <div className="prices">
                    {plans.map((plan, index) => (
                        <PricingPlan key={index} price={plan.price} title={plan.title} description={plan.description} />
                    ))}
                </div>

            </section>
        </main>
    )
}