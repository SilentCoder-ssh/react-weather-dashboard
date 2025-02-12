import useStore from "../context/store";

const InputComponent = () => {
  const setCity = useStore((state) => state.setCityName);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const city = e.currentTarget.value.trim();
      if (city && city.length > 2) {
        setCity(city);
      }
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
          className="flex-1 p-1 bg-[#262624] border-solid outline-none border-[#8B8C81] focus:border-[#8B8C81] hover:border-none text-center text-[2.3vh] h-[4vh] w-[15vw] rounded-1"
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </div>
  );
};

export default InputComponent;
