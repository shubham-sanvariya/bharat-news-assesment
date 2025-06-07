import React from 'react'
import {Button, Divider} from "antd";

interface ButtonProps {
    onBack?: () => void;
    disabled: boolean;
    handleNext: () => void;
}

const BtnsComponent : React.FC<ButtonProps> = ({onBack,disabled, handleNext}) => {


    return (
        <div className="action-buttons">
            <Button onClick={() => window.location.reload()}>Cancel</Button>
            <Divider type="vertical" className="tall-divider" />
            {onBack !== undefined &&
                <Button onClick={onBack}>Back</Button>}
            <Button
                type="primary"
                onClick={handleNext}
                disabled={disabled}
            >
                Next
            </Button>
        </div>
    )
}
export default BtnsComponent
