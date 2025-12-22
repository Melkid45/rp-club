import { Link, useLocation, useParams } from "react-router-dom";
import ActientButton from "../components/common/ActientButton";
import Article from "@/assets/images/article/article-back.png";
export default function ArticlePage() {
    const { state } = useLocation();

    const { title, description, date, event, image } = state || {};

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs--body base-text">
                        <Link to={"/news"}>Блог</Link>
                        <p>/</p>
                        <a href="">{event}</a>
                        <p>/</p>
                        <span>{title}</span>
                    </div>
                </div>
            </div>

            <section className='article'>
                <img className="article--back" src={Article} alt="" />
                <div className="container">
                    <div className="article--body">
                        <div className="article--body-head">
                            <div className="main--info">
                                <ActientButton className="event-link">
                                    {event}
                                </ActientButton>
                                <h1 className="bold-text">{title}</h1>
                            </div>
                            <div className="action--info">
                                <div className="action--info-top base-text">
                                    <p>{date}</p>
                                    <p>15,847 просмотров</p>
                                    <p>47 ответов</p>
                                </div>
                                <a href="" className="share base-text">
                                    Поделиться
                                </a>
                            </div>
                        </div>
                        <div className="article--body-frame">
                            <div className="frame--info">
                                <img src={image} alt="" />
                                <div className="frame--info-text base-text">
                                    {description}
                                </div>
                            </div>
                            <div className="line"></div>
                            <p className="base-text post">Вся информация, размещённая на сайте, носит исключительно ознакомительный характер и не является публичной офертой.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
