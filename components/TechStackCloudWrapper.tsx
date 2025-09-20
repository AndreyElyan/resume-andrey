import dynamic from "next/dynamic";

const TechStackCloud = dynamic(() => import("./TechStackCloud"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-700 rounded mb-4 w-1/3"></div>
      <div className="h-4 bg-gray-700 rounded mb-6 w-2/3"></div>
      <div className="h-32 bg-gray-700 rounded"></div>
    </div>
  ),
});

export default TechStackCloud;
