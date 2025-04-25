"use client";

import { useEffect, useState } from "react";
import { list } from "./data";

const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(sliderId);
  }, [currentPerson]);

  return (
    <>
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-2 mt-15">
        اساتید برتر SE1A
      </h2>

      <section className="relative w-[90vw] max-w-[800px] h-[450px] mx-auto mt-20 overflow-hidden ">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article
              key={id}
              className="absolute top-0 left-0 w-full h-full text-center transition-all duration-500 overflow-hidden"
              style={{
                transform: `translateX(${
                  100 * (personIndex - currentPerson)
                }%)`,
                opacity: personIndex === currentPerson ? 1 : 0,
              }}
            >
              <img
                src={image}
                alt={name}
                className="w-[150px] h-[150px] rounded-full mb-4 object-cover border-4 border-primary-200 shadow-lg mx-auto"
              />
              <h5 className="uppercase text-gray-500 mb-3">{name}</h5>
              <p className="capitalize text-neutral-700 mb-3">{title}</p>
              <p className="max-w-[35rem] lg:max-w-[45rem] mx-auto mt-8 leading-8 text-gray-500">
                {quote}
              </p>
              <span className="text-4xl text-primary-500 mt-4 inline-block">
                {">>"}
              </span>
            </article>
          );
        })}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-gray-500 text-white w-5 h-5 md:w-8 md:h-8 md:text-xl grid place-items-center rounded-lg transition hover:bg-primary-500"
        >
          {"<<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-500 text-white w-5 h-5 md:w-8 md:h-8 md:text-xl grid place-items-center rounded-lg transition hover:bg-primary-500"
        >
          {">>"}
        </button>
      </section>
    </>
  );
};

export default SlickCarousel;
