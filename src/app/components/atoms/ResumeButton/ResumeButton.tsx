"use client";

const ResumeButton = () => {
  return (
    <div className="flex justify-center items-center mt-20 mx-auto bg-green-400 h-16 w-32 animate-bounce rounded-full">
      <button
        className="opacity-100"
        onClick={() => {
          console.log('clicky');
        }}
      >
        Resume
      </button>
    </div>
  );
};

export default ResumeButton;