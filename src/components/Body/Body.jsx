import './Body.css'
import Sky from "./img/Sky.jpg";
import scuba from "./img/Scuba.jpg";
import bungee from "./img/Bungee.jpg";

export default function Body() {
    const products = [
        {
            title: "Scuba Diving in Grande island ,Goa",
            image: scuba,
            time: "8 hour",
            address: "Goa ,India",
            facilities: ["Snacks", "Transport", "Photo/videos", "Activities"],
            tags: ["Long tail boat ride", "Under water photo and video"],
            rating: 4.7,
            reviews: 36,
            price: 17000,
        },
        {
            title: "Bungee Jumping in Goa",
            time: "30 min",
            image: bungee,
            address: "Goa ,India",
            facilities: ["Photo/videos", "Activities"],
            tags: ["61 meter height", "Jump photo and video"],
            rating: 4.7,
            reviews: 36,
            price: 2800,
        },
    ];
    return <section className="card-sec">
        <div className="card-wrapper">
            <div
                className="card1"
                style={{
                    backgroundImage: `url(${Sky})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <span className="title">Sky Diving</span>
            </div>
            <div className="card2">
                {
                    products.map(product => {
                        return <div className="row1" key={product.title}>
                            <div className="img-container">
                                <img src={product.image} alt="card1" className="img-fluid" />
                            </div>
                            <div className="card-container">
                                <div className="card-title">
                                    <h1>{product.title}</h1>
                                </div>

                                <div className="location">
                                    <span className="loby">
                                        <i className="ri-timer-2-line"></i>
                                        <span>{product.time}</span>
                                    </span>
                                    <span className="loby">
                                        <i className="ri-map-pin-fill"></i>
                                        <span>{product.address}</span>
                                    </span>
                                </div>
                                <hr />

                                <div className="feature">
                                    <div className="facilities">
                                        {
                                            product.facilities.map(facilitie => {
                                                return <div className="blob" key={facilitie}>
                                                    <i className="ri-restaurant-2-fill"></i>
                                                    <span>{facilitie}</span>
                                                </div>
                                            })
                                        }
                                    </div>

                                    <div className="btn-grp">
                                        {
                                            product.tags.map(tag => <button key={tag}>{tag}</button>)
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="card-rating">
                                <div className="rating">
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <span>{product.rating}</span>
                                </div>

                                <div className="review">{product.reviews} Reviews</div>

                                <div className="price-card">
                                    <h4>Starting From</h4>
                                    <h3>$ {product.price}</h3>
                                    <button className="btn">View Details</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </section>
}