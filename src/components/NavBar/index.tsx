import React, { useEffect } from "react";
import { useState, useRef } from "react";
// import { Link } from "react-router-dom";

type NavBarProps = {
  items: { svg: React.ReactNode; className?: string; desplegable?: boolean }[];
  underItems?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems2?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems3?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems4?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems5?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems6?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems7?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems8?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems9?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
  underItems10?: {
    spanItems?: {
      span1?: string;
      span2?: string;
      span3?: string;
    };
    linkItems1?: string[];
    linkItems2?: string[];
    linkItems3?: string[];
  }[];
};

//Contexto
const NavBarContext = React.createContext<{
  hover: boolean;
  isHover: React.Dispatch<React.SetStateAction<boolean>>;
  activeItemIndex: number | null;
  setActiveItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  hover: false,
  isHover: () => {},
  activeItemIndex: null,
  setActiveItemIndex: () => {},
});

export default function NavBar({
  items,
  underItems,
  underItems2,
  underItems3,
  underItems4,
  underItems5,
  underItems6,
  underItems7,
  underItems8,
  underItems9,
  underItems10,
}: NavBarProps) {
  const [hover, isHover] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const enterTimeoutRef = useRef<number | null>(null);
  const leaveTimeoutRef = useRef<number | null>(null);

  // RetarderDeployMenu
  const handleMouseEnter = (index?: number) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    // console.log(`Mouse enter on item: ${index}`);
    enterTimeoutRef.current = window.setTimeout(() => {
      isHover(true);
      setExpanded(true); //////////////////////////Forsar
      setActiveItemIndex(index ? index : null);
    }, 100);
  };

  //Retardar hoverToFalse
  const handleMouseLeave = () => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    leaveTimeoutRef.current = window.setTimeout(() => {
      isHover(false);
      setExpanded(false);
      setActiveItemIndex(null);
    }, 280);
  };

  //Retarder MouseEnter ContainerUnder
  const handleContainerMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    isHover(true);
    setExpanded(true);
  };

  //Selección del Array
  const activeUnderItems =
    activeItemIndex === 1
      ? underItems
      : activeItemIndex === 2
      ? underItems2
      : activeItemIndex === 3
      ? underItems3
      : activeItemIndex === 4
      ? underItems4
      : activeItemIndex === 5
      ? underItems5
      : activeItemIndex === 6
      ? underItems6
      : activeItemIndex === 7
      ? underItems7
      : activeItemIndex === 8
      ? underItems8
      : activeItemIndex === 9
      ? underItems9
      : underItems10;

  //Forzar animación de la altura el cambiar entre links del navbar
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      if (expanded) {
        container.style.height = `${container.offsetHeight}px`;

        setTimeout(() => {
          container.style.height = `auto`;
        }, 280);
      }
    }
  }, [expanded, activeItemIndex]);

  //<-->

  return (
    <NavBarContext.Provider
      value={{ hover, isHover, activeItemIndex, setActiveItemIndex }}
    >
      <header>
        <div
          ref={containerRef}
          className={`nav--under ${
            hover && activeItemIndex !== null ? "hover" : ""
          } ${expanded ? "expanded" : "collapsed"} `}
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {activeUnderItems &&
            activeItemIndex !== null &&
            activeUnderItems.map((item, i) => (
              <div key={i} className="underMenu--container">
                {/* Section 1 */}
                <div className="underMenu--wrapper First">
                  <span>{item.spanItems?.span1}</span>
                  <ul>
                    {item.linkItems1?.map((itemLink) => (
                      <li key={itemLink}>{itemLink}</li>
                    ))}
                  </ul>
                  <ul>
                    <li></li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div className="underMenu--wrapper">
                  <span>{item.spanItems?.span2}</span>
                  <ul>
                    {item.linkItems2?.map((itemLink2) => (
                      <li key={itemLink2}>{itemLink2}</li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div className="underMenu--wrapper">
                  <span>{item.spanItems?.span3}</span>
                  <ul>
                    {item.linkItems3?.map((itemLink3) => (
                      <li key={itemLink3}>{itemLink3}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>

        <nav
          className={`navbar ${
            hover && activeItemIndex !== null ? "hoverSubMenu" : ""
          }`}
        >
          {/* <Link to="/Pruebas">Pruebas</Link> */}
          <ul className="navbar__ul">
            {items.map((item, i) => (
              <li
                key={i}
                className={`navbar__li ${item.className}`}
                {...(item.desplegable
                  ? {
                      onMouseEnter: () => handleMouseEnter(i),
                      onMouseLeave: handleMouseLeave,
                    }
                  : {})}
              >
                <span>{item.svg}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </NavBarContext.Provider>
  );
}
