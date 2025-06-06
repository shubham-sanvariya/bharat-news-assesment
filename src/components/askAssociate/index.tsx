import React, {useState} from 'react';
import { Button, Typography } from 'antd';
import TaskTable from './TaskTable';
import './style.scss';

const { Title } = Typography;

interface TaskAssociateProps {
    onBack: () => void;
    onNext: (task: any) => void;
}

const TaskAssociate: React.FC<TaskAssociateProps> = ({
                                                                   onBack,
                                                                   onNext
                                                               }) => {
    const [selectedTask, setSelectedTask] = useState<any>(null);

    const handleNext = () => {
        if (selectedTask) {
            onNext(selectedTask);
        }
    };

    return (
        <div className="step2-container">
            <Title level={4} className="section-title">
                Associate Task
            </Title>

            <TaskTable
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
            />

            <div className="action-buttons">
                <Button onClick={onBack}>Back</Button>
                <Button
                    type="primary"
                    onClick={handleNext}
                    disabled={!selectedTask}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default TaskAssociate;
