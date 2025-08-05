import { createContext, useContext } from "react";
import { useState } from "react";
import { useMemo , useEffect} from "react";
const LangageContext = createContext();

export const useLangage = () => useContext(LangageContext);

export const LangageProvider = ({children}) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setSelected(lang);
        }else{
            setSelected("Français");
        }
    }, []);

    useEffect(() => {
        if(selected!==null){
            localStorage.setItem("lang", selected);
        }
    }, [selected]);
    const contextLang = useMemo(() => ({selected, setSelected}), [selected]);
    return <LangageContext.Provider value={contextLang}>{children}</LangageContext.Provider>
}