import { Link } from "react-router-dom";

const ProductsPage = () =>
{
    return( 
        //  This would be considered more of what you'd see from a products page
    <section>
        <h1>The Products Page!</h1>
        <ul>
            {/* Relative example would be for each product to be specific
            and have its own specific product details changed path in App.js.
            Change thse to <Link> to new page; no need for <navlink></navlink> though */}
            <li><Link to="/products/A-Book">A Book</Link></li>
            <li><Link to="/products/A-Carpet">A Carpet</Link></li>
            <li><Link to="/products/A-Toothbrush">A toothbrush</Link></li>
        </ul>
    </section>
    );
};

export default ProductsPage;