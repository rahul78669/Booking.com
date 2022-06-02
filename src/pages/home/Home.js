import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import "./home.css";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <MailList />
            </div>
        </>
    );
};
export default Home;
