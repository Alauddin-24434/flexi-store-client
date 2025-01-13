const SkeletonCard: React.FC = () => (
  <div className="bg-white shadow-md rounded-lg p-4 animate-pulse">
    {/* Image placeholder */}
    <div className="w-full h-40 bg-gray-300 rounded-md"></div>
    {/* Text placeholders */}
    <div className="mt-4 space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
    {/* Button placeholder */}
    <div className="mt-4 h-8 bg-gray-300 rounded"></div>
  </div>
);

export default SkeletonCard;