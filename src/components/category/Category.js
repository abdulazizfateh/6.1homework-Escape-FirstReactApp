import "./Category.css";

const Category = () => {
    return (
        <section className="section_category">
            <div className="container">
                <ul className="category_list">
                    <li className="category_item">Nature</li>
                    <li className="category_item">Photography</li>
                    <li className="category_item">Relaxation</li>
                    <li className="category_item">Vacation</li>
                    <li className="category_item">Travel</li>
                    <li className="category_item">Adventure</li>
                </ul>
            </div>
        </section>
    )
}
export default Category;