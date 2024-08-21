
function PricingPlan({title, description, price, status}) {
    return (
        <div className={`pricing-plan ${status} ${title === 'Pro' ? 'pro' : ''}`}>
            <div className="title-descr">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="price-pr-mnth">
                <h3>{price}</h3>
                <p>{status}</p>
            </div>

            <a href="#" type="button" className="choose-btn">PICK PLAN</a>
        </div>
    );
}

export default PricingPlan;