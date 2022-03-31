const Search = (props) => {
    return (

            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search"
                />
                <button type="submit" hidden={true}>Search</button>
            </form>


    );
};

export default Search;