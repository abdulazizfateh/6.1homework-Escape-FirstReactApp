import "./Hero.css";

const Header = () => {
  return (
    <main className="site_main">
      <section className="section_hero">
        <div className="container">
          <div className="hero_wrapper">
            <h1 className="hero_title">Let's do it together.</h1>
            <p className="hero_subtitle">We travel the world in search of stories. Come along for the ride.</p>
            <button className="hero_btn">View Latest Posts</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Header;