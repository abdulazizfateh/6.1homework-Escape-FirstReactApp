import "./Stay.css";
import Footer from "../footer/Footer";

const Stay = () => {
    return (
        <section className="section_stay">
            <div className="container">
                <div className="stay_wrapper">
                    <div className="stay_title">
                        <h2 className="stay_title">Stay in Touch</h2>
                    </div>
                    <form className="stay_form" action="">
                        <input className="stay_form_email_input" type="text" placeholder="Enter your email address" />
                        <button className="stay_form_submit_btn">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Stay;