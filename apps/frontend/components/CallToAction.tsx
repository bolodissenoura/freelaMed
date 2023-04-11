import SectionContent from '@components/Section/SectionContent'
import SubscribeForm from '@components/Forms/SubscribeForm'

const CallToAction = () => {

    return (
        <section className="cta-container  my-24">
            <div className="cta-content-container wrap wrap-px">
                <SectionContent 
                    title = "Faça parte do movimento"
                    alignment = "center"
                >
                    <p>Entre em nosso grupo seleto.</p>
                </SectionContent>
                <SubscribeForm
                    alignment = "center"
                />
            </div>
        </section>
    )
}

export default CallToAction