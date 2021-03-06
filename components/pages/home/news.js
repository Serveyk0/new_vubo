import Carousel from 'react-multi-carousel';
import Link from 'next/link'
import "react-multi-carousel/lib/styles.css";
import { items } from './constants';

const path="../media/";

export const News = ({ t }) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 1981, min: 3840 },
            items: 2,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1980, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            arrows: true,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
            arrows: true
        }
    };

    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="transform 1300ms ease-in-out"
            transitionDuration={1500}
            customDots="custom-dots"
            arrows={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                items.map((item, index) =>
                    <div className="slider" key={index}>
                        <div className="news_1">
                            <img alt={item[0].href} src={path + item[0].href + ".jpg"} />
                            <h3 className="news_text text_color">{t(item[0].href)}</h3>
                            <p className="news_main_text">{t(item[0].href + "_text")}</p>
                            <Link href={item[0].href}><button className="slider_href_button">{t("more")}</button></Link>
                        </div>
                        <div className="news_2">
                            <img alt={item[1].href} src={path + item[1].href + ".jpg"} />
                            <h3 className="news_text text_color">{t(item[1].href)}</h3>
                            <Link href={item[1].href}><button className="slider_href_button">{t("more")}</button></Link>
                        </div>
                        <div className="news_3">
                            <img alt={item[2].href} src={path + item[2].href + ".jpg"} />
                            <h3 className="news_text text_color">{t(item[2].href)}</h3>
                            <Link href={item[2].href}><button className="slider_href_button">{t("more")}</button></Link>
                        </div>
                    </div>
                )
            }
        </Carousel>
    )
}