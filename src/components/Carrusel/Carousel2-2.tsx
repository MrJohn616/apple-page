import { useState } from "react";

type CarouselItem = {
  id: number;
  url: string;
};

function Carousel({ itemsData }: { itemsData: CarouselItem[] }) {
  const [items, setItems] = useState(itemsData);
  const [isAnimating, setIsAnimating] = useState(false);

  const defaultInitialPositions: Record<number, number> = {
    0: -180.5,
    1: -79.5,
    2: 21.5,
    3: 122.5,
    4: 223.5,
    5: 324.5,
    6: 425.5,
    7: 526.5,
    8: 627.5,
    9: 728.5,
  };
  const initialPositions: Record<number, number> = itemsData.reduce(
    (acc, item) => {
      acc[item.id] = defaultInitialPositions[item.id] || 0;
      return acc;
    },
    {} as Record<number, number>
  );

  const [itemPositions, setItemPositions] = useState(initialPositions);

  //Boton izquierdo
  const toLeft = () => {
    if (!isAnimating) {
      setIsAnimating(true);

      // Actualizar las posiciones de los items
      setItemPositions((prevPositions) => {
        const newPositions = { ...prevPositions };
        for (let i = 0; i < itemsData.length; i++) {
          newPositions[items[i].id] = itemPositions[items[i].id] + 101;
        }
        return newPositions;
      });

      //Set Items
      setTimeout(() => {
        setItems((prevItems) => {
          const newItems = [...prevItems];
          const lastItem = newItems.pop()!;
          newItems.unshift(lastItem);
          return newItems;
        });

        // Reposición, primer y ultimo elemento
        setItemPositions((prevPositions) => {
          const newPositions = { ...prevPositions };
          newPositions[items[items.length - 1].id] = -180.5;
          newPositions[items[items.length - 2].id] = 728.5;
          return newPositions;
        });

        setIsAnimating(false);
      }, 1000);
    }
  };

  //Boton derecho
  const toRigth = () => {
    if (!isAnimating) {
      setIsAnimating(true);

      // Actualizar las posiciones de los items
      setItemPositions((prevPositions) => {
        const newPositions = { ...prevPositions };
        for (let i = 0; i < items.length; i++) {
          newPositions[items[i].id] = itemPositions[items[i].id] - 101;
        }
        return newPositions;
      });

      //Set Items
      setTimeout(() => {
        setItems((prevItems) => {
          const newItems = [...prevItems];
          const firstItem = newItems.shift()!;
          newItems.push(firstItem);
          return newItems;
        });

        // Reposición, primer y ultimo elemento
        setItemPositions((prevPositions) => {
          const newPositions = { ...prevPositions };
          newPositions[items[1].id] = -180.5;
          newPositions[items[0].id] = 728.5;
          return newPositions;
        });

        setIsAnimating(false);
      }, 1000);
    }
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className={`carousel__item carousel__item-${item.id}`}
          style={{
            transform: `translateX(${itemPositions[item.id]}%)`,
            transition: isAnimating ? "transform 1s ease-in-out" : "none",
            backgroundImage: `url(${item.url})`,
          }}
        ></div>
      ))}
      <div className="carousel__item toLeft" onClick={toLeft}></div>
      <div className="carousel__item toRight" onClick={toRigth}></div>
    </>
  );
}
export default Carousel;
