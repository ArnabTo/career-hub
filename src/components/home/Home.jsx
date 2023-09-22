import FeaturedJob from "../featuredJobs/FeaturedJob";
import Hero from "./Hero";
const Home = () => {

    return (
        <div>
            <Hero></Hero>
            <div className=" max-w-6xl m-auto">
            <FeaturedJob></FeaturedJob></div>
        </div>
    );
};

export default Home;