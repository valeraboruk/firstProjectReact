import React, { useState } from 'react';

export default function SampleBlockUseState(){

    const [True, isTrue] = useState(false);

    return(
        <div className="p-4">
            <h1 style={{ filter: 'grayscale(100%)', color: '#333' }}>
                Статус: {True ? '✅ ВКЛ' : '❌ ВЫКЛ'}
            </h1>
            <button 
                className="border p-2 text-white" 
                onClick={() => isTrue(!True)}
            >
                Переключить
            </button>
        </div>
    )
}
