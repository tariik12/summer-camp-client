import { useLoaderData, useParams } from "react-router-dom";

const ShowExtraDataDetails = () => {
    const data = useLoaderData();
    const { name } = useParams();

    // Check if data is an array before using the find method
    const detailsFeaturedCard = Array.isArray(data) ? data.find(product => product.name === name) : null;

    if (!detailsFeaturedCard) {
        // Handle the case when the item is not found or data is not an array
        return (
            <div className="mx-10">
                <p>Item not found or data is empty.</p>
            </div>
        );
    }

    const { image, description } = detailsFeaturedCard;
    console.log(data);

    return (
        <div className="mx-10">
            <img className="mx-auto" src={image} alt="" />
            <h3 className="mt-4 text-center text-2xl text-cyan-400">{name}</h3>
            <div>
                Description:
                <p className="my-3">{description}</p>
            </div>
        </div>
    );
};

export default ShowExtraDataDetails;
