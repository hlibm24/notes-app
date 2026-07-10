import {useState, useEffect} from 'react';

export type OpenDropdown = {
    id: number;
    sourse: 'notes' | 'favorites';
} | null;

export function useDropdown () {


    const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);

    const toggleDropdown = (id: number, sourse: 'notes' | 'favorites') => {
        setOpenDropdown(prev=>
            prev?.id === id && prev?.sourse === sourse ? null : {id, sourse}
        )
    }

    useEffect(() => {
        const handleClickOutside = () => setOpenDropdown(null);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return {openDropdown,
        toggleDropdown,
    }
}

