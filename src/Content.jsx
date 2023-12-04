import Image from "./Image"

export default function Content(props) {
    const isFlipped = props.isFlipped;

    return (
        <>
            <div id={props.sectionName} className={`flex flex-row m-14 items-center justify-center align-middle ${isFlipped ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 mr-2">
                    <Image
                        PictureSrc={props.PictureSrc}
                        bordersAndSize={props.bordersAndSize}
                        circle1Size={props.circle1Size}
                        circle1Colour={props.circle1Colour}
                        circle1Position={props.circle1Position}
                        circle2Size={props.circle2Size}
                        circle2Colour={props.circle2Colour}
                        circle2Position={props.circle2Position}
                    />
                </div>
                <div className={`font-poppins flex-grow flex flex-col justify-center items-center ${isFlipped ? 'ml-0 mr-40' : 'ml-40 mr-0'}`}>
                    <h1 className="text-3xl mb-2 text-cyan-500 self-start">{props.Title}</h1>
                    <p>{props.Content}</p>
                </div>
            </div >
        </>

    )
}