import React, {useEffect} from 'react';
import { Table } from 'antd';
import type {Product} from "../../types/models.ts";

interface ProductTableProps {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
                                                       selectedProduct,
                                                       setSelectedProduct
                                                   }) => {
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'SBOM Name',
            dataIndex: 'sbomName',
            key: 'sbomName',
        },
        {
            title: 'Version',
            dataIndex: 'version',
            key: 'version',
        },
        {
            title: 'SKU ID',
            dataIndex: 'skuId',
            key: 'skuId',
        },
        {
            title: 'Modified Date',
            dataIndex: 'modifiedDate',
            key: 'modifiedDate',
        },
    ];

    const data: Product[] = [
        {
            key: '1',
            productName: 'Acme Switch',
            sbomName: 'Acme Switch',
            version: '2.2.5',
            skuId: '18',
            modifiedDate: 'May 05, 2025 08:24 AM',
        },{
            key: '2',
            productName: 'red Switch',
            sbomName: 'red Switch',
            version: '3.2.5',
            skuId: '25',
            modifiedDate: 'May 03, 2025 09:24 AM',
        },
        // Add more products as needed
    ];

    useEffect(() => {
        console.log(selectedProduct)
    }, [selectedProduct]);

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowSelection={{
                type: 'radio',
                selectedRowKeys: selectedProduct ? [selectedProduct.key] : [],
                onChange: (_, selectedRows) => {
                    setSelectedProduct(selectedRows[0]);
                },
            }}
            rowKey="key"
            pagination={false}
            className="product-table"
        />
    );
};

export default ProductTable;
