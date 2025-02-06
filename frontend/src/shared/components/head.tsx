export default function Head() {
  return (
    <header className="text-center p-6 bg-gray-800 shadow-lg w-full h-1 flex fixed justify-between items-center z-50">
      <div
        id="container-header"
        className="w-97% flex justify-between items-center"
      >
        <div id="container-label" className="flex flex-col items-center">
          <div id="container-logo" className="flex w-62 pb-0.8">
            <img
              src="/src/shared/style/icon/terre.png"
              alt="icon"
              className="w-4 h-4 mr-1 filter invert"
            />
            <div id="text-label" className="text-left w-76 pl-1">
              <h1 className="text-3 font-bold">Dashboard Météo</h1>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="flex gap-4 w-full w-2xl px-3">
            <input
              type="text"
              id="location-input"
              placeholder="Entrez une ville..."
              data-search="location"
              className="flex-1 p-2 bg-[rgba(2,2,2,0.484)] border-none outline-none text-white focus:ring focus:ring-blue-500 focus:bg-[rgba(2,2,2,0.484)] text-3 rounded-xl"
            />
          </div>
        </div>

        <span id="date-live">
          <div>
            <span id="clock" className="text-4">
              ...
            </span>
          </div>
        </span>
      </div>
    </header>
  );
}
