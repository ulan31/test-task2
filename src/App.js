import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import {logDOM} from "@testing-library/react";

const topFilms = [
    { label: 'ulan' },
    { label: 'ulan1' },
    { label: 'ulan2' },
]

const change = (e) => console.log(e)

function App() {
  return (
      <form>
          <Box>
              <Grid container>
                  <Grid item xs={12} md={6} lg={4}>
                      <Paper>
                          <Autocomplete
                              id='ttt'
                              options={topFilms}
                              onOpen={change}
                              freeSolo
                              renderInput={(params) => <TextField {...params}  id="outlined-basic" label="Outlined" variant="outlined" />}
                          />
                      </Paper>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                      <Paper>
                          <Button type={"submit"} variant="contained">Submit</Button>
                      </Paper>
                  </Grid>
              </Grid>
          </Box>
      </form>
  )
}

export default App;
