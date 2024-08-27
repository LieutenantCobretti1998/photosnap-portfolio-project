

function ResponsiveImage({ alt, defaultSrc, smallSrc, mediumSrc }) {
    return (
        <div className="image-box">
            <picture>
                <source srcSet={smallSrc} media="(max-width: 600px)" />
                <source media="(max-width: 1200px)" srcSet={mediumSrc} />
                <img src={defaultSrc} alt={alt} />
            </picture>
        </div>
    );
}

export default ResponsiveImage;