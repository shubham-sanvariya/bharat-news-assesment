import type {Task} from "../types/models.ts";

export const taskColumns = [
    {
        title: 'Task Name',
        dataIndex: 'taskName',
        key: 'taskName',
    },
    {
        title: 'Vendor Name',
        dataIndex: 'vendorName',
        key: 'vendorName',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Modified Date',
        dataIndex: 'modifiedDate',
        key: 'modifiedDate',
    },
];

export const taskData: Task[] = [
    {
        key: '1',
        taskName: 'SBOM Request received for product Acme Switch - 2.2.5',
        vendorName: 'Quick Solutions',
        status: 'Pending',
        modifiedDate: 'May 05, 2025 08:24 AM',
    },
    {
        key: '2',
        taskName: 'SBOM Request received for product caddy:test_hp4d1',
        vendorName: 'NewAge Software',
        status: 'Pending',
        modifiedDate: 'Apr 28, 2025 08:24 AM',
    },
    {
        key: '3',
        taskName: 'SBOM Request received for product apache-avro:AVRO-3860',
        vendorName: 'SeeToo Inc',
        status: 'Pending',
        modifiedDate: 'Apr 21, 2025 08:24 AM',
    },
];
