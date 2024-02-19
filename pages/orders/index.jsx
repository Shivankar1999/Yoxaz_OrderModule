import React, { useEffect, useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from "@mui/material/Dialog";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
// import { DataGrid } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
// import { nanoid } from '@reduxjs/toolkit'

import { Container, Grid, Typography, Button, TextField, Select, MenuItem, Box, FormControl, Checkbox, useMediaQuery } from '@mui/material';
import MydarkButton from '../../src/Components/Global/MydarkButton';
import OrderTable from '../../src/Components/OrderTable';

import { useDispatch, useSelector } from "react-redux";
import { addOrders } from '../../src/features/authSlice';
import { toast } from 'react-toastify';

function AlertDialog({
    open,
    setOpen,
     orders,
     orderData,
    orderDetails,
    setOrderDetails,
    updateOrderDetails,
    dispatch
   
  }) {
    const myRef = useRef(null);
  
    const setIdOfNewOrder = () =>{
                      
        let index = 0; // index of state array -rows
        let fieldValue = orderData && orderData.length +1
        const tempcompanyDetails = [...orderDetails];
        const tempObj = orderDetails[index];
        tempObj['id'] = fieldValue;
        tempcompanyDetails[index] = tempObj;
        setOrderDetails(tempcompanyDetails);
    }
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
              Company Details
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
              setIdOfNewOrder()
                // console.log(companyDetails)

                
                dispatch(addOrders({...orderDetails[0]}))
                toast.success(`New Order added of user:- ${orderDetails[0]?.email}`)
                 setOpen(false)
                 setOrderDetails([
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
          
        },
                 ])
           } }>
            <DialogContent sx={{ height: "auto" }}>
              <div className="flex flex-col">
                {orderDetails.map((ele, ind) => (
                  <>
                    <FormControl className="block mt-3 ">
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
                            id="customer"
                            value={ele?.customer}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                            value={ele?.email}
                            required
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                            
                          <Select fullWidth  name='dispatch' onChange={(e) => updateOrderDetails(e,ind)} sx={{borderRadius:"10px"}}>
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
                            value={ele?.country}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                            value={ele?.contactPersonName}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                            // defaultalue={ele?.ordertype} 
                            name='ordertype'
                            onChange={(e) => {
                              updateOrderDetails(e,ind)
                            }}
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
                            value={ele?.source}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                          <Select fullWidth  name='status' onChange={(e) => updateOrderDetails(e,ind)} sx={{borderRadius:"10px"}}>
                            <MenuItem value="Delivered">Delivered</MenuItem>
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
                            value={ele?.status}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                            value={ele?.shipify}
                            onChange={(e) => {
                              updateOrderDetails(e, ind);
                            }}
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
                    value={ele?.date}
                    onChange={(e) =>updateOrderDetails(e,ind)}
                    required
                  />
                            
                        </Grid>
                        
  
                        
                        
                       
                      
                      </Grid>
                    </FormControl>
                  </>
                ))}
              </div>
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

const OrderModule = () => {
    const {orders} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [orderData, setorderData] = useState(null)
    const [orderDetails, setOrderDetails] = useState([
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
          
        },
      ]);

      const isDesktop = useMediaQuery("(min-width:1000px)");



// Search and filter
const [searchText, setsearchText] = useState('')
const [filterByStatus, setfilterByStatus] = useState('all')
const [filterByCategory, setByfilterByCategory] = useState('all')
const [columnVisibility, setColumnVisibility] = useState({
    ID: true,
    SHIPIFY: true,
    DATE: true,
    STATUS: true,
    CUSTOMER: true,
    EMAIL: true,
    COUNTRY: true,
    SHIPPING: true,
    SOURCE: true,
    ORDERTYPE: true,
  });

  // Pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = orderData && orderData.slice(startIndex, endIndex);

  const toggleColumnVisibility = (columnName) => {
    setColumnVisibility({
      ...columnVisibility,
      [columnName]: !columnVisibility[columnName],
    });
  };

  const handleSearch = (searchText) => {
    const filteredData = orderData.filter(item =>
        item.customer.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
        item.ordertype.toLowerCase().includes(searchText.toLowerCase()) ||
        item.country.toLowerCase().includes(searchText.toLowerCase()) ||
        item.source.toLowerCase().includes(searchText.toLowerCase()) 
       
   
      );
      setorderData(filteredData);
    console.log(filteredData);

  }
  const filterByStatusFunc = (status) => {
    
    if(status == 'delivered'){
        let deliveredOrder = orders.filter((order) =>   order.status.toLowerCase().includes(status.toLowerCase()) )
        setorderData(deliveredOrder)
        console.log(deliveredOrder);
    }else if(status == 'pending'){
        let deliveredOrder = orders.filter((order) =>  order.status.toLowerCase().includes(status.toLowerCase())  )
        setorderData(deliveredOrder)
        console.log(deliveredOrder);
    }else{
        setorderData(orders)
    }
      

  }
  const filterByCategoryFunc = (category) => {
    
    if(category == 'online'){
        let deliveredOrder = orders.filter((order) =>   order.ordertype.toLowerCase().includes(category.toLowerCase()) )
        setorderData(deliveredOrder)
        console.log(deliveredOrder);
    }else if(category == 'store'){
        let deliveredOrder = orders.filter((order) =>  order.ordertype.toLowerCase().includes(category.toLowerCase())  )
        setorderData(deliveredOrder)
        console.log(deliveredOrder);
    }else{
        setorderData(orders)
    }
      

  }

      const updateOrderDetails = (e, idx, ) => {
        let prope = e.target.name; // the custom column attribute
    
        let index = idx; // index of state array -rows
        let fieldValue;
    
      
          fieldValue = e.target.value;

        const temporderDetails = [...orderDetails];
        const tempObj = orderDetails[index];
        tempObj[prope] = fieldValue;
        temporderDetails[index] = tempObj;
        setOrderDetails(temporderDetails);
      };
   
    
      useEffect(() => {
          if(orders){
            setorderData(orders)
          }
          if(searchText == ''){
            setorderData(orders)
          }
           
        
       

      }, [orders,searchText])
      
    

   
  return (
    <>

    <Container   maxWidth="xl"  sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh"}}>
      {/* First section */}
      <div style={{width:"100%",height:"inherit",padding:"10px",}} className=' flex flex-col my-auto '>

      
      <Grid container alignItems="center" sx={{mb:2}}>
        <Grid item xs={6}>
          <Typography variant="heading">Orders</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <MydarkButton variant="contained" color="primary" style={{height:"40px",padding: "5px 25px",fontSize: "smaller"}} onClick = {() => setOpen(true)}>CREATE NEW</MydarkButton>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" sx={{mx:"4px",mt:"15px"
      ,backgroundColor:"#fff",boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`, width:"inherit", display:"flex",boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,borderRadius:"15px",
      justifyContent:"flex-start",alignItems:"center",
      height:"auto",
      // minHeight:"170px",
      borderRadius:"15px",
      p:"10px",
      pb:"16px",
      
      
      boxSizing:"border-box"}}>
        <Grid item xs={12} md={4}>
        <Typography variant="heading" style={{fontSize:"medium",mb:'2px'}}>What are you looking for ?</Typography>
          <TextField fullWidth  placeholder='Search for category,company,name etc.'  
            sx={
                {
                  backgroundColor:"#E7E7E7",
                  outline:"none",
                  color:"#fff",
                    "& fieldset": {
                    
                    borderRadius: "10px",
                        
                      },
                }
            }
            InputProps={{
                  startAdornment: (
                    <SearchIcon  sx={{color:"#000"}}/>
                  ),
                }}

               value={searchText} 
               onChange={(e) => setsearchText(e.target.value)}
          />

        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="heading" style={{fontSize:"medium",mb:'2px'}}>Category</Typography>
          <Select fullWidth
          sx={{borderRadius:"10px"}}
          defaultValue={filterByCategory} 
          onChange={(e) => {
            setByfilterByCategory(e.target.value)
              filterByCategoryFunc(e.target.value)

          }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="online">Online</MenuItem>
            <MenuItem value="store">Store</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Typography variant="heading" style={{fontSize:"medium",mb:'2px'}} >Status</Typography>
          <Select fullWidth  sx={{borderRadius:"10px"}} placeholder='Status' defaultValue={filterByStatus} 
          onChange={(e) => {
            setfilterByStatus(e.target.value)
              filterByStatusFunc(e.target.value)

          }}>
            <MenuItem value="all" >All</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </Select>
        </Grid>
        <Grid item height={{ xs: 'auto', md: '100%' }} xs={12} md={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",}}>
        <MydarkButton variant="contained" color="primary" w= 'full'  style={{height:"40px",padding: "5px 25px",fontSize: "smaller",marginTop: "15px"}}
         onClick = {() => {
            if(searchText !== ""){
                handleSearch(searchText)
            }
         }}
        > SEARCH</MydarkButton>
        </Grid>
      </Grid>

        <Box  sx={{ boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,borderRadius:"15px",height:"auto",minHeight:"700px",overflowX:"",overflow:"hidden",mt:"10px"}}>


                <Grid container mb={{sm:"150px",md:"auto"}} spacing={2} sx={{mx:"4px",mt:"10px",width:"100%",padding:"10px",height:"15%"}}>
                    <Grid item width={{xs:"100%",md:"20%"}} sx={{height:"fit-content",mb:"4px"}}   >
                    <Typography variant="heading" sx={{fontSize:"20px"}}>Product Summary</Typography>
                    </Grid>
                    
                {isDesktop ? ( <Grid item   sx={{width:"80%",height:"fit-content"}} >
                    <Grid container spacing={2} sx={{display:"flex",justifyContent:"flex-end"}}>
                        <Grid item xs={6} md = {2} className=' flex justify-end  items-center'>
                          Show
                        </Grid>
                        <Grid item xs={6} md = {3} sx={{mt:[-1]}}>
                        <Select
                                    multiple
                                    value={Object.keys(columnVisibility).filter(column => columnVisibility[column])}
                                    sx={{width:"100%",borderRadius:"10px"}}
                                    onChange={(event) => {
                                    const { value } = event.target;
                                    const newVisibility = { ...columnVisibility };
                                    Object.keys(newVisibility).forEach(column => {
                                        newVisibility[column] = value.includes(column);
                                    });
                                    
                                    setColumnVisibility(newVisibility);
                                    }}
                                    renderValue={(selected) => selected.join(', ')}
                                >
                                    {Object.keys(columnVisibility).map((columnName) => (
                                    <MenuItem key={columnName} value={columnName}>
                                        <Checkbox checked={columnVisibility[columnName]} />
                                        {columnName}
                                    </MenuItem>
                                    ))}
                                </Select>
                        </Grid>
                        <Grid item xs={6} md = {3}  >
                        <MydarkButton variant="contained" color="primary" style={{height:"40px", width:"100%",padding: "5px 25px",fontSize: "smaller"}} 
                        
                        onClick ={() => {
                          let filterOrder  =  orderData.filter((order) => order?.dispatch !== 'true')
                          //  paginatedData = filterOrder
                          setorderData(filterOrder)

                          // console.log(filterOrder)
                        }}
                        >DISPATCH SELECTED</MydarkButton>
                        </Grid>
                        <Grid item xs={12} md = {4} className=' flex justify-center'>
                    
                        {/* <Pagination count={10} shape="rounded"  SX={{width:"100%"}}/> */}
                        <Pagination
                        count={Math.ceil( orderData &&  orderData.length / rowsPerPage)}
                         shape="rounded"
                        page={page}
                        sx={{'& .Mui-selected': { backgroundColor: 'lightblue', color: 'white' }}} 
                        onChange={handleChangePage}
                      />
                                
            
                        </Grid>
                    </Grid>
                    </Grid>): (<div className='my-4 p-2 w-full h-auto'>
                      <Grid container  spacing={2} sx={{width:"100%"}}>
                      
                        
                      <Grid item xs={12} md={6}>
                    <Select
                      multiple
                      value={Object.keys(columnVisibility).filter(column => columnVisibility[column])}
                      onChange={(event) => {
                        const { value } = event.target;
                        const newVisibility = { ...columnVisibility };
                        Object.keys(newVisibility).forEach(column => {
                          newVisibility[column] = value.includes(column);
                        });

                        setColumnVisibility(newVisibility);
                      }}
                      renderValue={(selected) => selected.join(', ')}
                      sx={{ width: "100%", borderRadius: "10px" }}
                    >
                      {Object.keys(columnVisibility).map((columnName) => (
                        <MenuItem key={columnName} value={columnName}>
                          <Checkbox checked={columnVisibility[columnName]} />
                          {columnName}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>

                         
                      
                        <Grid item xs={12} md = {3}  >
                        <MydarkButton variant="contained" w='full' color="primary" style={{height:"40px", width:"100%",padding: "5px 25px",fontSize: "smaller"}} 
                        
                        onClick ={() => {
                          let filterOrder  =  orderData.filter((order) => order?.dispatch !== 'true')
                          //  paginatedData = filterOrder
                          setorderData(filterOrder)

                          // console.log(filterOrder)
                        }}
                        >DISPATCH SELECTED</MydarkButton>
                        </Grid>
                        <Grid item xs={12} md = {4} className=' flex justify-center'>
                    
                     
                        <Pagination
                        count={Math.ceil( orderData &&  orderData.length / rowsPerPage)}
                         shape="rounded"
                        page={page}
                        sx={{'& .Mui-selected': { backgroundColor: 'lightblue', color: 'white' }}} 
                        onChange={handleChangePage}
                      />
                                
            
                        </Grid>
                    </Grid>
                    </div>) }
                   
                
                </Grid>
                <Grid  container  xs = {12} className='border ' sx={{overflow:"scroll"}}  height={{sm:"auto",md:"85%"}}>
          {isDesktop ? (    <OrderTable orderData={orderData} columnVisibility={columnVisibility} paginatedData={paginatedData}/>): (
            <div style={{display:""}}>
            <OrderTable orderData={orderData} columnVisibility={columnVisibility} paginatedData={paginatedData}/>
            </div>
          )}
                    
                </Grid>
        </Box>
      
      </div>
    </Container>

    {open && (
        <AlertDialog
          open={open}
          setOpen={setOpen}
          orders = {orders}
          orderData ={orderData}
          dispatch={dispatch}
          orderDetails={orderDetails}
          setOrderDetails={setOrderDetails}
          updateOrderDetails={updateOrderDetails}
        />
      )}
    </>
  );
}

export default OrderModule;
