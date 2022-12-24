import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./experience.components.scss";

const experiences = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Mercadolibre",
    startDate: "06/07/2020",
    endDate: "07/01/2021",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, hi celigendi error minus asperiores voluptas",
  },
  {
    id: 2,
    title: "Database Administrator",
    company: "Mercadolibre",
    startDate: "06/07/2020",
    endDate: "07/01/2021",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, hi celigendi error minus asperiores voluptas",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "Mercadolibre",
    startDate: "06/07/2020",
    endDate: "07/01/2021",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, hi celigendi error minus asperiores voluptas",
  },
];

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = (e) => {
    const nextIndex =
      activeIndex === experiences.length - 1 ? 0 : activeIndex + 1;
    e.preventDefault();
    setActiveIndex(nextIndex);
  };
  const previous = (e) => {
    const previousIndex =
      activeIndex === 0 ? experiences.length - 1 : activeIndex - 1;
    e.preventDefault();
    setActiveIndex(previousIndex);
  };
  useEffect(() => {
    const indicator = document.getElementsByClassName("list__item");
    for (const i of indicator) {
      i.id == activeIndex + 1
        ? i.classList.add("active")
        : i.classList.remove("active");
    }
    const experience = document.getElementsByClassName("experience__text");
    for (const i of experience) {
      i.id == `slide_${activeIndex + 1}`
        ? i.classList.add("selected")
        : i.classList.remove("selected");
    }
  }, [activeIndex]);

  return (
    <div className='content__experience'>
      <div className='experience__navigation'>
        <ol className='navigation__list'>
          {experiences.map((e) => (
            <li key={e.id} id={e.id} className='list__item'></li>
          ))}
        </ol>
      </div>
      <div className='carousel'>
        <div className='experiences'>
          {experiences.map((e) => (
            <div key={e.id} id={`slide_${e.id}`} className='experience__text'>
              <h3>{e.title}</h3>
              <p>
                <i>
                  {e.company} • {e.startDate} - {e.endDate}
                </i>
              </p>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.a
        href='#0'
        className='text__prev'
        onClick={previous}
        whileHover={{
          scale: [null, 1.5, 1.3],
        }}
        whileTap={{
          scale: [1.3, 0.8, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 52 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.8545 37.8181L32.1454 26.1721L19.8545 14.1819'
            stroke='#C2C1C2'
            stroke-width='4'
          />
          <path
            d='M-1.54171e-06 26C-2.86366e-07 11.6406 11.6406 2.86366e-07 26 1.5417e-06C40.3594 2.79704e-06 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 -2.79704e-06 40.3594 -1.54171e-06 26ZM48.2385 26C48.2385 13.718 38.282 3.7615 26 3.7615C13.718 3.7615 3.7615 13.718 3.7615 26C3.7615 38.282 13.718 48.2385 26 48.2385C38.282 48.2385 48.2385 38.282 48.2385 26Z'
            fill='#C2C1C2'
          />
        </svg>
      </motion.a>
      <motion.a
        href='#0'
        className='text__next'
        onClick={next}
        whileHover={{
          scale: [null, 1.5, 1.3],
        }}
        whileTap={{
          scale: [1.3, 0.8, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <svg
          width='30'
          height='30'
          viewBox='0 0 52 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19.8545 37.8181L32.1454 26.1721L19.8545 14.1819'
            stroke='#C2C1C2'
            stroke-width='4'
          />
          <path
            d='M-1.54171e-06 26C-2.86366e-07 11.6406 11.6406 2.86366e-07 26 1.5417e-06C40.3594 2.79704e-06 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 -2.79704e-06 40.3594 -1.54171e-06 26ZM48.2385 26C48.2385 13.718 38.282 3.7615 26 3.7615C13.718 3.7615 3.7615 13.718 3.7615 26C3.7615 38.282 13.718 48.2385 26 48.2385C38.282 48.2385 48.2385 38.282 48.2385 26Z'
            fill='#C2C1C2'
          />
        </svg>
      </motion.a>
    </div>
  );
}
