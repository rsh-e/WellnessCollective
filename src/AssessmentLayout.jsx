
export default function AssessmentLayout(props) {
    return (
        <>
            <div className="font-poppins flex flex-col items-center border-r-2 border-black mb-3">
                <div className={`w-[70px] h-[70px] rounded-full mb-4 flex items-center justify-center ${props.colour}`}> <p className="text-xl">{props.number}</p> </div>
                <p className="justify-center align-middle text-center px-4">{props.content}</p>
            </div >
        </>
    )
}