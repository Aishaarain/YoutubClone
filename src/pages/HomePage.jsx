import { Link} from "react-router-dom";

const mockVideos = [
  {
    id: "1",
    title: "React Tutorial for Beginners",
    channel: "Codevolution",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
  },
  {
    id: "2",
    title: "Tailwind CSS Crash Course",
    channel: "Traversy Media",
    thumbnail: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
  },
   {
    id: "3",
    title: "JavaScript Full Course 2024",
    channel: "freeCodeCamp.org",
    thumbnail: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
  },
  {
    id: "4",
    title: "Build a YouTube Clone with React",
    channel: "PedroTech",
    thumbnail: "https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg",
  },
  {
    id: "5",
    title: "The Complete Node.js Developer Course",
    channel: "Academind",
    thumbnail: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
  },
  {
    id: "6",
    title: "Learn Redux in 20 Minutes",
    channel: "Dev Ed",
    thumbnail: "https://i.ytimg.com/vi/93p3LxR9xfM/hqdefault.jpg",
  },
  {
    id: "7",
    title: "React Hooks Explained Clearly",
    channel: "Ben Awad",
    thumbnail: "https://i.ytimg.com/vi/dpw9EHDh2bM/hqdefault.jpg",
  },
  {
    id: "8",
    title: "Create a Portfolio Website with React",
    channel: "Sonny Sangha",
    thumbnail: "https://i.ytimg.com/vi/G-Cr00UYokU/hqdefault.jpg",
  },
  {
    id: "10",
    title: "Modern UI/UX Design in Figma",
    channel: "DesignCourse",
    thumbnail: "https://i.ytimg.com/vi/d9pdXJzUp0s/hqdefault.jpg",
  },
  {
    id: "9",
    title: "VS Code Tips and Tricks",
    channel: "The Net Ninja",
    thumbnail: "https://i.ytimg.com/vi/VqCgcpAypFQ/hqdefault.jpg",
  },
  {
    id: "10",
    title: "HTML & CSS Crash Course",
    channel: "The Net Ninja",
    thumbnail: "https://i.ytimg.com/vi/Icp1NdlqXCg/hqdefault.jpg",
  },
  {
    id: "11",
    title: "CSS Grid & Flexbox Explained",
    channel: "Kevin Powell",
    thumbnail: "https://i.ytimg.com/vi/ieTHC78giGQ/hqdefault.jpg",
  },
  
];

export default function HomePage() {

  return (
   
    <div className=" grid grid-cols-1 sm:grid-cols-2 ml-20 gap-10 mt-10 max-sm:ml-5 md:grid-cols-3 ">
      {mockVideos.map((video) => (
        <Link to={`/watch/${video.id}`}  state={{ video }}  className=" sm:w-72">
      <div className="mb-6">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="rounded-xl w-full"
        />
        <h3 className="font-semibold mt-2 line-clamp-2">{video.title}</h3>
        <p className="text-sm text-gray-600">{video.channel}</p>
      </div>
    </Link>
      ))}
    </div>
  );
}