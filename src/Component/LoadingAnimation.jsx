
const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="flex items-center justify-between w-36 h-24 p-2.5">
        <span className="w-5 h-5 bg-gray-800 rounded-full animate-load"></span>
        <span className="w-5 h-5 bg-gray-800 rounded-full animate-load delay-200"></span>
        <span className="w-5 h-5 bg-gray-800 rounded-full animate-load delay-400"></span>
        <span className="w-5 h-5 bg-gray-800 rounded-full animate-load"></span>
        <span className="w-5 h-5 bg-gray-800 rounded-full animate-load delay-200"></span>
      </div>
    </div>
  );
};

export default LoadingAnimation;

  