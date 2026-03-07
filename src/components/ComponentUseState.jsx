import React, { useState } from 'react';

function ComponentUseState() {
    const [count, setCount] = useState(0);
  
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl mb-4">{count}</h1>
        
        <div className="flex gap-2 justify-center">
          <button 
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Увеличить
          </button>
          
          <button 
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Уменьшить
          </button>
        </div>
      </div>
    );
  }
export default ComponentUseState