import "./pricing.css";
import pricing from "../json_files_dev/pricing.json";
import {useRef, useState} from "react";
import PricingPlan from "./pricing-plan.jsx";
import Footer from "../footer/footer.jsx";
import {useInView, motion} from "framer-motion";
import WomanShootingSmall from "../assets/pricing/mobile/hero.jpg";
import WomanShootingMedium from "../assets/pricing/tablet/hero.jpg";
import WomanShooting from "../assets/pricing/desktop/hero.jpg";
import ResponsiveImage from "../helpers/responsiveImage.jsx";

export default function Pricing() {
    const [plans, setPlans] = useState(pricing);
    const tableRef = useRef(null);
    const isInView = useInView(tableRef, {once:true, amount:"all"})
    const [yearly, setYearly] = useState(false);
    const handleChange = () => {
        setYearly(!yearly);
    };

    return (
        <main className="main-container">
            <motion.section
                id="section-1"
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .5, ease: "easeIn"}}
            >
                <div className="black-box">
                    <div className="features">
                        <h1 className="stories__title">Pricing</h1>
                        <span className="stories__text">
                                Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                                It’s the simple way to create and share your photos.
                            </span>
                    </div>
                </div>

                <ResponsiveImage alt="Man looking on the lake"
                                 smallSrc={WomanShootingSmall}
                                 mediumSrc={WomanShootingMedium}
                                 defaultSrc={WomanShooting}
                />
            </motion.section>

            <section  className="price-list">
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
                                     status={yearly ? "per year" : "per month"}
                                     isYearly={yearly}
                        />
                    ))}
                </div>
            </section>
            <section  className="packages-section">
                <h2>Compare</h2>

            </section>
            <motion.table
                ref={tableRef}
                className="pricing-table"
                initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below its final position
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to full opacity and its final position when in view
                transition={{ duration: 0.6, ease: "easeOut" }} // Adjust transition timing as needed
            >
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
            </motion.table>
            <Footer />
        </main>
    )
}