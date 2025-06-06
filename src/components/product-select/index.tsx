import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import ProductTable from './ProductTable';
import ConfigCards from './ConfigCards';
import './style.scss'

const { Title } = Typography;

interface ProductSelectProps {
    onNext: (product: any, config: string) => void;
}

const ProductSelect: React.FC<ProductSelectProps> = ({ onNext }) => {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [selectedConfig, setSelectedConfig] = useState<string>('');

    const handleNext = () => {
        if (selectedProduct && selectedConfig) {
            onNext(selectedProduct, selectedConfig);
        }
    };

    return (
        <div className="step1-container">
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

            <div className="action-buttons">
                <Button>Cancel</Button>
                <Button
                    type="primary"
                    onClick={handleNext}
                    disabled={!selectedProduct || !selectedConfig}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default ProductSelect;
