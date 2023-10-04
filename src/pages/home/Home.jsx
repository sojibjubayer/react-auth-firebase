import { useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-2xl font-poppins font-bold">This is home</h2>
            <div className="grid lg:grid-cols-4 gap-6">
                <div  className="border-2">
                    <LeftSideNav> </LeftSideNav>
                </div>
                <div className="col-span-2 border-2">
                   {
                    news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                   }
                </div>
                <div className="border-2">
                    <RightSideNav> </RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;