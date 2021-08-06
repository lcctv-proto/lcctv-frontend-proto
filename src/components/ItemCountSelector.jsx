function ItemCountSelector({
    itemsPerPage,
    setItemsPerPage,
    name,
    setCurrentPage,
}) {
    return (
        <div className="col-2 align-items-center d-flex">
            <span className="me-2">Show</span>
            <select
                name="entries"
                id="entries"
                className="form-select text-end"
                value={itemsPerPage}
                onChange={(e) => {
                    setItemsPerPage(e.target.value);
                    setCurrentPage(1);
                }}
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <span className="ms-2">{name}</span>
        </div>
    );
}

export default ItemCountSelector;
