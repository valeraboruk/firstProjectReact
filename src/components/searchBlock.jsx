import { useState } from "react";

export default function SearchBlock({ items = [], setSearchFilter }) { // 1. Значение по умолчанию
    const [query, setQuery] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setQuery(value);

        // 2. Фильтрация должна быть ВНУТРИ обработчика или в теле компонента через useMemo
        const listFiltered = items.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        // 3. Передаем отфильтрованный список родителю
        if (setSearchFilter) {
            setSearchFilter(listFiltered);
        }
        
        console.log(value);
    }

    return (
        <input 
            type="text"
            value={query}
            placeholder="Поиск..."
            onChange={handleChange} 
        />
    );
}
