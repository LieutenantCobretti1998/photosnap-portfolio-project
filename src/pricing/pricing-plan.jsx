import {AnimatePresence, motion} from 'framer-motion';
const variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        }
    }
}

const contentVariants = {
    hiddenDown: {
        opacity: 0,
        y: -100,
        transition: {duration: 0.5},
    },
    hiddenTop: {
        opacity: 0,
        y: 100,
        transition: {duration: 0.5},
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5},
    }
}
const tableVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5},},
}
function PricingPlan({title, description, price, status, isYearly}) {
    return (
        <motion.div
            className={`pricing-plan ${status} ${title === 'Pro' ? 'pro' : ''}`}
            initial="hidden"
            variants={variants}
            animate="visible"
            transition={{duration: 0.2, ease: "easeIn"}}
            whileHover={{scale: 1.01, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"}}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={isYearly ? 'yearly' : 'monthly'}
                    variants={contentVariants}
                    initial={isYearly ? 'hiddenTop' : 'hiddenDown'}
                    animate="visible"
                    exit={isYearly ? 'hiddenDown' : 'hiddenTop'}
                >
                    <div className="title-descr">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="price-pr-mnth">
                        <h3>{price}</h3>
                        <p>{status}</p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <a href="#" type="button" className={`choose-btn ${title === 'Pro' ? 'white-btn' : ''}`}>PICK PLAN</a>
        </motion.div>
    );
}

export default PricingPlan;
