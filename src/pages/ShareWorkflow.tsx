import React, { useState } from 'react';
import { Steps, Card } from 'antd';
import '../styles/shareWorkflow.scss';
import ProductSelect from "../components/product-select";
import TaskAssociate from "../components/askAssociate";
import VendorSelect from "../components/VendorSelect";
import type {Product, Task, Vendor} from "../types/models.ts";

const { Step } = Steps;

const ShareWorkflow: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);
    const [selectedConfig, setSelectedConfig] = useState<string>('');
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [selectedVendors, setSelectedVendors] = useState<Vendor[]>([]);

    const steps = [
        {
            title: 'Select Product',
            content: (
                <ProductSelect
                    onNext={(product, config) => {
                        setSelectedProduct(product);
                        setSelectedConfig(config);
                        setCurrentStep(1);
                    }}
                />
            ),
        },
        {
            title: 'Associate Task',
            content: (
                <TaskAssociate
                    onBack={() => setCurrentStep(0)}
                    onNext={(task) => {
                        setSelectedTask(task);
                        setCurrentStep(2);
                    }}
                />
            ),
        },
        {
            title: 'Select Vendor',
            content: (
                <VendorSelect
                    onBack={() => setCurrentStep(1)}
                    onFinish={() => {
                        console.log({
                            product: selectedProduct,
                            config: selectedConfig,
                            task: selectedTask,
                            vendors: selectedVendors,
                        });
                    }}
                    selectedVendors={selectedVendors}
                    setSelectedVendors={setSelectedVendors}
                />
            ),
        },
    ];

    return (
        <div className="share-workflow-container">
            <Card className={'card-section'} >
                <Steps current={currentStep} className="workflow-steps">
                    {steps.map((item) => (
                        <Step key={item.title} title={item.title} className="workflow-steps"/>
                    ))}
                </Steps>
                <div className="steps-content">{steps[currentStep].content}</div>
            </Card>
        </div>
    );
};

export default ShareWorkflow;
