import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const PetTable = ({ pets, showButtons = true, handleEditClick, deletePet }) => {
  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              borderCollapse: "collapse",
              "& .MuiTableCell-root": {
                fontFamily: "'Montserrat', sans-serif",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightskyblue" }}
                >
                  Animal
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightskyblue" }}
                >
                  Description
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightskyblue" }}
                >
                  Age
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", backgroundColor: "lightskyblue" }}
                >
                  Price
                </TableCell>
                {showButtons && (
                  <TableCell
                    sx={{ fontWeight: "bold", backgroundColor: "lightskyblue" }}
                  >
                    Actions
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {pets.map((pet) => (
                <TableRow key={pet.id}>
                  <TableCell>{pet.animal}</TableCell>
                  <TableCell>{pet.description}</TableCell>
                  <TableCell>{pet.age}</TableCell>
                  <TableCell>{pet.price}</TableCell>
                  {showButtons && (
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handleEditClick(pet.id)}
                          startIcon={<EditIcon />}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          size="small"
                          onClick={() => deletePet(pet.id)}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default PetTable;
