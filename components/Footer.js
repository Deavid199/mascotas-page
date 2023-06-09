import React from 'react';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-footer flex-wrap bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center pt-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-1 text-orange text-4xl text-centerr lg:text-left flex items-center justify-center lg:justify-start mb-6">Pet First</div>
          <div className="text-white flex-1">
            <ul className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8">
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <div className="flex justify-center lg:justify-start gap-x-4">
              <div className="mb-6">Síguenos</div>
              <ul className="flex gap-x-4">
                <li><a href="#"><BsFacebook /></a></li>
                <li><a href="#"><BsInstagram /></a></li>
                <li><a href="#"><BsTwitter /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        <div className='w-full flex justify-center'>
          <a href='https://davideveloping.com' className='text-orange text-base' target="_blank" rel="noopener noreferrer">Copyright David Developing &copy; 2023</a>
        </div>
    </footer>
  )
}

export default Footer