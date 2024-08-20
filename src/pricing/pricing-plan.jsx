
function PricingPlan({title, description, price, status}) {
    return (
        <div className={`pricing-plan ${status}`}>
            <div className="title-descr">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="price-pr-mnth">
                <h3>{price}</h3>
                <p>{status}</p>
            </div>
            <div className="pricing">

            <div className="choose-btn">
                <a href="#" type="button" className="choose-btn">PICK PLAN</a>
            </div>
            </div>
        </div>
    );
}

export default PricingPlan;