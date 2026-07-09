import {useState, useEffect} from 'react';


export function useDropdown () {

    const [openDropdownId, setOpenDropdownId] = useState<number | null> (null);

    const toggleDropdown = (id: number) => {
        setOpenDropdownId(prev => prev === id ? null : id);
    }
  
    useEffect(() => {
        const handleClickOutside = () => setOpenDropdownId(null);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return {openDropdownId,
        toggleDropdown,
    }
}

