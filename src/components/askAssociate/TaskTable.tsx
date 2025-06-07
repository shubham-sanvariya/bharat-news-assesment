import React from 'react';
import type {Task} from "../../types/models.ts";
import SelectableTable from "../table/SelectableTable.tsx";
import {taskColumns, taskData} from "../../utils/taskMockData.ts";

interface TaskTableProps {
    selectedTask: Task | null;
    setSelectedTask: (task: Task) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({
                                                 selectedTask,
                                                 setSelectedTask
                                             }) => {

    return (
        <SelectableTable columns={taskColumns}
                         data={taskData}
                         selectedData={selectedTask}
                         setSelectedData={setSelectedTask}
                         className={"task-table"}/>
    );
};

export default TaskTable;
