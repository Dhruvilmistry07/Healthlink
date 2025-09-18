import React, { useState } from "react";
import { Button, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomButton = ({ fullWidth = true, onConfirm, deleteButton = false, children, ...props}) => {
    const [open, setOpen] = useState(false);

    
    const handleOpen = () => setOpen(true);

    
    const handleClose = () => setOpen(false);

   
    const handleConfirm = () => {
        onConfirm?.();
        setOpen(false);
        console.log("Item deleted");
    };

    return (
        <>
            {deleteButton ? (
                <>
                    
                    <IconButton title="Delete" color="error" onClick={handleOpen}>
                        <DeleteIcon />
                    </IconButton>

                    {/* Confirmation Dialog */}
                    <Dialog 
                        open={open}
                        onClose={handleClose}>
                      <div style={{padding:"0.5rem", backgroundColor:"white"}}>
                        <DialogTitle id="alert-dialog-title" sx={{fontSize:"1.5rem"}}>{"Confirm Deletion"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description" sx={{ fontSize: "1.2rem" }}>
                                Are you sure you want to delete this item? .
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary" variant="outlined">
                                Cancel
                            </Button>
                            <Button onClick={handleConfirm} color="error" autoFocus variant="contained">
                                Yes, Delete
                            </Button>
                        </DialogActions>
                        </div>
                    </Dialog>
                </>
            ) : (
                <Button
                    {...props}
                    onClick={props.onClick}
                    variant={props.variant || "contained"}
                    fullWidth={fullWidth}
                    color={props.color || "primary"}
                    sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        borderRadius: "8px",
                        textTransform: "none",
                        ...props.sx,
                    }}
                >
                    {children}
                </Button>
            )}
        </>
    );
};

export default CustomButton;
