import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Braeking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to='/'> 
                I can be a React component, multiple React components, or just some text.
                </Link>
                <Link className="mr-3" to='/'> 
                I can be a React component, multiple React components, or just some text.
                </Link>
                <Link  className="mr-5" to='/'> 
                I can be a React component, multiple React components, or just some text.
                </Link>
            </Marquee>
        </div>
    );
};
export default BreakingNews;