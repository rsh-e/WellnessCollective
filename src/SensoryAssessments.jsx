import AssessmentLayout from "./AssessmentLayout"
import Title from "./Title"

export default function SensoryAssesments() {
    const content1 = "Prior to an appointment, a sensory assessment questionnaire is sent to be completed by the service user and their family or care staff."
    const content2 = "An experienced therapist conducts an interview and observes the individual and their environment."
    const content3 = "The therapist assesses the individual’s presentation and behaviours, forming the foundation for treatment recommendations."
    const content4 = "The questionnaire, interview, and observation aid in creating a report on the individual’s sensory processing abilities."
    return (
        <>
            <div id="sensoryAssessments" className="font-poppins">
                <Title Heading="Sensory Assessments" />
                <div className="pl-14 mt-5 pr-14">
                    <p>A sensory assessment aids parents, teachers, and clinicians in understanding individuals who struggle with processing sensory information in their environment. Symptoms may include heightened or reduced sensitivity to sound, touch, taste, light, or smells, along with challenges in coordination and spatial awareness. These difficulties can make socializing, engaging in conversations, playing, and other daily activities overwhelming.</p>
                    <p className="mt-5 mb-5">Our approach to sensory assessments:</p>
                    <div className="flex flex-row space-x-6">
                        <div className="border-l-2 border-black"><AssessmentLayout number="1" content={content1} colour="bg-yellow-200" /></div>
                        <AssessmentLayout number="2" content={content2} colour="bg-lime-300" />
                        <AssessmentLayout number="3" content={content3} colour="bg-teal-300" />
                        <AssessmentLayout number="4" content={content4} colour="bg-emerald-300" />
                    </div>
                </div>
            </div>
        </>
    )
}