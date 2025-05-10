import "./Recent.css";

import CardImage1 from "../../assets/images/recent-1.png";
import CardImage2 from "../../assets/images/recent-2.png";
import CardImage3 from "../../assets/images/recent-3.png";
import CardImage4 from "../../assets/images/recent-4.png";
import CardImage5 from "../../assets/images/recent-5.png";
import CardImage6 from "../../assets/images/recent-6.png";
import AvatarImage1 from "../../assets/images/avatar-1.png";
import AvatarImage2 from "../../assets/images/avatar-2.png";

const Recent = () => {
    return (
        <section className="section_recent">
            <div className="container">
                <div className="recent_wrapper featured_wrapper">
                    <div className="recent_title featured_title">
                        <h2>Most Recent</h2>
                    </div>
                    <div className="recent_cards">
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage1} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Still Standing Tall</p>
                                    <p className="recent_card_desc">Life begins at the end of your comfort zone.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage1} alt="Avatar" />
                                        <span className="recent_card_date">William Wong</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage2} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Sunny Side Up</p>
                                    <p className="recent_card_desc">No place is ever as bad as they tell you it’s going to be.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage2} alt="Avatar" />
                                        <span className="recent_card_date">Mat Vogels</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage3} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Water Falls</p>
                                    <p className="recent_card_desc">We travel not to escape life, but for life not to escape us.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage2} alt="Avatar" />
                                        <span className="recent_card_date">Mat Vogels</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage4} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Through the Mist</p>
                                    <p className="recent_card_desc">Travel makes you see what a tiny place you occupy in the world.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage1} alt="Avatar" />
                                        <span className="recent_card_date">William Wong</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage5} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Awaken Early</p>
                                    <p className="recent_card_desc">Not all those who wander are lost.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage2} alt="Avatar" />
                                        <span className="recent_card_date">Mat Vogels</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent_card">
                            <div className="recent_card_image">
                                <img src={CardImage6} alt="" />
                            </div>
                            <div className="recent_card_body">
                                <div className="recent_card_top">
                                    <p className="recent_card_title">Try it Always</p>
                                    <p className="recent_card_desc">The world is a book, and those who do not travel read only one page.</p>
                                </div>
                                <div className="recent_card_bottom">
                                    <div className="recent_card_avatar">
                                        <img src={AvatarImage2} alt="Avatar" />
                                        <span className="recent_card_date">Mat Vogels</span>
                                    </div>
                                    <p className="recent_card_date">9/25/2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recent;