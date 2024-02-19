import React, { useEffect, useRef, useState } from 'react';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, FormControl, TextField, Grid, Select, MenuItem, TablePagination, Pagination } from '@mui/material';
// import tableData from '../assets/data/CountryCodes';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import MydarkButton from './Global/MydarkButton';
import { useDispatch } from 'react-redux';
import { editOrder, toggleDispatch, updateDispatch } from '../features/authSlice';
import { toast } from 'react-toastify';

function AlertDialog({
  open,
  setOpen,
  row,
  dispatch,
  orderData
 
}) {
 
  const [order, setorder] = useState(
    {
      customer: "",
      date: "",
      email: "",
      dispatch: '',
      ordertype: "",
      country: "",
      id:'',
      shipify:"",
      shipping:"",
      source:"",
      status:""
      
    }
  )
  
 
  const myRef = useRef(null);
  // console.log(row,"row");
  console.log(order,"order==================");
  
  const handleClose = () => {
    setOpen(false);
  };

  const executeScroll = () => {
  
    myRef?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    setTimeout(() => {
      myRef?.current?.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 400);
  };

  useEffect(() => {

    if(open){
      executeScroll()
    }
   
  }, [open])

  useEffect(() => {
    if(row){
      setorder(
        {
          ...order,
          customer: row?.customer,
        date: row?.date,
        email:  row?.email,
        dispatch:  row?.dispatch,
       ordertype:  row?.ordertype,
        country:  row?.country,
        id: row?.id,
        shipify:  row?.shipify,
        shipping: row?.shipping,
        source: row?.source,
        status: row?.status
        }
     )
    }
    
  }, [row])
  
  const updateOrderListEdit = (e) => {
    const { name, value } = e.target;

    setorder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));

  
  }
  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        // fullWidth="true"
        maxWidth="lg"
        // maxHeight="true"
        scroll="paper"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className="flex"  ref={myRef}>
        <div >
        <Typography variant="heading" sx={{ fontSize: "20px" }}>
            Order
          </Typography>
        </div>
         
          <div  className="ml-auto">
          <Button className="ml-auto"  sx={{color:"#000"}} onClick={() => setOpen(false)}>
            <CloseIcon />
          </Button>
          </div>
        
        </DialogTitle>
        <form
          onSubmit={ (e) => {
            e.preventDefault();

              dispatch(editOrder(order))
              toast.info('Order Edited Successfully !')
              setOpen(false)
           } }>
          <DialogContent sx={{ height: "auto" }}>

         
                
                   
                      <Grid container>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            {" "}
                            Customer Name <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            required
                            name="customer"
                            // id="customer"
                            value={order?.customer}
                            onChange={
                              updateOrderListEdit
                            }
                            placeholder="Enter full name of customer"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>
  
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            {" "}
                            Email Address{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="email"
                            variant="outlined"
                            name="email"
                            id="email"
                            value={order?.email}
                            required
                            onChange={updateOrderListEdit}
                            placeholder="Enter email of contact person"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            {" "}
                            Dispatch{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                            
                          <Select fullWidth  name='dispatch'  value={order?.dispatch}   onChange={updateOrderListEdit} sx={{borderRadius:"10px"}}>
                            <MenuItem value="true">Yes</MenuItem>
                            <MenuItem value="false">No</MenuItem>
                            {/* Add other options as needed */}
                        </Select>
                        
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            Country{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="country"
                            id="country"
                            required
                            value={order?.country}
                            onChange={updateOrderListEdit}
                            placeholder="Enter country"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>

                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            Shipping{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="shipping"
                            id="shipping"
                            required
                            value={order?.shipping}
                            onChange={updateOrderListEdit}
                            placeholder="Enter shipping"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            Order Type{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <Select fullWidth
                            sx={{borderRadius:"10px"}}
                            value={order?.ordertype} 
                            name='ordertype'
                            onChange={updateOrderListEdit}
                            >
                                <MenuItem value="all">All</MenuItem>
                                <MenuItem value="Online">Online</MenuItem>
                                <MenuItem value="In-Store">Store</MenuItem>
                            </Select>
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            Source{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="source"
                            id="source"
                            required
                            value={order?.source}
                            onChange={updateOrderListEdit}
                            placeholder="Enter source"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                            Status{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <Select fullWidth  name='status' value={order?.status} onChange={updateOrderListEdit} sx={{borderRadius:"10px"}}>
                            <MenuItem value="Dlivered">Delivered</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            {/* Add other options as needed */}
                        </Select>
  
                          {/* <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="status"
                            id="status"
                            required
                            value={order?.status}
                            onChange={updateOrderListEdit}
                            placeholder="Enter status"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          /> */}
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                          SHIPIFY{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                            fullWidth
                            type="text"
                            variant="outlined"
                            name="shipify"
                            id="shipify"
                            required
                            value={order?.shipify}
                            onChange={updateOrderListEdit}
                            placeholder="Enter shipify"
                            sx={{
                              mt: 1,
                              "& fieldset": {
                                borderRadius: "10px",
                              },
                            }}
                          />
                        </Grid>
                        <Grid md={12} sx={{ my: 2 }}>
                          <Typography variant="heading" sx={{ fontSize: "14px" }}>
                          Date{" "}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
  
                          <TextField
                    type="date"
                    sx={{
                      width: "100%",

                      "& fieldset": {
                        borderRadius: "10px",
                      },
                    }}
                    name="date"
                    value={order?.date}
                    onChange={updateOrderListEdit}
                    required
                  />
                            
                        </Grid>
                        

                        
                        
                       
                      
                      </Grid>
                   
                 
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={{ mr: 4 }}>
              Cancel
            </Button>
            <MydarkButton
              type="submit"
              autoFocus
              style={{ width: "106px", marginLeft: "8px" }}
            >
            {'Save'}
             
            </MydarkButton>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}



function OrderTable({orderData,columnVisibility,paginatedData}) {
  const [open, setOpen] = React.useState(false);
  const [openDialogForRow, setOpenDialogForRow] = useState(null);
  const [Ischeck, setIscheck] = useState(null)


   const dispatch = useDispatch()
  const handleOpenDialog = (rowId) => {
    setOpenDialogForRow(rowId);
  };

  const handleCloseDialog = () => {
    setOpenDialogForRow(null);
  };
  

  return (
    <>

  
    <TableContainer component={Paper} >
    {orderData && orderData.length > 0 ? ( 
      <Table sx={{ minWidth:" 750px" }}>
        <TableHead sx={{backgroundColor:"#d3d3d38a"}} >
          <TableRow>
            <TableCell>
              <Checkbox  
                checked ={Ischeck}
                onChange={(e) => {
                  setIscheck(e.target.checked)
                  if(Ischeck){
                    dispatch(toggleDispatch('false'))
                  }else{
                    dispatch(toggleDispatch('true'))
                  }
                
                }}

              /> {/* Checkbox for select all */}
            </TableCell>
            {Object.keys(columnVisibility).map((columnName) => (
              columnVisibility[columnName] && (
                <TableCell key={columnName}>{columnName}</TableCell>
              )
            ))}
            <TableCell>&nbsp;&nbsp;&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Sample data rows */}
          { paginatedData && paginatedData.map((row) => (
            <>

          
            <TableRow key={row.id}>
            <TableCell>
                <Checkbox  checked ={row?.dispatch == 'true' ? true:false}   onChange={(e) => {
                    const isChecked = e.target.checked;
                  
                          dispatch(updateDispatch({id:row.id, isChecked}));
                }}/>
              </TableCell>
              {Object.keys(columnVisibility).map((columnName) => (
                columnVisibility[columnName] && (
                  <TableCell key={columnName}>{row[columnName.toLowerCase()]}</TableCell>
                )
              ))}
              <TableCell>
                <IconButton onClick={() =>  handleOpenDialog(row?.id)}>
                  <DriveFileRenameOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            {openDialogForRow === row.id && (
                    <AlertDialog
                      open={true}
                      setOpen={handleCloseDialog}
                      row={row}
                      dispatch ={dispatch}
                      orderData={orderData}
                    />
                  )}
          
           </>
          ))}
         
          {/* Add more data rows as needed */}
        </TableBody>
      </Table>
      
      ):"No Data...."}
     
     
    </TableContainer>



    </>
  );
}

export default OrderTable;
