import useStore from "../components/context/store";

const InputComponent = () => {
  const setCity = useStore((state) => state.setCityName);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const city = e.currentTarget.value.trim();
      if (city) {
        setCity(city);
      }
      console.log("Ville choisie :", city);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
      <div className="flex w-full px-4">
        <input
          type="text"
          id="location-input"
          placeholder="Entrez une ville..."
          data-search="location"
          className="flex-1 p-1 bg-[rgba(2,2,2,0.484)] border-none outline-none text-white focus:ring focus:ring-blue-500 focus:bg-[rgba(2,2,2,0.484)] text-3 rounded-1"
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
};

export default InputComponent;
