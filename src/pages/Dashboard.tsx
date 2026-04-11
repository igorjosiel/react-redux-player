function Dashboard() {
  return (
    <main className="bg-sky-50 sm:h-full md:h-screen w-full px-5 py-10 md:p-37.5">
      <h1 className="text-2xl font-bold text-gray-600 mb-4">Meus cursos</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <li className="flex flex-col w-full md:w-95 p-5 rounded-lg bg-white shadow-md h-45">
          <div className="flex-1">
            <h2 className="font-bold text-lg text-gray-600 pb-3">
              Curso de Node.js
            </h2>

            <p className="text-sm text-gray-700">
              Domine o backend com Node.js
            </p>

            <a href="#" className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mt-2 rounded">
              Iniciante
            </a>
          </div>

          <button
            className="bg-blue-500 text-white text-sm font-bold w-40 mt-4 py-2 px-4 rounded cursor-pointer hover:bg-blue-700
          transition-all ease-in"
          >
            Ver mais
          </button>
        </li>

        <li className="flex flex-col w-full md:w-95 p-5 rounded-lg bg-white shadow-md h-45">
          <div className="flex-1">
            <h2 className="font-bold text-lg text-gray-600 pb-3">
              Curso de Node.js
            </h2>

            <p className="text-sm text-gray-700">
              Domine o backend com Node.js
            </p>

            <a href="#" className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mt-2 rounded">
              Iniciante
            </a>
          </div>

          <button
            className="bg-blue-500 text-white text-sm font-bold w-40 mt-4 py-2 px-4 rounded cursor-pointer hover:bg-blue-700
          transition-all ease-in"
          >
            Ver mais
          </button>
        </li>

        <li className="flex flex-col w-full md:w-95 p-5 rounded-lg bg-white shadow-md h-45">
          <div className="flex-1">
            <h2 className="font-bold text-lg text-gray-600 pb-3">
              Curso de Node.js
            </h2>

            <p className="text-sm text-gray-700">
              Domine o backend com Node.js
            </p>

            <a href="#" className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mt-2 rounded">
              Iniciante
            </a>
          </div>

          <button
            className="bg-blue-500 text-white text-sm font-bold w-40 mt-4 py-2 px-4 rounded cursor-pointer hover:bg-blue-700
          transition-all ease-in"
          >
            Ver mais
          </button>
        </li>

        <li className="flex flex-col w-full md:w-95 p-5 rounded-lg bg-white shadow-md h-45">
          <div className="flex-1">
            <h2 className="font-bold text-lg text-gray-600 pb-3">
              Curso de Node.js
            </h2>

            <p className="text-sm text-gray-700">
              Domine o backend com Node.js
            </p>

            <a href="#" className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mt-2 rounded">
              Iniciante
            </a>
          </div>

          <button
            className="bg-blue-500 text-white text-sm font-bold w-40 mt-4 py-2 px-4 rounded cursor-pointer hover:bg-blue-700
          transition-all ease-in"
          >
            Ver mais
          </button>
        </li>
      </ul>
    </main>
  );
}

export default Dashboard;
