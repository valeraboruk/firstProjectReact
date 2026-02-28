 
 
export default function SampleButton({children}){
    return (
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-400 hover:-translate-y-0.5 transition-all duration-300 active:scale-95">
          {children}
        </button>
      );

}