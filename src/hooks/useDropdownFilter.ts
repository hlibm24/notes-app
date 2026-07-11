import {useState, useEffect, useRef} from 'react';

export type SortType = 'newest' | 'oldest';

export function useDropdownFilter () {
    const [sortType, setSortType] = useState<SortType>('newest');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const ref = useRef<HTMLDivElement>(null)


    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return {sortType,
        setSortType,
        isOpen,
        toggle,
        ref,
    };
}