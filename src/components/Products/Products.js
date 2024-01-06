import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DataTable from 'react-data-table-component';

import css from "./Products.module.css";
import {productService} from "../../services/product.service";
import {Search} from "../Search/Search";
import {openModal} from "../../storage/slices/modal.slice";
import {ProductModal} from "../ProductModal/ProductModal";
import {Dropdown} from "../Dropdown/Dropdown";

const Products = () => {
    const {visible} = useSelector(state => state.modalReducer)
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
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
            selector: row => `$${row.price.toFixed(2)}`,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <img height="50px"  alt={row.title} src={row.thumbnail}/>,
        },
    ];

    const handleSelectChange = (value) => {
        setFilterCategory(value);
    };

    const filteredItems = products.filter(
        item => item.id && item.title.toLowerCase().includes(filterText.toLowerCase()) &&
            (filterCategory !== 'All' ? item.category.toLowerCase().includes(filterCategory) : true)
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText || filterCategory !== 'All') {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
                setFilterCategory('');
                document.getElementById("categories_list").selectedIndex = 0;
            }
        };

        return (
            <div className={`d-flex justify-content-end gap-5 ${css.tableHeader}`}>
                <Dropdown
                    onValueChange={handleSelectChange}
                    categories={[...new Set(products.map(item => item.category))]}
                />
                <Search
                    onFilter={e => setFilterText(e.target.value)}
                    onClear={handleClear}
                    filterText={filterText}
                />
            </div>
        );
    }, [filterText, products, resetPaginationToggle]);

    return (
        <div>
            {visible && <ProductModal/>}

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
                onRowClicked={(row, e) => dispatch(openModal(row))}
            />
        </div>
    );
};

export {Products};