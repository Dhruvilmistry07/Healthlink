// import React from "react";
// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from "@mui/material";

// import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
// import CustomButton from "../Buttons";
// import colors from "../../theme/color";


// const PatientsTable = ({ patients = [], onDelete = () => { }, filter = "", onEdit = () => { } }) => {

//   return (
//     <TableContainer component={Paper} sx={{ mt: 3,  maxHeight: 645, overflowY: 'auto' }}>

//       <Table  stickyHeader>
//         <TableHead>
//           <TableRow sx={{ backgroundColor: "grey"  }}>
//             <TableCell><b>No</b></TableCell>
//             {(filter.length === 0 || filter.includes("name")) && (<TableCell><b>Name</b></TableCell>)}
//             {(filter.length === 0 || filter.includes("email")) && (<TableCell ><b>Email</b></TableCell>)}
//             {(filter.length === 0 || filter.includes("phone")) && (<TableCell><b>Phone</b></TableCell>)}
//             {(filter.length === 0 || filter.includes("address")) && (<TableCell><b>Address</b></TableCell>)}
//              <TableCell><b>Action</b></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {patients.map((patient, index) => (
//             <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: colors.table} }}>
//               <TableCell>{index + 1}</TableCell>
//               {(filter.length === 0 || filter.includes("name")) && (<TableCell sx={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>{patient.name}</TableCell>)}
//               {(filter.length === 0 || filter.includes("email")) && (<TableCell sx={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>{patient.email}</TableCell>)}
//               {(filter.length === 0 || filter.includes("phone")) && (<TableCell sx={{ fontFamily: "sans-serif", fontSize: "0.9rem" }}>{patient.phone}</TableCell>)}
//               {(filter.length === 0 || filter.includes("address")) && (
//                 <TableCell title={patient.address} sx={{
//                   cursor: "Pointer", whiteSpace: "nowrap", overflow: "hidden",
//                   textOverflow: "ellipsis", maxWidth: "100px"
//                 }}>{patient.address}</TableCell>
//               )}

//               <TableCell>

//                 <IconButton title="Edit" color="primary" onClick={() => onEdit(index)}>
//                   <EditNoteOutlinedIcon />
//                 </IconButton>

               
//                 <CustomButton onConfirm={() => onDelete(index)} deleteButton={true} />

//               </TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//   );
// };

// export default PatientsTable;



import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import CustomButton from "../Buttons";

const PatientsTable = ({ patients = [], onDelete = () => {}, filter = "", onEdit = () => {} }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 3, maxHeight: 645 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            {(filter.length === 0 || filter.includes("name")) && <TableCell>Name</TableCell>}
            {(filter.length === 0 || filter.includes("email")) && <TableCell>Email</TableCell>}
            {(filter.length === 0 || filter.includes("phone")) && <TableCell>Phone</TableCell>}
            {(filter.length === 0 || filter.includes("address")) && <TableCell>Address</TableCell>}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {patients.map((patient, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              {(filter.length === 0 || filter.includes("name")) && (
                <TableCell>{patient.name}</TableCell>
              )}
              {(filter.length === 0 || filter.includes("email")) && (
                <TableCell>{patient.email}</TableCell>
              )}
              {(filter.length === 0 || filter.includes("phone")) && (
                <TableCell>{patient.phone}</TableCell>
              )}
              {(filter.length === 0 || filter.includes("address")) && (
                <TableCell
                  title={patient.address}
                  sx={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "120px",
                  }}
                >
                  {patient.address}
                </TableCell>
              )}

              <TableCell>
                <IconButton title="Edit" color="primary" onClick={() => onEdit(index)}>
                  <EditNoteOutlinedIcon />
                </IconButton>
                <CustomButton onConfirm={() => onDelete(index)} deleteButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PatientsTable;
