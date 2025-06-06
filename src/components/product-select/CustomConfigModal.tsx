import React, { useState } from 'react';
import { Modal, Checkbox } from 'antd';
import './style.scss';

interface CustomConfigModalProps {
    visible: boolean;
    onOk: (configType: string) => void;
    onCancel: () => void;
}

const CustomConfigModal: React.FC<CustomConfigModalProps> = ({
                                                                 visible,
                                                                 onOk,
                                                                 onCancel,
                                                             }) => {
    const [selectedFields, setSelectedFields] = useState<string[]>([]);

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
            visible={visible}
            onOk={handleOk}
            onCancel={onCancel}
            width={600}
            className="custom-config-modal"
        >
            <div className="checkbox-group">
                <Checkbox.Group
                    options={fieldOptions}
                    value={selectedFields}
                    onChange={(checkedValues) => setSelectedFields(checkedValues as string[])}
                />
            </div>
        </Modal>
    );
};

export default CustomConfigModal;
