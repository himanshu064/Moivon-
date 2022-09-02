import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
const TransparentHeaderContext = createContext({
  show: true,
  onOpen: () => {},
  onClose: () => {},
});

export const useTransparentHeader = () => useContext(TransparentHeaderContext);

const TransparentHeaderContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const onClose = (path, callback) => {
    document.querySelector(".offcanvas.offcanvas-top").style.transform =
      "translateY(-100%)";
    setShow(false);
    if (path) {
      navigate(path);
    }
    if (callback) {
      callback();
    }
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
