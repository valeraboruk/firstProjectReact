

export default function CounterView({count}){


    return(
        <div className="py-2">
            {/* filter: grayscale делает число строго ч/б, если там будут цвета */}
            <p className="text-gray-400 text-sm">Текущее значение</p>
            <h2 className="text-6xl font-bold text-black tabular-nums filter grayscale">
                {count}
            </h2>
            
        </div>
    )
}