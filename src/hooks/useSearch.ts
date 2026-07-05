import {useState} from 'react'

export function useSearch() {
        const [searchText, setSearchText] = useState('');

    return {searchText,
        setSearchText
    }
}