import Content from "./Content"
import Title from "./Title"
import ImagePlaceholder from './assets/ImagePlaceholder.jpg'

export default function PaediatricOT() {
    const content = [
        {
            para: "Our Occupational Therapists specialize in Paediatric Occupational Therapy which assesses and treats children with various conditions such as:"
        },
        //here
        {
            para: "- Autistic Spectrum Disorder (ASD)"
        },
        {
            para: "- Attention Deficit Hyperactive Disorder (ADHD)"
        },
        {
            para: "- Developmental Delays"
        },
        {
            para: "- Acquired Brain Injury"
        },
        //here
        {
            para: "We offer comprehensive assessment services for children facing these difficulties. Our detailed reports outline their occupational, sensory, and educational challenges, providing practical methods to enhance their functioning. Individualized therapy plans are collaboratively developed to address identified difficulties, aiding families, and therapists in improving the child's day-to-day life."
        }
    ]
    const listIndex = [0, 4]
    const contentMapped = content.map((paragraph, index) => <p key={index} className={listIndex.includes(index) ? 'mb-6' : ''}>{paragraph.para}</p>)

    return (
        <>
            <div id="paediatricOT">
                <Title Heading="Paediatric OT" />
                <Content
                    PictureSrc={ImagePlaceholder}
                    bordersAndSize="rounded-md w-[357px] h-[435px]"
                    circle1Size="w-[380px] h-[380px]"
                    circle1Colour="bg-emerald-300"
                    circle1Position="bottom-[110px] left-[80px]"
                    circle2Size="w-[200px] h-[200px]"
                    circle2Colour="bg-yellow-300"
                    circle2Position="bottom-[-50px] left-[-50px]"
                    Content={contentMapped} />
            </div >
        </>
    )
}