import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  ListItemText
} from "@mui/material";

import { Checkbox} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import colors from "../../theme/color.js";

export default function SearchBar({ setSearchQuery, filter, setFilter, onAddPatient }) {

 
  return (
    <Box sx={{
      display: "flex",  gap: 2, width: "100%",
      p: 2, backgroundColor: colors.avatarText, boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", borderRadius: 2, mt: 8,
    }} >

      <TextField
        size="small"
        placeholder="Search patient..."
        variant="outlined"
        sx={{ flex: 1, minWidth: 200 }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <FormControl size="small">
        <Select
          multiple
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          displayEmpty
          renderValue={() => (
            <FilterListIcon color="primary" />
          )}
          sx={{ minWidth: 50 }}>
            
          {["name", "email", "phone", "address"].map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={filter.includes(option)} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <Button variant="outlined" startIcon={<PersonAddIcon />}
        onClick={onAddPatient} sx={{ whiteSpace: "nowrap" }}>
        Add Patient
      </Button>


    </Box>
  );
}

