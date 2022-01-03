import { AiFillCloseCircle } from 'react-icons/ai';

export default function Card({ min, max, name, img, onClose, temp, id }) {
  return (
    <article className="animate__animated animate__fadeIn shadow-lg w-full h-96 bg-slate-200 my-4 rounded-md flex flex-col justify-center items-center p-4 transition-shadow duration-500 ease-in-out md:w-5/12 lg:w-3/12 hover:shadow-xl">
      <button
        onClick={onClose}
        className="text-red-400 text-3xl m-2 transition-colors duration-500 ease-in-out ml-auto hover:text-red-600"
      >
        <AiFillCloseCircle />
      </button>

      <img
        src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
        width="133"
        height="133"
        alt={name}
      />

      <h1 className="text-2xl">{name}</h1>
      <span className="text-5xl my-4">{temp}&deg;</span>

      <p className="text-2xl font-light">
        {min}&deg; / {max}&deg;
      </p>
    </article>
  );
}
