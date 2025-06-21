const Copyright = () => {
  return (
    <p className="text-xs md:text-sm text-gray-400">
      &copy; <span className="font-semibold text-white">{ new Date().getFullYear() }</span>
      &nbsp; Chill All Rights Reserved.
    </p>
  );
};

export default Copyright;