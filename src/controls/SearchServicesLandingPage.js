/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import "../css/stylesGlobalOverRide.css"
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

export default function Filter() {
  return (
    <Autocomplete
      id="filter-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      style={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} placeholder="¿Qué te gustaría aprender hoy?" variant="outlined" variant="outlined"
        classes={{
          root: "rootTextFieldAutoComplete"
        }} />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Liderazgo', year: 1994 },
  { title: 'Gestion', year: 1972 }
];
