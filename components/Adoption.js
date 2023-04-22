import React from 'react';
import Image from 'next/image';
import Img1 from '../public/img/adoption/img1.png'

const Adoption = () => {
  return (
    <section className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        <div className="flex-1 mb-6 lg:mb-0">
          <Image src={Img1} alt="asd" />
        </div>
        <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
          <h2 className="h2 mb-6">Haciendo la crianza de mascotas fácil para todos</h2>
          <p className="mb-6">En nuestro servicio nos dedicamos a hacer que la crianza de mascotas sea fácil para todos. Ofrecemos recursos y herramientas para educar, entrenar y cuidar a tus mascotas, todo en un solo lugar. Simplifica tu vida y disfruta de la compañía de tus amigos peludos con nosotros.</p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc">
            <li>Adopción</li>
            <li>Crudo congelado</li>
            <li>Entrega al día siguiente</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Explorar</button>
        </div>
      </div>
    </section>
  )
}

export default Adoption