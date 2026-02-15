import FloatingButtons from "../navigation/FloatingButtons";
import { tasksButtons } from "./constants";

const TasksPage: React.FC = () => {
  return <FloatingButtons options={tasksButtons} />;
};

export default TasksPage;
