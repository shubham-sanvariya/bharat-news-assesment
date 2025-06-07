import React from 'react'
import {Button, Divider} from "antd";

interface ButtonProps {
    disabled: boolean;
    handleNext: () => void;
    onBack?: () => void;
    btnTitle?: string;
}

const BtnsComponent : React.FC<ButtonProps> = ({onBack,disabled, handleNext,btnTitle}) => {

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
                {btnTitle ? btnTitle : "Next"}
            </Button>
        </div>
    )
}
export default BtnsComponent
