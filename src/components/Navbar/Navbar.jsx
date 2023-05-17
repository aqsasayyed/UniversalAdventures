import './Navbar.css'
import Banner from "./Banner.png";

export default function Navbar() {
    return <section
        className="hero"
        style={{
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: "no-repeat"
        }}>
        <h1 className="main-title">Universal Adventures</h1>
    </section>
}