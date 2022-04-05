import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    // stores key value pairs and there can me multiple from the URL
        //  these come from the :productId in the App.js Route path - only one segment
    const params = useParams();

    // use path segment key word - can also output to JSX
    console.log(params.productId);

    return(
        <section>
            <h1>Product Detail</h1>
            <p>{params.productId}</p>
        </section>
    );
};

export default ProductDetail;