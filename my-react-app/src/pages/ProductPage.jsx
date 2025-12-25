import { Link, useLocation, useParams } from "react-router-dom";

export default function ProductPage() {
    const { state } = useLocation();

    const { title, description, image, price,id,sale,type, rarity, rearityClass } = state || {};

    return (
        <div className="product">
            <div className="container">
                <div className="product--body">
                    <div className="product--body-main">
                        <div className={`main--wrap ${rearityClass}`}>
                            <img src={image} alt="" />
                        </div>
                        <div className="main--information">
                            <div className="main--information-tags">
                                <span className={`base-text ${rearityClass}`}>{rarity}</span>
                                {sale && (
                                    <span className="sale--tag">-{sale}%</span>
                                )}
                            </div>
                            <div className="main-inforamtion-product">
                                <h1 className="bold-text">{title}</h1>
                                <p className="base-text">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
