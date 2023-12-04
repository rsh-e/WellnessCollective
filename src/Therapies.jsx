import Title from "./Title"
import Content from "./Content"
import ImagePlaceholder from './assets/ImagePlaceholder.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export default function Therapies() {

    const content1 = "Occupational therapy helps people with disabilities or illnesses function better by using physical, psychological and recreational activities to help them recover and improve their quality of life. Occupational Therapy can help children and adults with motor skills, balance, and self-control. Children with developmental disabilities can learn to adapt to new tasks and be more independent in everyday activities. They can help them achieve their goals by teaching them how to perform activities more efficiently and effectively."
    const content2 = "Sensory Integration therapy (or SI interventions) include structured exposure to sensory input, movement therapy, balance treatments, carefully designed and customised physical activities and accommodations(eg, changes to the environment or routine). Sensory Integration Assessment, like all OT Assessment, should consist of the accumulation of information from a range of sources as well as clinical observations, typically a range of alternative tools / methods might be used."
    const content3 = "Physiotherapy is a process that deals with the Treatment, Prevention, and Rehabilitation of people who are physically injured or disabled. Physiotherapy uses physical activity to treat human diseases. A physiotherapist, also known as a physical therapist, assists patients in managing pain, balance, mobility, and motor function."
    const content4 = "A psychologist is a mental health professional who uses psychological evaluations and talk therapy to help people learn to better cope with life and relationship issues and mental health conditions. Psychologists seek to understand and explain thoughts, emotions, feelings, and behaviour. They use techniques such as observation, assessment, and experimentation to develop theories about the beliefs and feelings that influence individuals."
    const content5 = "Speech and language therapist provides treatment, support and care for children and adults who have difficulties with communication, or with eating, drinking, and swallowing. They will help people who, for physical or psychological reasons, have problems speaking and communicating."
    const content6 = "Dieticians assess the nutritional needs of individuals, families or groups, create treatment plans to improve nutrition and overall health, give practical and sensitive dietary advice, tailored to people’s needs, monitor people’s progress towards healthy eating targets."

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <div id="therapies" data-aos="fade-up">
                <Title Heading="Our Therapies" />
                <div data-aos="fade-up">
                    <Content
                        sectionName='si'
                        Title="Occupational Therapy"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content1}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-yellow-300"
                        circle1Position="bottom-[80px] right-[-50px]"
                        isFlipped={true}
                    />
                </div>
                <div data-aos="fade-up">
                    <Content
                        sectionName='physio'
                        Title="Sensory Integration Therapy"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content2}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-emerald-300"
                        circle1Position="top-[80px] left-[-50px]"
                        isFlipped={false}
                    />
                </div>
                <div data-aos="fade-up">
                    <Content
                        sectionName='psycho'
                        Title="Physiotherapy"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content3}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-yellow-300"
                        circle1Position="top-[80px] right-[-50px]"
                        isFlipped={true}
                    />
                </div>
                <div data-aos="fade-up">
                    <Content
                        sectionName='snl'
                        Title="Psychology"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content4}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-emerald-300"
                        circle1Position="bottom-[80px] left-[-50px]"
                        isFlipped={false}
                    />
                </div>
                <div data-aos="fade-up">
                    <Content
                        sectionName='diet'
                        Title="Speech and Language Therapy"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content5}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-yellow-300"
                        circle1Position="top-[90px] left-[-80px]"
                        isFlipped={true}
                    />
                </div>
                <div data-aos="fade-up">
                    <Content
                        sectionName='diet'
                        Title="Dietetics"
                        PictureSrc={ImagePlaceholder}
                        bordersAndSize="rounded-md w-[400px] h-[220px]"
                        Content={content6}

                        circle1Size="w-[200px] h-[200px]"
                        circle1Colour="bg-emerald-300"
                        circle1Position="bottom-[90px] right-[-80px]"
                        isFlipped={false}
                    />
                </div>
            </div >
        </>
    )
}