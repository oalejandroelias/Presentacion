import img_contacto from "../../src/img/banner.jpg";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1z8w8f9', 'template_2xho7zt', form.current, {
      publicKey: 'nrJNONmU6BgikcYxi',
    })
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <div className="container mx-auto overflow-auto mt-16 z-10 font-manrope">
      <section className="text-gray-600 body-font relative">
        <div className="px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 rounded-lg overflow-hidden sm:mr-10  lg:flex items-end justify-start relative">
            <img
              className="hidden object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full lg:flex "
              src={img_contacto}
              alt=""
            />
          </div>

          <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/3 flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contacto
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-black dark:text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded bg-transparent border border-black dark:border-white focus:border-nqn-verde dark:focus:border-nqn-verde text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full  rounded bg-transparent border border-black dark:border-white focus:border-nqn-verde dark:focus:border-nqn-verde text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-black dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded bg-transparent border border-black dark:border-white focus:border-nqn-verde dark:focus:border-nqn-verde h-64 text-base outline-none text-black dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="font-bold text-white bg-nqn-azul border-0 py-2 px-6 focus:outline-none hover:bg-nqn-verde rounded text-lg">
              Enviar
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Su consulta será atendida lo antes posible.
            </p>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
