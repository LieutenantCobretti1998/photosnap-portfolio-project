import WomanShooting from "../assets/pricing/desktop/hero.jpg";
import "./pricing.css";
import pricing from "../pricing.json";
import {useState} from "react";
import PricingPlan from "./pricing-plan.jsx";

export default function Pricing() {
    const [plans, setPlans] = useState(pricing);
    console.log(plans)
    const [yearly, setYearly] = useState(false);
    const handleChange = () => {
        setYearly(!yearly);
    }
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
                    <h3 className={`monthly ${!yearly ? 'active' : ''}`}>Monthly</h3>
                    <label className="switch round" htmlFor="switch-mode">
                        <input onChange={handleChange} id="switch-mode" placeholder="" type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <h3 className={`yearly ${yearly ? 'active' : ''}`}>Yearly</h3>
                </div>
                <div className={`prices ${yearly ? 'yearly-active' : 'monthly-active'}`}>
                    {plans.map((plan, index) => (
                        <PricingPlan key={index}
                                     price={yearly ? plan.price_yearly : plan.price_monthly}
                                     title={plan.title}
                                     description={plan.description}
                                     status={yearly ? "per year" : "per month" }
                        />
                    ))}
                </div>
            </section>

            <section className="packages-section">
                <h2>Compare</h2>
                <table className="pricing-table">
                    <thead>
                    <tr>
                        <th>The Features</th>
                        <th>Basic</th>
                        <th>Pro</th>
                        <th>Business</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Unlimited Story Posting</td>
                        <td>✔</td>
                        <td>✔</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Unlimited Photo Upload</td>
                        <td>✔</td>
                        <td>✔</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Embedding Custom Content</td>
                        <td></td>
                        <td>✔</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Customize Metadata</td>
                        <td></td>
                        <td>✔</td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Advanced Metrics</td>
                        <td></td>
                        <td></td>
                        <td>✔</td>
                    </tr>
                    <tr>
                        <td>Photo Downloads</td>
                        <td></td>
                        <td></td>
                        <td>✔</td>
                    </tr>
                    </tbody>
                </table>

            </section>
        </main>
    )
}