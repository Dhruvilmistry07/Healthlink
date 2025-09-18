import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const PatientDialog = ({
  open,
  onClose,
  formData,
  setFormData,
  onAddPatient,
  onEditPatient,
  editingIndex,
}) => {
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingIndex !== null) {

      onEditPatient(formData);
    } else {
      onAddPatient(formData);
    }

    setFormData({ name: "", email: "", phone: "", address: "" });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Patient</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="dense"
            placeholder="Enter full name"
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            FormHelperTextProps={{
              style: { marginLeft: "1px" },
            }}
          />
          <TextField
            margin="dense"
            placeholder="Enter email address"
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            FormHelperTextProps={{
              style: { marginLeft: "1px" },
            }}
          />
          <TextField
            margin="dense"
            name="phone"
            placeholder="Enter phone number"
            label="Phone"
            fullWidth
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 10 && /^[0-9]*$/.test(value)) {
                setErrors({ ...errors, phone: "" });
                setFormData({ ...formData, phone: value });
              }
            }}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            FormHelperTextProps={{
              style: { marginLeft: "1px" },
            }}
          />
          <TextField
            margin="dense"
            name="address"
            label="Address"
            placeholder="Enter address"
            fullWidth
            value={formData.address}
            onChange={handleChange}
            error={Boolean(errors.address)}
            helperText={errors.address}
            FormHelperTextProps={{
              style: { marginLeft: "1px" },
            }}
          />
          <DialogActions>

                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="contained"> Submit </Button>

          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PatientDialog;
