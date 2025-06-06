import React from 'react';
import { Table, Button } from 'antd';
import type {Vendor} from "../../types/models.ts";

interface VendorTableProps {
    searchText: string;
    selectedVendors: Vendor[];
    setSelectedVendors: (vendors: Vendor[]) => void;
}

const VendorTable: React.FC<VendorTableProps> = ({
                                                     searchText,
                                                     selectedVendors,
                                                     setSelectedVendors
                                                 }) => {
    const columns = [
        {
            title: 'Vendor Name',
            dataIndex: 'vendorName',
            key: 'vendorName',
        },
        {
            title: 'Primary Email',
            dataIndex: 'primaryEmail',
            key: 'primaryEmail',
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            key: 'contactName',
        },
        {
            title: 'Vendor Website',
            dataIndex: 'vendorWebsite',
            key: 'vendorWebsite',
            render: (text: string) => <a href={`https://${text}`} target="_blank" rel="noopener noreferrer">{text}</a>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    const data: Vendor[] = [
        {
            key: '1',
            vendorName: 'Quick Solutions',
            primaryEmail: 'sam.jackson@quicksolutions.com',
            contactName: 'Sam Jackson',
            vendorWebsite: 'www.quicksolutions.com',
            status: 'Onboarded',
        },
        // Add more vendors as needed
    ];

    const filteredData = data.filter(vendor =>
        vendor.vendorName.toLowerCase().includes(searchText.toLowerCase()) ||
        vendor.primaryEmail.toLowerCase().includes(searchText.toLowerCase())
    );

    const rowSelection = {
        selectedRowKeys: selectedVendors.map(vendor => vendor.key),
        onChange: (selectedRowKeys: React.Key[], selectedRows: Vendor[]) => {
            setSelectedVendors(selectedRows);
        },
    };

    return (
        <div className="vendor-table-container">
            <div className="table-actions">
                <Button type="primary" className="add-vendor-btn">
                    Add Vendor
                </Button>
                <Button danger disabled={selectedVendors.length === 0}>
                    Delete
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={filteredData}
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                rowKey="key"
                pagination={false}
                className="vendor-table"
            />
        </div>
    );
};

export default VendorTable;
