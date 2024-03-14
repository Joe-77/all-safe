import { Dispatch, createContext, useEffect, useState } from "react";

export const Context = createContext<any>(undefined);

export const ContextProvider = ({ children }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const [defaultColor, setDefaultColor] = useState("white");
  const [initialWidth, setInitialWidth]: any = useState(500);
  const [initialPosition, setInitialPosition]: any = useState({
    x: 50,
    y: -200,
  });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [circleWidth, setCircleWidth] = useState<string>("100%");
  const [artWidth, setArtWidth] = useState<string>("100%");
  const [artTranslate, setArtTranslate] = useState({
    x: 0,
    y: 0,
  });
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      setShowMenu(false);
      setDefaultColor("white");

      if (scrollY > 100 && scrollY < 160) {
        setInitialWidth(550);
        setInitialPosition({ x: 60, y: -170 });
      } else if (scrollY > 160 && scrollY < 200) {
        setInitialWidth(580);
        setInitialPosition({ x: 65, y: -150 });
      } else if (scrollY >= 200 && scrollY < 270) {
        setInitialWidth(600);
        setInitialPosition({ x: 70, y: -130 });
      } else if (scrollY > 270 && scrollY < 320) {
        setInitialWidth(650);
        setInitialPosition({ x: 70, y: -110 });
      } else if (scrollY > 320) {
        setInitialWidth("70%");
        setInitialPosition({ x: 280, y: -100 });
      } else {
        setInitialWidth(500);
        setInitialPosition({ x: 50, y: -200 });
      }

      if (scrollY > 2800) {
        setCircleWidth("500px");
      } else {
        setCircleWidth("100%");
      }

      if (scrollY > 5500) {
        setArtWidth("500px");
      } else {
        setArtWidth("100%");
      }

      if (scrollY > 0) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    });
    window.addEventListener("mousemove", (e) => {
      if (scrollY > 2800 && scrollY < 3000) {
        setTranslate({ x: e.clientX - 390, y: e.clientY - 350 });
      } else if (scrollY > 3000 && scrollY < 3200) {
        setTranslate({ x: e.clientX - 390, y: e.clientY + 20 });
      } else if (scrollY > 3200 && scrollY < 3500) {
        setTranslate({ x: e.clientX - 390, y: e.clientY + 50 });
      } else if (scrollY >= 3500) {
        setTranslate({ x: e.clientX - 390, y: e.clientY + 320 });
      } else {
        setTranslate({ x: 0, y: 0 });
      }

      if (scrollY > 5500 && scrollY < 6000) {
        setArtTranslate({ x: e.clientX - 400, y: e.clientY });
      } else if (scrollY > 6000) {
        setArtTranslate({ x: e.clientX - 400, y: e.clientY + 500 });
      } else {
        setArtTranslate({ x: 0, y: 0 });
      }
    });
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      setDefaultColor("white");
    } else {
      setDefaultColor("black");
    }
  };

  const handleDisplay = () => {
    setShowMenu(false);
    setDefaultColor("white");
  };

  return (
    <Context.Provider
      value={{
        showMenu,
        defaultColor,
        initialWidth,
        initialPosition,
        translate,
        circleWidth,
        showScroll,
        artWidth,
        artTranslate,
        handleShowMenu,
        handleDisplay,
      }}
    >
      {children}
    </Context.Provider>
  );
};
