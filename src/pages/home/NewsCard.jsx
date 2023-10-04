import { Link } from "react-router-dom";


const NewsCard = ({ singleNews }) => {

    const { title,image_url,details,_id } = singleNews;

    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure>
                    <img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                        {
                        details.length>200? 
                        <p>{details.slice(0,200)} 
                        <Link to={`/news/${_id}`} className="text-blue-600">Read more...</Link></p>
                        :
                        details
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
