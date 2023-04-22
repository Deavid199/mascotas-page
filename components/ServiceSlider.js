import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import Service1Icon from '../public/img/services/service-icon1.svg'
import Service2Icon from '../public/img/services/service-icon2.svg'
import Service3Icon from '../public/img/services/service-icon3.svg'

const services = [
  {
    id: 11,
    image: Service1Icon,
    name: 'Farmacia',
    description: 'Proporcionamos una amplia variedad de medicamentos y tratamientos para prevenir y curar enfermedades, y también ofrecemos consejos expertos y recomendaciones para el cuidado de nuestros amigos peludos.',
    btnText: 'Explorar',
  },
  {
    id: 23,
    image: Service2Icon,
    name: 'Cortes de pelo específicos en cada raza',
    description: '¿Quieres que tu perro luzca como un verdadero campeón? Ofrecemos cortes de pelo específicos de la raza para resaltar su belleza natural. ¡Agenda hoy mismo!',
    btnText: 'Explorar',
  },
  {
    id: 34,
    image: Service3Icon,
    name: 'Atuendos',
    description: 'Viste a tu mascota con estilo y comodidad con nuestra ropa para mascotas de alta calidad. Descubre nuestra amplia selección de diseños únicos y funcionales para cada ocasión.',
    btnText: 'Explorar',
  },
]
const ServiceSlider = () => {
  return (
    <Swiper slidesPerView={1} spaceBetween={30} navigation={true} modules={[Navigation]} breakpoints={{
      768: {
        slidesPerView: 2
      },
    }} className="serviceSlider min-h-[680px]">
      {services.map((service, index) => {
        return (
          <SwiperSlide className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8" key={`item${service.id}-${index}`}>
            <Image className="mb-9" src={service.image} alt={service.name} />
            <div className="text-[26px] font-medium mb-4">{service.name}</div>
            <div className="text-[20px] mb-8">{service.description}</div>
            <button className="btn btn-primary">{service.btnText}</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

export default ServiceSlider