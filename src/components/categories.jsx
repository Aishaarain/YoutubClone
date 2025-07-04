import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const categories = [
   "All",
  "Trending",
  "News",
  "Music",
  "Live",
  "Gaming",
  "Podcasts",
  "Technology",
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "Finance",
  "Stock Market",
  "Crypto & Blockchain",
  "Motivation",
  "Health & Fitness",
  "Meditation",
  "Science",
  "Space",
  "Education",
  "Programming",
  "React.js",
  "Node.js",
  "Python",
  "UI/UX Design",
  "Photography",
  "Film & Animation",
  "Travel & Adventure",
  "Food & Cooking",
  "Fashion & Beauty",
  "History",
  "Documentaries",
  "DIY & Crafts",
  "Cars & Vehicles",
  "Sports",
  "Books & Literature",
  "Entrepreneurship",
  "Business & Marketing",
  "Real Estate",
  "Interviews",
  "Startup Stories"
];

export default function CategoryScrollBar() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-white max-sm:ml-5  ml-20 mr-5 top-30 py-2 px-2">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute  top-1/3 -translate-y-1/2 z-10 p-1 bg-white  rounded-full shadow hover:bg-gray-300"
      >
        <MdChevronLeft size={24} />
      </button>
       
      <div
        ref={scrollRef}
        className="flex  overflow-x-auto space-x-3 scrollbar-hide px-8"
      >
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="whitespace-nowrap bg-gray-100 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-full"
          >
            {category}
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 mr-2 top-1 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-300"
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
}
