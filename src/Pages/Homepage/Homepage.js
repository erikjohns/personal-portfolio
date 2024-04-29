import "./Homepage.css";
import Header from "../../Components/Header/Header";

const Homepage = () => {
    return (
        <div className={"homepage-wrapper"}>
            <div className={"hero-wrapper"}>
                <div className={"hero-text-container"}>
                    <h2>HEY, I'M</h2>
                    <h1>ERIK JOHNS</h1>
                    <p>A Computer Science student at <em>Montana State University</em></p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;