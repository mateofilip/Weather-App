import { AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';

export default function Card({ min, max, name, img, onClose, temp, id }) {
  return (
    <article className="animate__animated animate__fadeIn shadow-lg w-full bg-white my-4 rounded-md flex flex-col justify-center items-center p-4 transition-all duration-500 ease-in-out max-w-xs hover:scale-105 hover:shadow-xl">
      <button
        onClick={onClose}
        className="text-red-400 text-3xl m-2 transition-colors duration-500 ease-in-out ml-auto hover:text-red-600"
      >
        <AiFillCloseCircle />
      </button>

      <div className="bg-gray-900 rounded-full grid place-items-center shadow-lg shadow-gray-300 m-4">
        <Image
          src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
          width="100"
          height="100"
          alt={name}
        />
      </div>

      <h1 className="text-2xl m-4">{name}</h1>

      <span className="text-5xl">{temp}&deg;C</span>

      <p className="text-2xl font-light m-4">
        {min}&deg;C / {max}&deg;C
      </p>
    </article>
  );
}
