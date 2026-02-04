import { useContext } from "react";
import ThemeContext from "./theme-context"; // ✅ CORRECT FILE

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;
