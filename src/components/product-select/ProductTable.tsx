import React from 'react';
import type {Product} from "../../types/models.ts";
import SelectableTable from "../table/SelectableTable.tsx";
import {productsColumns} from "../../utils/mockData.ts";

interface ProductTableProps {
    filteredData: Product[];
    selectedProduct: Product[];
    setSelectedProduct: (product: Product[]) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
                                                       filteredData,
                                                       selectedProduct,
                                                       setSelectedProduct
                                                   }) => {

    // selectedProduct ? selectedProduct : []
    return (
        <SelectableTable columns={productsColumns} data={filteredData ? filteredData : []} selectedData={selectedProduct}
                         setSelectedData={setSelectedProduct} className={"product-table"}/>
    );
};

export default ProductTable;
