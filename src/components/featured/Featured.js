import "./Featured.css";
import FirstAvatar from "../../assets/images/avatar-1.png";
import SecondAvatar from "../../assets/images/avatar-2.png";

const Featured = () => {
    return (
        <section className="section_featured">
            <div className="container">
                <div className="featured_wrapper">
                    <div className="featured_title">
                        <h2>Featured Posts</h2>
                    </div>
                    <div className="featured_cards">
                        <div className="featured_card">
                            <p className="featured_card_title">The Road Ahead</p>
                            <p className="featured_card_desc">The road ahead might be paved - it might not be.</p>
                            <div className="featured_card_bottom">
                                <div className="featured_card_avatar">
                                    <img src={FirstAvatar} alt="Avatar" />
                                    <span>Mat Vogels</span>
                                </div>
                                <p className="featured_card_date">September 25, 2015</p>
                            </div>
                        </div>
                        <div className="featured_card">
                            <p className="featured_card_category">Adventure</p>
                            <p className="featured_card_title">From Top Down</p>
                            <p className="featured_card_desc">Once a year, go someplace you’ve never been before.</p>
                            <div className="featured_card_bottom">
                                <div className="featured_card_avatar">
                                    <img src={SecondAvatar} alt="Avatar" />
                                    <span>William Wong</span>
                                </div>
                                <p className="featured_card_date">September 25, 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Featured;