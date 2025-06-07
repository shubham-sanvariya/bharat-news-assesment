import type {Vendor} from "../types/models.ts";

export const vendorColumns = [
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
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
];

export const vendorData: Vendor[] = [
    {
        key: '1',
        vendorName: 'Quick Solutions',
        primaryEmail: 'sam.jackson@quicksolutions.com',
        contactName: 'Sam Jackson',
        vendorWebsite: 'www.quicksolutions.com',
        status: 'Onboarded',
    }, {
        key: '2',
        vendorName: 'slow Solutions',
        primaryEmail: 'sam.jackson@quicksolutions.com',
        contactName: 'Sam Jackson',
        vendorWebsite: 'www.quicksolutions.com',
        status: 'Onboarded',
    },
    // Add more vendors as needed
];
