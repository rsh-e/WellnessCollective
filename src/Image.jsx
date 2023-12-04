export default function Image(props) {
    return (
        <>
            <div className="relative">
                <div className={`absolute rounded-full z-0 ${props.circle1Size} ${props.circle1Colour} ${props.circle1Position}`}></div>
                <img src={props.PictureSrc} alt="Image" className={`${props.bordersAndSize} z-10 relative`} />
                <div className={`absolute rounded-full z-0 ${props.circle2Size} ${props.circle2Colour} ${props.circle2Position}`}></div>
            </div >
        </>
    );
}
