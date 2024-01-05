import React, {useEffect, useMemo, useState} from 'react';
import DataTable from 'react-data-table-component';

import {productService} from "../../services/product.service";
import {FilterComponent} from "../FilterComponent/FilterComponent";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    useEffect(() => {
        productService.getAll().then(data => setProducts(data.products))
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <img height="50px"  alt={row.title} src={row.thumbnail} />,
        },
    ];

    const filteredItems = products.filter(
        item => item.id && item.title.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                responsive
                pointerOnHover
                highlightOnHover
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                paginationResetDefaultPage={resetPaginationToggle}
                persistTableHead
            />
        </div>
    );
};

export {Products};