import Card from './Card';

export default function Cards({ cities, onClose }) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-8">
      {cities.map((city) => (
        <Card
          key={city.id}
          id={city.id}
          temp={city.temp}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}
        />
      ))}
    </div>
  );
}
