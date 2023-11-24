
import './Home.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

import { Menu } from "../Menu/Menu";



export function Home(){
    return(
        <> 
        <div className="banner">
        <Menu/>
            <div className="row">
                <div className="home col-12 col-md-4jmn">
                    <h2>¡Reserva con Nosotros!</h2>

                    <p>Este hotel de suites se encuentra en Lake Buena Vista, a 1,6 km de Walt Disney World y Disney Springs. Ofrece desayuno buffet caliente y conexión a internet de alta velocidad, ambos gratuitos.</p>
                
                </div>
            </div>

        </div>

        <div className="row">
            
        <div className="col-12 col-md-6">
                <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/logo.png?alt=media&token=ab3204d0-0d2d-4144-80f0-5abe3d1e1c63" alt="" className="Img"/>
            </div>

            <div className="col-12 col-md-6" id='Servicios'>
                <br />
                <h2 className="top"><b>Servicios más populares</b></h2>

                <i className="servicios fa-solid fa-water"> Piscina al aire libre</i> 
                <i className="servicios fa-solid fa-mug-hot"> Desayunos</i>
                <i className="servicios fa-solid fa-wifi"> Wifi gratis</i>
                <i className="servicios fa-solid fa-utensils"> Restaurantes</i>
                <i className="servicios fa-solid fa-dumbbell"> Gimnasio</i>
                <i className="servicios fa-solid fa-square-parking"> Parking gratis</i>
                <i className="servicios fa-solid fa-martini-glass-empty"> Bar</i>

            </div>

            <div className="col-12 col-md-6">
             
                <p className='top2'>Resort MOUSE alberga una piscina al aire libre con zona de juegos infantil y bañera de hidromasaje, un centro de fitness y una zona de restauración con helados, pizzas y emparedados.
                    <br />

                Las suites del Lake Buena Vista SpringHill Suites son amplias y disponen de mininevera, microondas, TV por cable y zona de estar independiente.</p>
            </div>

            <div className="col-12 col-md-6">
            <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque1.jpg?alt=media&token=3f9d84dc-2063-4759-9fb8-5151ef4c89fb" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque2.jpg?alt=media&token=0c5c49e5-ed7b-446c-bcd6-7fb653dad8aa" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque3.jpg?alt=media&token=9c41ddb1-119e-4bbd-8500-abee6776a84c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque4.webp?alt=media&token=5a6e8c13-dd9e-41df-a3e5-aa501cf6866d" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque5.jpg?alt=media&token=7a100321-c43b-4408-b1a2-bae7ebbedb5e" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://firebasestorage.googleapis.com/v0/b/disney-22809.appspot.com/o/parque6.jpg?alt=media&token=218b51ca-5fe0-4b3c-af6d-1cc0d3d3913c" />
        </SwiperSlide>
      </Swiper>
      
            </div>

        </div>


        <div className="map col">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d112332.5865602625!2d-81.71493555664064!3d28.377185700000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdisney%20orlando%20parques!5e0!3m2!1ses!2sco!4v1700790080581!5m2!1ses!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}