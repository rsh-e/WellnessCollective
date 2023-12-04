
export default function Title(props) {
    return (
        <>
            <div className="max-w-screen-2xl mx-auto flex flex-row items-center justify-center mt-12 space-x-2">
                <div className="w-10 h-10 bg-teal-300 rounded-full" />
                <div className="w-[60px] h-[60px] bg-lime-300 rounded-full" />
                <div className="w-20 h-20 bg-yellow-300 rounded-full" />
                <h1 className="p-5 text-5xl pb-4 font-poppins text-cyan-500">{props.Heading}</h1>
                <div className="w-20 h-20 bg-yellow-300 rounded-full" />
                <div className="w-[60px] h-[60px] bg-lime-300 rounded-full" />
                <div className="w-10 h-10 bg-teal-300 rounded-full" />
            </div>


        </>
    )
}