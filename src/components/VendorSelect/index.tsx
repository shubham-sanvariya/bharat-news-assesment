import React, {useState} from 'react';
import { Button, Typography, Input } from 'antd';
import VendorTable from './VendorTable';
import './style.scss';

const { Title } = Typography;
const { Search } = Input;

interface VendorSelectProps {
    onBack: () => void;
    onFinish: () => void;
    selectedVendors: any[];
    setSelectedVendors: (vendors: any[]) => void;
}

const VendorSelect: React.FC<VendorSelectProps> = ({
                                                                 onBack,
                                                                 onFinish,
                                                                 selectedVendors,
                                                                 setSelectedVendors
                                                             }) => {
    const [searchText, setSearchText] = useState('');

    const handleFinish = () => {
        if (selectedVendors.length > 0) {
            onFinish();
        }
    };

    return (
        <div className="step3-container">
            <Title level={4} className="section-title">
                Select Vendor
            </Title>

            <Search
                placeholder="Search by company name or email"
                allowClear
                enterButton
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="vendor-search"
            />

            <div className="selected-count">
                {selectedVendors.length} of 1 Vendors selected
            </div>

            <VendorTable
                searchText={searchText}
                selectedVendors={selectedVendors}
                setSelectedVendors={setSelectedVendors}
            />

            <div className="action-buttons">
                <Button onClick={onBack}>Back</Button>
                <Button
                    type="primary"
                    onClick={handleFinish}
                    disabled={selectedVendors.length === 0}
                >
                    Share
                </Button>
            </div>
        </div>
    );
};

export default VendorSelect;
