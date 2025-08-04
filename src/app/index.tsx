
import { TaskList } from "@/features/tasks/components/TaskList";
import { AppProvider } from "./provider";

export default function App() {
  return (
   <AppProvider>
      <TaskList />
    </AppProvider>

  );
}
