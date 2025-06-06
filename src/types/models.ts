export interface Product {
    key: string;
    productName: string;
    sbomName: string;
    version: string;
    skuId: string;
    modifiedDate: string;
}

export interface Task {
    key: string;
    taskName: string;
    vendorName: string;
    status: string;
    modifiedDate: string;
}

export interface Vendor {
    key: string;
    vendorName: string;
    primaryEmail: string;
    contactName: string;
    vendorWebsite: string;
    status: string;
}
