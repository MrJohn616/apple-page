type CardVWProps = {
  tittle: string;
  p: string;
  src: string;
  className?: string;
};

function CardVW({ tittle, p, src, className }: CardVWProps) {
  return (
    <>
      <div
        className={`cardvw__wrapper ${className}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <h2 className="cardvw--tittle">{tittle}</h2>
        <p className="cardvw--p">{p}</p>
        <div className="cardvw__wrapper--btn">
          <button className="cardvw--btn">Más información</button>
          <button className="cardvw--btn">Comprar</button>
        </div>
      </div>
    </>
  );
}
export default CardVW;
