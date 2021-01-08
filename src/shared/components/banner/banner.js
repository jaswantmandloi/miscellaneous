//import styles from './header.module.scss'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./banner.module.scss";

const settings = {
  accessibility: true,
  focusOnSelect: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div key={item}>
              <div>
                <img name={item} src={`/${item}.jpg`} alt={item} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
