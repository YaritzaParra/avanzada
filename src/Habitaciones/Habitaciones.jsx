import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Habitaciones.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export  function Habitaciones(){
  return (
    <>
    <br /><br /><br />
    <h2>Nuestras Habitaciones</h2>
    <br /><br /><br />
    <br /><br /><br />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/habitacion2.jpg?alt=media&token=04d2ec59-4b6d-46f3-9511-19884334ee72" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/habitacion3.jpg?alt=media&token=e4b306ff-fde8-47c1-84f2-bd2c9d7bd960" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/habitacion4.jpg?alt=media&token=3cddc474-7b85-4b21-883f-030ba1d083c6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/habitacion5.jpg?alt=media&token=7319e139-33cb-45a5-a421-27f3e5152e31" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/habitacion6.jpg?alt=media&token=f2463efa-a08f-4ddd-b73e-ea985becb0d9" />
        </SwiperSlide>
      </Swiper>

      <div className="row">
        <div className="Hab col-12 col-md-6">
          
      <p>En Resort MOUSE Orlando te ofrecemos una experiencia diferente en cada una de nuestras espaciosas suites con temáticas increibles para disfrutar con tu familia y pareja, estas cuentan con una capacidad de hasta 6 personas. Todas nuestras suites cuentan con una asombrosa vista a los tres parques temáticos.</p>
        </div>
      </div>

<br /><br /><br /><br /><br /><br />

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/Habitacion7.jpg?alt=media&token=d9f4a816-5905-49bf-91ac-400a08e46c5d" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/Habitacion8.jpg?alt=media&token=be72a6fa-a641-457f-a1ef-e9fee9d1cfa9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/Habitacion9.jpg?alt=media&token=0cd2ab5d-008b-4182-84ca-041bfd9f488c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/Habitacion10.jpg?alt=media&token=b0d2ca48-c6e5-4a8f-86a4-472bdea69535" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/Habitacion11.jpg?alt=media&token=7fe236a0-043d-4026-acba-374647068aeb" />
        </SwiperSlide>
      </Swiper>

    </>
  );
}
