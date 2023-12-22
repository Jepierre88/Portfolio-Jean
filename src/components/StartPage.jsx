import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const StartPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_mail, message } = form.current.elements;

    console.log({ user_name, user_mail, message });

    emailjs
      .sendForm(
        "portfolio_jepierre_mail",
        "portfolio_template",
        form.current,
        "TNFn8XLtIsaQnrZJT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="flex flex-col gap-12 justify-center">
      <section className="flex flex-col sm:flex-row items-center gap-5">
        <span className="my-picture rounded-full h-40 mr-7 "></span>
        <section>
          <h1 className="my-name text-white font-bold text-2xl sm:text-4xl">
            Jean Ortiz
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl font-semibold">
            Soy un estudiante apasionado por el{" "}
            <span className="text-sky-400">desarrollo web</span>
          </p>
          <div className="flex flex-row w-full justify-end gap-3 px-3 mt-5">
            <Link
              className="linkedIn h-8 duration-300"
              to="https://www.linkedin.com/in/jean-ortiz-60460427a/"
              target="_blank"
            ></Link>
            <Link
              className="gitHub h-7 duration-300"
              to="https://github.com/Jepierre88"
              target="_blank"
            ></Link>
          </div>
        </section>
      </section>

      <section className="tecnologias w-full flex flex-col justify-center gap-8 md:justify-between md:flex-row items-center">
        <a
          className="cv flex justify-center items-center mx-14 text-l bg-slate-600 font-semibold text-white px-6 py-2 rounded-md hover:scale-105 md:w-max md:mx-0 md:text-2xl duration-200"
          href="https://drive.google.com/uc?export=download&id=1GcJjzTAykVyCYoN2tyByqUKLGrJUmZxd"
        >
          Descargar CV
        </a>
        <div className="flex flex-row justify-center gap-2">
          <span className="html h-8"></span>
          <span className="css h-8"></span>
          <span className="javascript h-8"></span>
          <span className="react h-8"></span>
          <span className="tailwind h-8"></span>
          <span className="node h-8"></span>
          <span className="mongo h-8"></span>
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="historia w-full">
        <header className="flex items-center sm:justify-start justify-center font-bold text-2xl text-gray-100 gap-1">
          <h1>Mi historia</h1>
          <div className="icon-history"></div>
        </header>

        <div className="w-full font-semibold text-slate-100 px-7 text-start">
          Desde pequeño siempre tuve un interés muy grande por la{" "}
          <span className="text-sky-500">tecnología</span> a tal punto que
          siempre trataba de averiguar como funcionaban las cosas en los
          aparatos electrónicos como el computador, trataba de llevarlos a su
          limite para ver de que eran capaces, pero poco a poco me fui
          interesando en crear{" "}
          <span className="text-fuchsia-500">aplicaciones</span> para los
          dispositivos y al salir del colegio me dediqué a aprender un poco por
          las <span className="text-sky-500">aplicaciones móviles</span> y
          llegué a crear varias que lastimosamente terminé perdiendo. Postorior{" "}
          a ello, en la universidad empecé a cursar una materia llamada
          <span className="text-fuchsia-500">
            {" "}
            Desarrollo de aplicaciones web
          </span>{" "}
          y me envolvió demasiado este tema, pues desde entonces no he hecho mas
          que intentar aprender sobre las tecnologías, frameworks y lenguajes
          utilizados para crear este tipo de aplicaciones
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="estudios w-full">
        <header className="flex items-center font-bold text-2xl w-full justify-center sm:justify-start text-gray-100 gap-1">
          <h1>Estudios</h1>
          <div className="icon-tool"></div>
        </header>
        <div className="flex flex-col gap-10 py-6 px-6">
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group items-center w-full">
            <span className="itm w-1/3 justify-self-center md:justify-self-start"></span>
            <section className="flex flex-col w-full justify-self-center md:justify-self-start gap-2">
              <h1 className="text-l text-center sm:text-2xl font-bold text-white md:text-start">
                Instituto Tecnológico Metropolitano
              </h1>
              <h2 className="text-l text-center sm:text-xl font-semibold text-fuchsia-400 md:text-start">
                Tecnología en Desarrollo de Software
              </h2>
              <p className="font-semibold text-sky-300 text-center md:text-start">
                Enero 2022 - Enero 2025
              </p>
            </section>
          </article>

          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group w-full items-center">
            <span className="colegio w-1/3 justify-self-center md:justify-self-start"></span>
            <section className="flex flex-col w-full justify-self-center md:justify-self-start gap-2">
              <h1 className="text-l text-center sm:text-2xl font-bold text-white md:text-start">
                Institución educativa José Félix de Restrepo Vélez
              </h1>
              <h2 className="text-l text-center sm:text-xl font-semibold text-white md:text-start">
                <span className="text-fuchsia-400">Bachiller</span>
              </h2>
              <p className="font-semibold text-sky-300 text-center md:text-start">
                2010 - 2021
              </p>
            </section>
          </article>
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="contacto w-full">
        <header className="flex items-center font-bold text-2xl w-full justify-center sm:justify-start text-gray-100 gap-1 mb-7">
          <h1>Contáctame</h1>
          <div className="icon-contact"></div>
        </header>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols gap-6 justify-center md:justify-start px-7 w-min"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            className="focus:border-sky-400 duration-100 h-8 rounded-md px-6 "
          />
          <input
            type="email"
            name="user_mail"
            placeholder="Correo"
            className="focus:border-sky-400 duration-100 h-8 rounded-md px-6"
          />
          <textarea
            type="text"
            name="message"
            placeholder="Mensaje"
            className="focus:border-sky-400 duration-100 h-16 rounded-md px-6 overflow-y-auto resize-none"
          />
          <button
            type="submit"
            className="bg-sky-500 rounded-lg w-1/3 duration-200"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};

export default StartPage;
