import React from "react";
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import SearchBar from "material-ui-search-bar";
import './AdminTop.css'

const Search = () => {
    return (

        <div className="adminTops">
            <div className="search">
                <SearchBar
                    className="search"
                    onChange={() => console.log('onChange')}
                    onRequestSearch={() => console.log('onRequestSearch')}
                    style={{

                    }}
                />
                <div className="end">
                    <HomeIcon />
                </div>
            </div>
        </div>

    );
}

export default Search