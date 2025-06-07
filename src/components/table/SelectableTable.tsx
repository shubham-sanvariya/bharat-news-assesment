import {Table} from "antd";
import React, {useEffect, useMemo} from "react";
import type {ColumnsType} from "antd/es/table";

interface BaseRecord {
    key: string | number;
}

interface SelectableTableProps<T extends BaseRecord> {
    columns: ColumnsType<T>;
    data: T[];
    selectedData: T | T[] | null;
    setSelectedData: (data: T | T[]) => void;
    searchText?: string;
    className: string;
}


const SelectableTable = <T extends BaseRecord>({
                                                   columns,
                                                   data,
                                                   selectedData,
                                                   setSelectedData,
                                                   className
                                               }: SelectableTableProps<T>) => {

    useEffect(() => {
        console.log(selectedData)
    }, [selectedData]);

    const isSelectedDataArray = useMemo(() => {
        return Array.isArray(selectedData);
    },[selectedData]);


    const rowSelection = {
        selectedRowKeys: Array.isArray(selectedData)
            ? selectedData.map(item => item.key)
            : selectedData
                ? [selectedData.key]
                : [],
        onChange: (_selectedRowKeys: React.Key[], selectedRows: T[]) => {
            if (Array.isArray(selectedData)) {
                setSelectedData(selectedRows)
            } else {
                if (selectedRows !== undefined && selectedRows.length > 0) {
                    setSelectedData(selectedRows[0])
                }
            }
        },
    };

    const handleRowClick = (record : T) => {
        if (isSelectedDataArray){

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            setSelectedData((prev : T[]) => {
                const currentSelection : T[] = Array.isArray(prev) ? prev : [];
                const isSelected = currentSelection.some(item => item.key === record.key);

                return isSelected
                    ? currentSelection.filter(item => item.key !== record.key)
                    : [...currentSelection, record];
            });
        }else {
            setSelectedData(record);
        }
    }


    return (
        <Table<T>
            columns={columns}
            dataSource={data}
            rowSelection={{
                type: Array.isArray(selectedData) ? "checkbox" : "radio",
                // onSelect: (record) => {
                //     setSelectedData(record);
                // },
                ...rowSelection
            }}
            onRow={(record) => ({
                onClick: () => handleRowClick(record)
            })}
            // rowKey={rowKey}
            pagination={false}
            className={`selectable-table ${className}`}
            rowClassName={() => 'clickable-row'}
        />
    );
}
export default SelectableTable
