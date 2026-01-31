import { useState } from "react";

const useAccordion = (defaultActive = "01") => {
    const [active, setActive] = useState(defaultActive);

    const handleClick = (id) => {
        setActive(id);
    };

    const isOpen = (id) => active === id;

    return { active, handleClick, isOpen };
};

export default useAccordion;
