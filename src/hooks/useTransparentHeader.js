import { useState, createContext, useContext } from "react";

const TransparentHeaderContext = createContext({
  show: true,
  onOpen: () => {},
  onClose: () => {},
});

export const useTransparentHeader = () => useContext(TransparentHeaderContext);

const TransparentHeaderContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);

  const onClose = (callback) => {
    document.querySelector(".offcanvas.offcanvas-top").style.transform =
      "translateY(-100%)";
    setShow(false);
    setTimeout(() => {
      if (callback) {
        callback();
      }
    }, 50);
  };

  const onOpen = () => {
    setShow(true);
  };

  console.log(show, "showwwoowowo");

  return (
    <TransparentHeaderContext.Provider
      value={{
        show,
        onOpen,
        onClose,
      }}
    >
      {children}
    </TransparentHeaderContext.Provider>
  );
};

export default TransparentHeaderContextProvider;
