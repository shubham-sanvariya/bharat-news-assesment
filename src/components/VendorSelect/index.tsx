import React, {useState} from 'react';
import { Typography, Input } from 'antd';
import VendorTable from './VendorTable';
import './style.scss';
import type {Vendor} from "../../types/models.ts";
import {vendorData} from "../../utils/vendorMockData.ts";
import BtnsComponent from "../button/BtnsComponent.tsx";

const { Title } = Typography;
const { Search } = Input;

interface VendorSelectProps {
    onBack: () => void;
    onFinish: () => void;
    selectedVendors: Vendor[];
    setSelectedVendors: (vendors: Vendor[]) => void;
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
        <div className="container">
            <Title level={4} className="section-title">
                Select Vendors
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
                {selectedVendors.length} of {vendorData.length} Vendors selected
            </div>

            <VendorTable
                searchText={searchText}
                selectedVendors={selectedVendors}
                setSelectedVendors={setSelectedVendors}
            />

            <BtnsComponent onBack={onBack} handleNext={handleFinish} disabled={selectedVendors.length === 0}/>

        </div>
    );
};

export default VendorSelect;
