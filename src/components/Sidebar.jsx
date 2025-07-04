import { Link, useLocation } from "react-router-dom";
import { useSidebarContext} from "../context/Context";
import SidebarLinks from "./SidebarData"


export default function Sidebar() {

    const {isOpen,setIsOpen,watchPage}= useSidebarContext();
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 "
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Full Sidebar */}
      <aside
        className={`fixed top-0 pt-20 left-0 z-40 h-full w-64 bg-white dark:bg-gray-800 p-6 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}  h-full overflow-y-auto`}
      >
     <ul className="space-y-6 text-left pt-6">
  {SidebarLinks.map((section, index) => (
    <div key={index}>
      {section.section && (
        <h3 className="text-xs uppercase text-gray-400 mb-2">{section.section}</h3>
      )}
      <ul className="space-y-3">
        {section.links.map((item, i) => (
          <li key={i}>
            <Link
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 hover:text-red-500"
            >
              {item.icon}
              <span className="text-base">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  ))}
</ul>
<div className="text-xs text-gray-400 space-y-2 mt-6">
  <p>About • Press • Copyright • Contact us • Creators • Advertise • Developers</p>
  <p>Terms • Privacy • Policy & Safety • How YouTube works • Test new features</p>
  <p>© 2025 Google LLC</p>
</div>

      </aside>
    

      {!watchPage &&
      <aside
        className={`${isOpen? "hidden": ""} fixed top-20 left-0 z-40 h-full  p-4 w-20 `}
      >
            <ul className="space-y-6 max-md:hidden text-center pt-10">
    {SidebarLinks[0].links.map((item, index) => (
      <li key={index}>
        <Link to={item.to} className="flex flex-col items-center hover:text-red-500">
          {item.icon}
          <span className="text-[10px] mt-1">{item.label}</span>
        </Link>
      </li>
    ))}
  </ul>
  
      </aside>}
       
    </>
  );
}
