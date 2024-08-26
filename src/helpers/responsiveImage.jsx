

function ResponsiveImage({ alt, defaultSrc, smallSrc, mediumSrc, largeSrc }) {
    return (
        <div className="image-box">
            <picture>
                <source srcSet={smallSrc} media="(max-width: 500px)" />
                <source media="(max-width: 1199px)" srcSet={mediumSrc} />
                <img src={defaultSrc} alt={alt} />
            </picture>
        </div>
    );
}

export default ResponsiveImage;