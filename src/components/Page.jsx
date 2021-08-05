function Page({ indexOfFirstItem, indexOfLastItem, totalItems }) {
    const isLess = totalItems < indexOfLastItem;
    return (
        <span>
            Showing {indexOfFirstItem + 1} to{" "}
            {isLess ? totalItems : indexOfLastItem} of {totalItems} entries
        </span>
    );
}

export default Page;
