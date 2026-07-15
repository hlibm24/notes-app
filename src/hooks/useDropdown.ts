import {useState, useEffect} from 'react';

export type OpenDropdown = {
    id: number;
    source: 'notes' | 'favorites';
} | null;

export function useDropdown () {


    const [openDropdown, setOpenDropdown] = useState<OpenDropdown>(null);

    const toggleDropdown = (id: number, source: 'notes' | 'favorites') => {
        setOpenDropdown(prev=>
            prev?.id === id && prev?.source === source ? null : {id, source}
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

