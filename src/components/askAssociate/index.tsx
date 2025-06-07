import React, {useState} from 'react';
import { Typography} from 'antd';
import TaskTable from './TaskTable';
import './style.scss';
import type {Task} from "../../types/models.ts";
import BtnsComponent from "../button/BtnsComponent.tsx";

const { Title } = Typography;

interface TaskAssociateProps {
    onBack: () => void;
    onNext: (task: Task) => void;
}

const TaskAssociate: React.FC<TaskAssociateProps> = ({
                                                                   onBack,
                                                                   onNext
                                                               }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleNext = () => {
        if (selectedTask) {
            onNext(selectedTask);
        }
    };

    return (
        <div className="container">
            <Title level={4} className="section-title">
                Associate Task
            </Title>

            <TaskTable
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
            />

            <BtnsComponent onBack={onBack} handleNext={handleNext} disabled={!selectedTask}/>
        </div>
    );
};

export default TaskAssociate;
