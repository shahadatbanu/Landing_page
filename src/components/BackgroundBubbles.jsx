const BackgroundBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Bubble 1 */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-100 via-pink-50 to-yellow-50 rounded-full opacity-20 filter blur-3xl animate-float"></div>

      {/* Bubble 2 */}
      <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-full opacity-15 filter blur-2xl animate-floatSlow"></div>

      {/* Bubble 3 */}
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-50 via-yellow-50 to-indigo-100 rounded-full opacity-10 filter blur-3xl animate-floatSlower"></div>
    </div>
  );
};
export default BackgroundBubbles;