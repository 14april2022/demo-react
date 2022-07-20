import { AiOutlineHome, AiOutlineBook } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";
export const navLink = [
  {
    id: 0,
    text: "Home",
    icon: <AiOutlineHome />,
    url: "/",
  },
  {
    id: 1,
    text: "Add Course",
    icon: <AiOutlineBook />,
    url: "/add-course",
  },
  {
    id: 2,
    text: "View All Courses",
    url: "/view-all-courses",
    icon: <HiOutlineViewGrid />,
  },
];
