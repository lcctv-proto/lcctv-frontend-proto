function SearchError({ searchTerm, small }) {
    return (
        <div className={`text-center ${small ? "" : "mt-5 pt-5"}`}>
            <h1>-{searchTerm.toUpperCase()}- not found!</h1>
            <h3>Please check your search terms and try again.</h3>
        </div>
    );
}

export default SearchError;
