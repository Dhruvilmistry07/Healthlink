
import React, { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar/index.jsx";
import Navbar1 from "../../components/navbar/index.jsx";
import Navbar from "../../components/navbarTwo/index.jsx";
import PatientDialog from "../../components/patientDialog/index.jsx";
import PatientsTable from "../../components/patientsTable/index.jsx";
import colors from "../../theme/color.js";
// import Loader from "../../components/loader/index.jsx";


const Patientlist = () => {
  // const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : [];
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState(["name", "email", "phone"]);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleDeletePatient = (index) => {
    setPatients((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredPatients = patients.filter((patient) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    if (filter.length === 0 || filter.includes("all")) {
      return (
        patient.name.toLowerCase().includes(query) ||
        patient.email.toLowerCase().includes(query) ||
        patient.phone.toLowerCase().includes(query) ||
        patient.address.toLowerCase().includes(query)
      );
    }
    return filter.some((field) => patient[field]?.toLowerCase().includes(query));
  });

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 800);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading ) return <Loader />;

  return (
    <>
    {/* <Navbar/> */}
    <div style={{ display: "flex" , background:colors.global}}>
      <Navbar1 openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    
    
      
      <div style={{flexGrow: 1, transition: "margin 0.3s", marginLeft: openSidebar ? 200 : 60, padding: 16}}>

        <SearchBar filter={filter} setFilter={setFilter} onAddPatient={() => setOpenDialog(true)}
          searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <PatientDialog
          open={openDialog}
          onClose={() => {
            setOpenDialog(false);
            setEditingIndex(null);
            setFormData({ name: "", email: "", phone: "", address: "" });
          }}
          formData={formData}
          setFormData={setFormData}
          editingIndex={editingIndex}
          onAddPatient={(newPatient) => setPatients((prev) => [...prev, newPatient])}
          onEditPatient={(updatedPatient) =>
            setPatients((prev) => prev.map((p, i) => (i === editingIndex ? updatedPatient : p)))
          }
        />

        {filteredPatients.length > 0 ? (
          <PatientsTable
            patients={filteredPatients}
            onEdit={(index) => {
              setEditingIndex(index);
              setFormData(patients[index]);
              setOpenDialog(true);
            }}
            filter={filter}
            onDelete={handleDeletePatient}
          />
        ) : (
          <h1 style={{ fontSize: "2rem", textAlign: "center", marginTop: "20px" }}>
            No patients found
          </h1>
        )}
      </div>
    
    </div>
    </>
  );
};

export default Patientlist;


