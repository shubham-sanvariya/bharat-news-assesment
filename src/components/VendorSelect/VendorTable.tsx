import React from 'react';
import type {Vendor} from "../../types/models.ts";
import SelectableTable from "../table/SelectableTable.tsx";
import {vendorColumns} from "../../utils/vendorMockData.tsx";

interface VendorTableProps {
    filteredData: Vendor[];
    selectedVendors: Vendor[];
    setSelectedVendors: (vendors: Vendor[]) => void;
}

const VendorTable: React.FC<VendorTableProps> = ({
                                                     filteredData,
                                                     selectedVendors,
                                                     setSelectedVendors
                                                 }) => {


    return (
        <div className="vendor-table-container">

            <SelectableTable columns={vendorColumns} data={filteredData} selectedData={selectedVendors}
                             setSelectedData={setSelectedVendors} className={"vendor-table"}/>
        </div>
    );
};

export default VendorTable;
