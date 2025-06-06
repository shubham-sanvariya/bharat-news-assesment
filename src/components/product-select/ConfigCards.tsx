import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import CustomConfigModal from './CustomConfigModal';
import './style.scss';

const { Text } = Typography;

interface ConfigCardsProps {
    selectedConfig: string;
    setSelectedConfig: (config: string) => void;
}

const ConfigCards: React.FC<ConfigCardsProps> = ({
                                                     selectedConfig,
                                                     setSelectedConfig
                                                 }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (configType: string) => {
        setSelectedConfig(configType);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="config-cards-container">
            <Card
                className={`config-card ${selectedConfig === 'ntia' ? 'selected' : ''}`}
                onClick={() => setSelectedConfig('ntia')}
            >
                <Text strong>NTIA-Compliant</Text>
                <div className="config-description">
                    Includes:
                    <ul>
                        <li>Component Name</li>
                        <li>Version</li>
                        <li>Supplier</li>
                        <li>Unique Identifiers</li>
                        <li>Dependencies</li>
                        <li>Author</li>
                        <li>Timestamp</li>
                    </ul>
                </div>
            </Card>

            <Card
                className={`config-card ${selectedConfig === 'enriched' ? 'selected' : ''}`}
                onClick={() => setSelectedConfig('enriched')}
            >
                <Text strong>Enriched</Text>
                <div className="config-description">
                    Includes minimum plus the following:
                    <ul>
                        <li>Vulnerabilities</li>
                        <li>Code Quality</li>
                        <li>Security Posture</li>
                        <li>Attestation</li>
                        <li>Provenance</li>
                        <li>Licenses</li>
                        <li>Age</li>
                    </ul>
                </div>
            </Card>

            <Card
                className={`config-card ${selectedConfig === 'custom' ? 'selected' : ''}`}
                onClick={showModal}
            >
                <Text strong>Custom</Text>
                <div className="config-description">
                    Select from NTIA Minimum and Standard
                </div>
                <Button type="link">Select</Button>
            </Card>

            <CustomConfigModal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default ConfigCards;
