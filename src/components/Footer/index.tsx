type FooterItems = {
  tittle: string;
  items: Array<string>;
};

function Footer({ itemData }: { itemData: FooterItems[] }) {
  return (
    <div className="section--footer">
      <div className="footer__wrapper">
        <div className="footer__header">
          <p className="f__h--p1">
            * Los compradores que cumplan con los requisitos pueden recibir los
            beneficios de la promoción cuando compran un producto elegible con
            el producto de la promoción en una tienda participante. Únicamente
            un producto de la promoción por producto elegible por comprador que
            cumpla con los requisitos. Oferta sujeta a disponibilidad. Sujeto a
            los términos y condiciones indicados aquí.
          </p>
          <p className="f__h--p2">
            Apple TV+ requiere suscripción. Sujeto a restricciones y otros
            términos.
          </p>
        </div>
        <hr />
        <div className="footer__body">
          <div className="footer__b--wrapper">
            {/* Iterar */}
            {itemData.map((item, i) => (
              <div key={i} className={`footer__item--${i}`}>
                <h3 className="footer__b--title">{item.tittle}</h3>
                <ul>
                  {item.items.map((subItem, j) => (
                    <li key={j} className="footer__b--item">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__b--botton">
            <p>
              Más formas de comprar: Busca un Apple Store o un distribuidor
              cerca de ti. O llama al 001-800-692-7753.
            </p>
          </div>
          <hr />
        </div>

        <div className="footer__bottom">
          <div>
            <p>Copyright © 2024 Apple Inc. Todos los derechos reservados.</p>
          </div>
          <ul>
            <li className="after">Política de privacidad</li>
            <li className="after">Ventas y reembolsos</li>
            <li className="after">Aviso legal</li>
            <li>Mapa del sitio</li>
          </ul>
          <div>
            <p>México</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
