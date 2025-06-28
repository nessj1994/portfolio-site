"use client";

const ResumeButton = () => {
  return (
    <div className="flex justify-center items-center mt-20 mx-auto bg-highlight-200 h-16 w-48 animate-bounce rounded-full">
      <button
        className="opacity-100"
        onClick={() => {
          console.log('clicky');
        }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeButton;