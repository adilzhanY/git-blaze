const Divider = ({ className = "" }) => {
  return (
    <div
      className={`h-1 w-2/3 mx-auto bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 mask-image-linear mask-linear-to-r mask-from-black mask-to-transparent animate-pulse ${className}`}
    />
  );
};

export default Divider;
