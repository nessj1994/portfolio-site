const NameDisplay = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center sm:justify-start  gap-2 text-highlight-200">
      <h1 className="text-7xl font-semibold">Jordan</h1>
      <div className="flex flex-row items-center gap-2  sm:mt-0">
        <h1 className="text-7xl font-semibold">Ness</h1>
        <h1 className="text-white animate-blink text-6xl">|</h1>
      </div>
    </div>
  );
};

export default NameDisplay;
