import React, {useMemo, useState} from 'react';
import {Typography, Input, Button} from 'antd';
import VendorTable from './VendorTable';
import './style.scss';
import type {Vendor} from "../../types/models.ts";
import {vendorData} from "../../utils/vendorMockData.tsx";
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

    const filteredData = useMemo(() => searchText.length > 0 ? vendorData.filter(vendor =>
        vendor.vendorName.toLowerCase().includes(searchText.toLowerCase()) ||
        vendor.primaryEmail.toLowerCase().includes(searchText.toLowerCase())
    ) : vendorData,[searchText]);

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
            <div className={'operation-container'}>

                <div className="selected-count">
                    {selectedVendors.length} of {vendorData.length} Vendors selected
                </div>

                <div className="table-actions">
                    <Button type="primary" className="add-vendor-btn">
                        Add Vendor
                    </Button>
                    <Button danger disabled={selectedVendors.length === 0}>
                        Delete
                    </Button>
                </div>
            </div>
                <VendorTable
                    filteredData={filteredData}
                    selectedVendors={selectedVendors}
                    setSelectedVendors={setSelectedVendors}
                />

            <BtnsComponent onBack={onBack} handleNext={handleFinish} disabled={selectedVendors.length === 0} btnTitle={"Share"}/>

        </div>
    );
};

export default VendorSelect;
