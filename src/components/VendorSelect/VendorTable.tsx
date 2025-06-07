import React, {useMemo} from 'react';
import { Button } from 'antd';
import type {Vendor} from "../../types/models.ts";
import SelectableTable from "../table/SelectableTable.tsx";
import {vendorColumns, vendorData} from "../../utils/vendorMockData.ts";

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

    const vd = vendorData.map((item, index) => {
        if (index === 3){
            return {...item , render: (text: string) => <a href={`https://${text}`} target="_blank" rel="noopener noreferrer">{text}</a>}
        }
        return item;
    })

    const filteredData = useMemo(() => vd.filter(vendor =>
        vendor.vendorName.toLowerCase().includes(searchText.toLowerCase()) ||
        vendor.primaryEmail.toLowerCase().includes(searchText.toLowerCase())
    ),[searchText]);

    // const rowSelection = {
    //     selectedRowKeys: selectedVendors.map(vendor => vendor.key),
    //     onChange: (_selectedRowKeys: React.Key[], selectedRows: Vendor[]) => {
    //         setSelectedVendors(selectedRows);
    //     },
    // };

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

            {/*<Table*/}
            {/*    columns={columns}*/}
            {/*    dataSource={filteredData}*/}
            {/*    rowSelection={{*/}
            {/*        type: 'checkbox',*/}
            {/*        ...rowSelection,*/}
            {/*    }}*/}
            {/*    rowKey="key"*/}
            {/*    pagination={false}*/}
            {/*    className="vendor-table"*/}
            {/*/>*/}
            <SelectableTable columns={vendorColumns} data={filteredData} selectedData={selectedVendors} setSelectedData={setSelectedVendors} className={"vendor-table"}/>
        </div>
    );
};

export default VendorTable;
