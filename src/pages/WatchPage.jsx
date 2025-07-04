import { useParams,useLocation } from "react-router-dom";

export default function WatchPage() {
  const { id } = useParams();
  const location =useLocation();
const video = location.state?.video;
  return (
    <div className="w-full">
      <div className="aspect-video bg-black rounded-lg mb-4">

          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-lg"
          />
      </div>
      <h1 className="text-2xl font-bold mb-2">Video Title Placeholder</h1>
      <p className="text-gray-700">Channel Name • 100K views • 2 days ago</p>
    </div>
  );
}