import React, {useEffect} from 'react';
import type {Product} from "../../types/models.ts";
import SelectableTable from "../table/SelectableTable.tsx";
import {productsColumns, productsData} from "../../utils/mockData.ts";

interface ProductTableProps {
    selectedProduct: Product[] | null;
    setSelectedProduct: (product: Product[]) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
                                                       selectedProduct,
                                                       setSelectedProduct
                                                   }) => {


    useEffect(() => {
        console.log(selectedProduct)
    }, [selectedProduct]);

    return (
        // <Table
        //     columns={columns}
        //     dataSource={data}
        //     rowSelection={{
        //         type: 'radio',
        //         selectedRowKeys: selectedProduct ? [selectedProduct.key] : [],
        //         onChange: (_, selectedRows) => {
        //             setSelectedProduct(selectedRows[0]);
        //         },
        //     }}
        //     rowKey="key"
        //     pagination={false}
        //     className="product-table"
        // />
        <SelectableTable columns={productsColumns} data={productsData} selectedData={selectedProduct} setSelectedData={setSelectedProduct} className={"product-table"}/>
    );
};

export default ProductTable;
