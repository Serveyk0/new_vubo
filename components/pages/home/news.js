import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { items } from './constants';

export const News = ({ t }) =>
{
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
                                {
                                    <img alt={"1"} src={"./media/" + "black_logo" + ".png"} />
                                }
                            </div>
                                <div className="news_2">
                                    {
                                        <img alt={item[1].img} src={"./media/" + item[1].img + ".png"} />
                                    }
                                </div>
                                <div className="news_3">
                                    {
                                        <img alt={item[2].img} src={"./media/" + item[2].img + ".png"} />
                                    }
                                </div>
                                </div>
                            )
                }
            </Carousel>
    )
}