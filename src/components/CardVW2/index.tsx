type CardVW2Props = {
  tittle: string;
  p: string;
  p2: string;
  src: string;
  className?: string;
};

function CardVW2({ tittle, p, p2, src, className }: CardVW2Props) {
  return (
    <>
      <div
        className={`cardvw__wrapper ${className}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <h2 className="cardvw--tittle">{tittle}</h2>
        <p className="cardvw--p">{p}</p>
        <p className="cardvw--p">{p2}</p>
        <div className="cardvw__wrapper--btn">
          <button className="cardvw--btn">Más información</button>
          <button className="cardvw--btn">Comprar</button>
        </div>
      </div>
    </>
  );
}
export default CardVW2;
