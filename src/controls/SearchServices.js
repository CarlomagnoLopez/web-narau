/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
    createFilterOptions
} from "@material-ui/lab/Autocomplete";
import "../css/stylesGlobalOverRide.css"
const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: option => option.nameService
});

export default function SearchServices(props) {
    console.log(props)
    return (
        <Autocomplete
            id="filter-demo"
            
            options={props.dataFilter}
            getOptionLabel={option => option.nameService}
            filterOptions={filterOptions}
            style={{ width: "100%" }}
            renderInput={params => (
                <TextField {...params} placeholder="Buscar servicios..." onChange={props.onTypeFilter} classes={{
                    root: "rootSearchTextField"
                }} variant="outlined" />
            )}
        />
    );
}

