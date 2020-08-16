import Swiper from "react-id-swiper";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    allBanners {
      id
      file {
        publicUrl
      }
    }
  }
`;
export const HeroSliderOne = ({ heroSliders: sliderData }) => {
  console.log(sliderData);
  const params = {
    loop: true,
    speed: 1000,
    spaceBetween: 200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav"></button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav"></button>
    ),
  };

  return sliderData ? (
    <div className="hero-slider-one space-mb--r100">
      <Container>
        <div className="hero-slider-one__wrapper">
          <Swiper {...params}>
            {sliderData.map((slider) => {
              return (
                <div
                  className="hero-slider-one__slide swiper-slide"
                  key={slider.id}
                >
                  <div className="slider-image">
                    <img
                      src={process.env.adminUrl + slider.file.publicUrl}
                      className="img-fluid"
                      alt={slider.file.publicUrl}
                    />
                  </div>
                  <div className="slider-content">
                    <h2 className="color-title color-title--blue space-mb--20">
                      slider.subtitle
                    </h2>
                    <h1
                      className="main-title space-mb--30"
                      dangerouslySetInnerHTML={{ __html: slider.title }}
                    />
                    <Link
                      href={"slider.url"}
                      as={"process.env.PUBLIC_URL + slider.url"}
                    >
                      <a className="lezada-button lezada-button--medium">
                        shop now
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  ) : null;
};
