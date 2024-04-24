function CustomImage({ imgSrc, imgTitle }: { imgSrc: string, imgTitle: string }) {
    return <div className="img-card-container">
        <div className="img-container">
            <img src={`data:image/jpg;base64, ${imgSrc}`} alt={imgTitle} />
        </div>
        <div className="img-title-container">
            {imgTitle[0].toUpperCase() + imgTitle.toLowerCase().slice(1)}
        </div>
    </div>
}

export default CustomImage;