import {
  FaArrowUp19,
  FaCalendar,
  FaChartColumn,
  FaClock,
  FaFileLines,
  FaGear,
  FaNoteSticky,
  FaSquareCheck,
} from "react-icons/fa6";
import { Options } from "./types";
import { FaChalkboardTeacher } from "react-icons/fa";

export const personalActions: Options[] = [
  { label: "Settings", icon: <FaGear /> },
  { label: "Logs", icon: <FaFileLines /> },
  { label: "Stats", icon: <FaChartColumn /> },
];

export const applicationActions: Options[] = [
  { label: "Boards", icon: <FaChalkboardTeacher />, url: "/boards" },
  { label: "Notes", icon: <FaNoteSticky />, url: "/notes" },
  { label: "Counters", icon: <FaArrowUp19 />, url: "/counters" },
  { label: "Pomodoro", icon: <FaClock />, url: "pomodoro" },
  { label: "Agenda", icon: <FaCalendar />, url: "agenda" },
  { label: "Tasks", icon: <FaSquareCheck />, url: "tasks" },
];
