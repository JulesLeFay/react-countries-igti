import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossível exibir país.</div>;
  }

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }

  const demographicDensity = (country.population / country.area).toFixed(2);
  const { flag, name, capital, region, population, area } = country;

  const isVisitedClassName = isVisited ? 'bg-green-200' : '';

  return (
    <div
      className={`${isVisitedClassName} cursor-pointer border p-2 m-2 flex  flex-row items-center space-x-2`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade Demográfica:">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
