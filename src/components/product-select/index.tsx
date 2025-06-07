import React, { useState } from 'react';
import { Typography } from 'antd';
import ProductTable from './ProductTable';
import ConfigCards from './ConfigCards';
import './style.scss'
import type {Product} from "../../types/models.ts";
import BtnsComponent from "../button/BtnsComponent.tsx";

const { Title } = Typography;

interface ProductSelectProps {
    onNext: (product: Product[], config: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ onNext }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
    const [selectedConfig, setSelectedConfig] = useState<string>('');

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

            <ProductTable
                selectedProduct={selectedProduct}
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
