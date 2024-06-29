type CardSProps = {
  tittle?: string;
  p: string;
  p2?: string;
  btn?: string;
  btn2?: string;
  src: string;
  src2?: string;
  className?: string;
};

function CardS({ tittle, p, p2, btn, btn2, src, src2, className }: CardSProps) {
  return (
    <div
      className={`cards__wrapper ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      {tittle ? (
        <h2
          className={`cards__tittle ${src2 ? "tittlebg" : null}`}
          style={{ backgroundImage: `url(${src2})` }}
        >
          {tittle}
        </h2>
      ) : null}
      <div className="cards__wrapper--p">
        <p className="cards__p">{p}</p>
        {p2 ? <p className="cards__p">{p2}</p> : null}
      </div>
      <div className="cards__wrapper--btn">
        <button className="cards__btn">{`${
          btn ? btn : "Más información"
        }`}</button>
        {btn2 ? <button className="cards__btn">{btn2}</button> : null}
      </div>
    </div>
  );
}
export default CardS;
