import Title from "./Title"

export default function ContactUs() {
    return (
        <>
            <div id="contactUs" className="font-poppins xl:m-14">
                <Title Heading="Contact Us" />
                <p className="xl:mt-5">Currently, we perform home visits in and around the Newbury area, West Berksire.</p>
                <p className="xl:mt-6">To book an appointment or find out more information: </p>
                <div className="xl:mt-5">
                    <p>Call: 0791672823 / 07795571758</p>
                    <p>Email: xyz@gmail.com</p>
                </div>
            </div>
        </>
    )
}