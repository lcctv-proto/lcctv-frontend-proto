import { Search } from "react-bootstrap-icons";

function SearchBar({ placeholder, searchTerm, setSearchTerm }) {
    return (
        <div className="col-3 ms-auto">
            <div className="input-group">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="form-control border-end-0"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                    maxLength="20"
                />
                <span className="input-group-text bg-white ">
                    <div className="border-start-0">
                        <Search />
                    </div>
                </span>
            </div>
        </div>
    );
}

export default SearchBar;
