import React, {useMemo, useState} from 'react';
import { Typography } from 'antd';
import ProductTable from './ProductTable';
import ConfigCards from './ConfigCards';
import './style.scss'
import type {Product} from "../../types/models.ts";
import BtnsComponent from "../button/BtnsComponent.tsx";
import Search from "antd/es/input/Search";

const { Title } = Typography;

interface ProductSelectProps {
    onNext: (product: Product[], config: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ onNext }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
    const [selectedConfig, setSelectedConfig] = useState<string>('');
    const [searchText, setSearchText] = useState('');

    const filteredData = useMemo(() => selectedProduct.filter(product =>
        product.productName.toLowerCase().includes(searchText.toLowerCase()) ||
        product.sbomName.toLowerCase().includes(searchText.toLowerCase())
    ),[searchText, selectedProduct]);

    const handleNext = () => {
        if (selectedProduct && selectedConfig) {
            onNext(selectedProduct, selectedConfig);
        }
    };

    return (
        <div className="container">
            <Title level={4} className="section-title">
                Select Products
            </Title>

            <Search
                placeholder="Search by company name or email"
                allowClear
                enterButton
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="product-search"
            />

            <ProductTable
                selectedProduct={filteredData}
                setSelectedProduct={setSelectedProduct}
            />

            <Title level={4} className="section-title">
                Select SBOM configuration that you want to share
            </Title>

            <ConfigCards
                selectedConfig={selectedConfig}
                setSelectedConfig={setSelectedConfig}
            />

            <BtnsComponent handleNext={handleNext} disabled={!selectedProduct || !selectedConfig}/>
        </div>
    );
};

export default ProductSelect;
