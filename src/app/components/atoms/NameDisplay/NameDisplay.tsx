const NameDisplay = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 text-highlight-200">
      <h1 className="text-7xl font-semibold">Jordan</h1>
      <div className="flex flex-row items-center gap-2 -mt-2 lg:mt-0">
        <h1 className="text-7xl font-semibold">Ness</h1>
        <h1 className="text-white animate-blink text-6xl">|</h1>
      </div>
    </div>
  );
};

export default NameDisplay;
