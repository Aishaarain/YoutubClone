
import { createContext, useContext, useState, useEffect,useRef } from "react";
import { useLocation } from "react-router-dom";


const SidebarContext = createContext();

export function ContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const location = useLocation();

const watchPage = location.pathname.startsWith("/watch/");

  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        toggleSidebar,
        watchPage
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook to access the context
export const useSidebarContext = () => useContext(SidebarContext);
