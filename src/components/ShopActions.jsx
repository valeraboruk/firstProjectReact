import React from 'react';

function ShopActions({ cartCount = 0, onSearch }) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 mb-6 bg-gray-50 rounded-xl border border-gray-100">
      {/* Поле поиска */}
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="Найти в каталоге..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full py-2 px-4 rounded-lg bg-white border border-gray-200 focus:ring-2 focus:ring-black outline-none transition-all text-sm"
        />
      </div>

      {/* Кнопка корзины с числом */}
      <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
        <span className="text-sm font-medium">Корзина</span>
        {cartCount > 0 && (
          <span className="flex items-center justify-center bg-white text-black text-xs font-bold rounded-full h-5 min-w-[20px] px-1">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}

export default ShopActions;
