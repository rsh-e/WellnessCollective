import Title from "./Title"
import Content from "./Content"
import ImagePlaceholder from './assets/ImagePlaceholder.jpg'

export default function AboutUs() {

    const content = [
        {
            para: "We are a leading Therapy service provider in West Berkshire. With a team of experienced practitioners specializing all area of physical and Mental health, we offer evidence-based practice in and around the Newbury area."
        },
        {
            para: "Our specialization lies in conducting Sensory assessments for children, young adults, and adults.These assessments are conducted with the assistance of parents, carers, teachers, and support staff.Our primary goal is to deliver premium professional services of world- class standards.Our comprehensive assessment and treatment plans are designed to assist individuals in leading normal lives within the community."
        }
    ]
    const contentMapped = content.map((paragraph, index) => <p key={index}>{paragraph.para}</p>)

    return (
        <>
            <div id="aboutUs" className="mb-36">
                <Title Heading="About Us" />
                <Content
                    PictureSrc={ImagePlaceholder}
                    bordersAndSize="rounded-md w-[357px] h-[435px]"
                    circle1Size="w-[200px] h-[200px]"
                    circle1Colour="bg-emerald-300"
                    circle1Position="bottom-[300px] right-[200px]"
                    circle2Size="w-[400px] h-[400px]"
                    circle2Colour="bg-yellow-300"
                    circle2Position="bottom-[-100px] right-[-100px]"
                    Content={contentMapped}
                />
            </div>
        </>
    )

}