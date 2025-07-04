// 📁 sidebarLinks.js

import {
  AiFillHome,
  AiOutlineYoutube,
} from "react-icons/ai";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdFileOpen,
  MdHistory,
  MdFeaturedPlayList,
  MdOutlineMusicNote,
  MdOutlineSportsSoccer,
  MdOutlineFeedback,
  MdOutlineReport,
  MdOutlineHelpOutline,
  MdSettings,
  MdPerson,
  MdOutlineVideoSettings,
  MdFavorite,
  MdContentCut,
  MdWatch
} from "react-icons/md";
import { FaGamepad, FaNewspaper, FaFire, FaYoutube, FaYoutubeSquare } from "react-icons/fa";
import { SiYoutubemusic, SiYoutubestudio } from "react-icons/si";
import { RiYoutubeFill } from "react-icons/ri";

 const SidebarLinks = [
  {
    links: [
      { to: "/", label: "Home", icon: <AiFillHome size={24} /> },
      { to: "/shorts", label: "Shorts", icon: <AiOutlineYoutube size={24} /> },
      { to: "/subscriptions", label: "Subscriptions", icon: <MdSubscriptions size={24} /> },
      { to: "/You", label: "You", icon: <MdPerson size={24} /> }
    ],
  },
  {
    section: "You",
    links: [
      { to: "/library", label: "Library", icon: <MdVideoLibrary size={24} /> },
      { to: "/history", label: "History", icon: <MdHistory size={24} /> },
      { to: "/playlist", label: "Playlist", icon: <MdFeaturedPlayList size={24} /> },
      { to: "/your-videos", label: "Your Videos", icon: <MdOutlineVideoSettings size={24} /> },
      { to: "/watch-later", label: "Watch Later", icon: <MdWatch size={24} /> },
      { to: "/liked-videos", label: "Liked Videos", icon: <MdFavorite size={24} /> },
      { to: "/clips", label: "Your Clips", icon: <MdContentCut size={24} /> },
    ],
  },
  {
    section: "Explore",
    links: [
      { to: "/trending", label: "Trending", icon: <FaFire size={24} /> },
      { to: "/music", label: "Music", icon: <MdOutlineMusicNote size={24} /> },
      { to: "/gaming", label: "Gaming", icon: <FaGamepad size={24} /> },
      { to: "/news", label: "News", icon: <FaNewspaper size={24} /> },
      { to: "/sports", label: "Sports", icon: <MdOutlineSportsSoccer size={24} /> },
    ],
  },
  {
    section: "More from YouTube",
    links: [
      { to: "/youtube-premium", label: "YouTube Premium", icon: <FaYoutube size={24} /> },
      { to: "/youtube-studio", label: "YouTube Studio", icon: <SiYoutubestudio size={24} /> },
      { to: "/youtube-music", label: "YouTube Music", icon: <SiYoutubemusic size={24} /> },
      { to: "/youtube-kids", label: "YouTube Kids", icon: <RiYoutubeFill size={24} /> },
    ],
  },
  {
    section: "Settings & Help",
    links: [
      { to: "/settings", label: "Settings", icon: <MdSettings size={24} /> },
      { to: "/report-history", label: "Report History", icon: <MdOutlineReport size={24} /> },
      { to: "/help", label: "Help", icon: <MdOutlineHelpOutline size={24} /> },
      { to: "/feedback", label: "Send Feedback", icon: <MdOutlineFeedback size={24} /> },
    ],
  },
];
export default SidebarLinks;