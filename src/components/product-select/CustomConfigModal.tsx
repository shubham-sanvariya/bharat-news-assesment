import React from 'react';
import { Modal, Checkbox } from 'antd';
import './style.scss';

interface CustomConfigModalProps {
    open: boolean;
    onOk: (configType: string) => void;
    onCancel: () => void;
    setSelectedFields: (checkedValues) => void;
    disabled: boolean;
}

const CustomConfigModal: React.FC<CustomConfigModalProps> = ({
                                                                 open,
                                                                 onOk,
                                                                 onCancel,
    setSelectedFields,disabled
                                                             }) => {

    const fieldOptions = [
        { label: 'Component Name', value: 'componentName' },
        { label: 'Version', value: 'version' },
        { label: 'Supplier', value: 'supplier' },
        { label: 'Unique Identifiers', value: 'uniqueIdentifiers' },
        { label: 'Dependencies', value: 'dependencies' },
        { label: 'Author', value: 'author' },
        { label: 'Timestamp', value: 'timestamp' },
        { label: 'Vulnerabilities', value: 'vulnerabilities' },
        { label: 'Code Quality', value: 'codeQuality' },
        { label: 'Security Posture', value: 'securityPosture' },
        { label: 'Attestation', value: 'attestation' },
        { label: 'Provenance', value: 'provenance' },
        { label: 'Licenses', value: 'licenses' },
        { label: 'Age', value: 'age' },
    ];

    const handleOk = () => {
        onOk('custom');
    };

    return (
         <Modal
            title="Select configurations you want to share"
            open={open}
            onOk={handleOk}
            okButtonProps={{
                disabled: !disabled
            }}
            onCancel={onCancel}
            width={600}
            className="custom-config-modal"
        >
            <div className="checkbox-group">
                <Checkbox.Group
                    options={fieldOptions}
                    // value={selectedFields}
                    onChange={(checkedValues) => setSelectedFields(checkedValues)}
                />
            </div>
        </Modal>
    );
};

export default CustomConfigModal;
