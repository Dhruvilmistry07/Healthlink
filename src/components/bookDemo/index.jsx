// import React from "react";
// import { TextField, Button, Checkbox, FormControlLabel, MenuItem } from "@mui/material";

// export default function ScheduleDemo() {
//   return (
//     <div style={{ 
//       display: "flex", 
//       justifyContent: "space-between", 
//       alignItems: "center", 
//       minHeight: "100vh", 
//       background: "linear-gradient(135deg, #1e1e9f, #2c2c54)", 
//       color: "white", 
//       padding: "40px" }}>
      
//       {/* Left side text */}
//       <div style={{ flex: 1, paddingRight: "40px" }}>
//         <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Schedule a Demo</h1>
//         <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
//           Let’s get some basic info, and then we will get you on the calendar!
//         </p>
//       </div>

//       {/* Right side form */}
//       <div style={{ 
//         flex: 1, 
//         background: "#1b1b3a", 
//         padding: "30px", 
//         borderRadius: "16px", 
//         boxShadow: "0px 4px 12px rgba(0,0,0,0.3)" 
//       }}>
//         <form>
//           <TextField 
//             label="Full Name" 
//             variant="outlined" 
//             fullWidth 
//             margin="normal" 
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{ style: { color: "white" } }}
//           />
//           <TextField 
//             label="Phone Number" 
//             variant="outlined" 
//             fullWidth 
//             margin="normal" 
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{ style: { color: "white" } }}
//           />
//           <TextField 
//             label="Email Address" 
//             variant="outlined" 
//             fullWidth 
//             margin="normal" 
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{ style: { color: "white" } }}
//           />
//           <TextField 
//             label="Name of Company" 
//             variant="outlined" 
//             fullWidth 
//             margin="normal" 
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{ style: { color: "white" } }}
//           />
//           <TextField
//             select
//             label="How did you hear about us?"
//             fullWidth
//             margin="normal"
//             variant="outlined"
//             InputLabelProps={{ style: { color: "white" } }}
//             SelectProps={{
//               style: { color: "white" }
//             }}
//           >
//             <MenuItem value="google">Google</MenuItem>
//             <MenuItem value="friend">Friend</MenuItem>
//             <MenuItem value="social">Social Media</MenuItem>
//           </TextField>
//           <TextField 
//             label="Anything else you want us to know?" 
//             variant="outlined" 
//             fullWidth 
//             margin="normal" 
//             multiline 
//             rows={3}
//             InputLabelProps={{ style: { color: "white" } }}
//             InputProps={{ style: { color: "white" } }}
//           />

//           <Button 
//             variant="contained" 
//             fullWidth 
//             style={{ 
//               marginTop: "20px", 
//               borderRadius: "30px", 
//               background: "linear-gradient(90deg, #5a5ae0, #8a8aff)" 
//             }}
//           >
//             Submit Information
//           </Button>

//           {/* Checkbox below submit */}
//           <FormControlLabel 
//             control={<Checkbox style={{ color: "white" }} />} 
//             label="I agree to the terms and conditions" 
//             style={{ marginTop: "10px", color: "white" }}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }


import React   from 'react'

import { 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  MenuItem, 
  Dialog, 
  DialogContent 
} from "@mui/material";

const index = () => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent style={{ background: "linear-gradient(135deg, #1e1e9f, #2c2c54)", color: "white" }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            gap: "40px", 
            alignItems: "center", 
            padding: "20px" 
          }}>
            
            {/* Left side */}
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: "40px" }}>Schedule a Demo</h1>
              <p style={{ fontSize: "18px" }}>
                Let’s get some basic info, and then we will get you on the calendar!
              </p>
            </div>

            {/* Right side form */}
            <div style={{ 
              flex: 1, 
              background: "#1b1b3a", 
              padding: "30px", 
              borderRadius: "16px" 
            }}>
              <form>
                <TextField label="Full Name" fullWidth margin="normal" variant="outlined" />
                <TextField label="Phone Number" fullWidth margin="normal" variant="outlined" />
                <TextField label="Email Address" fullWidth margin="normal" variant="outlined" />
                <TextField label="Name of Company" fullWidth margin="normal" variant="outlined" />
                <TextField
                  select
                  label="How did you hear about us?"
                  fullWidth
                  margin="normal"
                  variant="outlined">

                  <MenuItem value="google">Google</MenuItem>
                  <MenuItem value="friend">Friend</MenuItem>
                  <MenuItem value="social">Social Media</MenuItem>
                </TextField>
                <TextField 
                  label="Anything else you want us to know?" 
                  fullWidth 
                  margin="normal" 
                  multiline 
                  rows={3} 
                  variant="outlined"
                />

                <Button 
                  variant="contained" 
                  fullWidth 
                  style={{ marginTop: "20px", borderRadius: "30px" }}
                >
                  Submit Information
                </Button>

                <FormControlLabel 
                  control={<Checkbox />} 
                  label="I agree to the terms and conditions" 
                  style={{ marginTop: "10px" }}
                />
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default index
