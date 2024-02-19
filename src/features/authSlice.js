import { createSlice,current } from "@reduxjs/toolkit";


const initialState =  [
  {
    id: 1,
    shipify: 'Shipify123',
    date: '2024-02-17',
    status: 'Delivered',
    customer: 'John Doe',
    email: 'john.doe@example.com',
    country: 'United States',
    shipping: 'Standard',
    source: 'Website',
    ordertype: 'Online',
    dispatch: "true"
  },
  {
    id: 2,
    shipify: 'Shipify456',
    date: '2024-02-18',
    status: 'Pending',
    customer: 'Jane Smith',
    email: 'jane.smith@example.com',
    country: 'Canada',
    shipping: 'Express',
    source: 'Mobile App',
    ordertype: 'In-Store',
    dispatch: "false"
  },
  {
    id: 3,
    shipify: 'Shipify129',
    date: '2024-02-19',
    status: 'Delivered',
    customer: 'James charle',
    email: 'James.charle@example.com',
    country: 'United States',
    shipping: 'Standard',
    source: 'Website',
    ordertype: 'Online',
    dispatch: "true"
  },
  {
    id: 4,
    shipify: 'Shipify1233',
    date: '2024-02-20',
    status: 'Pending',
    customer: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    country: 'United Kingdom',
    shipping: 'Express',
    source: 'Mobile App',
    ordertype: 'Online',
    dispatch: "false"
  },
  {
    id: 5,
    shipify: 'Shipify093',
    date: '2024-02-22',
    status: 'Delivered',
    customer: 'Shubham Gaur',
    email: 'shubham123@example.com',
    country: 'India',
    shipping: 'Standard',
    source: 'Mobile App',
    ordertype: 'In-Store',
    dispatch: "false"
  },
  {
    id: 6,
    shipify: 'Shipify093',
    date: '2022-02-22',
    status: 'Delivered',
    customer: 'Karann  Veer',
    email: 'karnVeer@example.com',
    country: 'India',
    shipping: 'Standard',
    source: 'Mobile App',
    ordertype: 'In-Store',
    dispatch: "false"
  },
  {
    id: 7,
    shipify: 'Shipify03',
    date: '2022-04-22',
    status: 'Delivered',
    customer: 'Manu',
    email: 'manu@example.com',
    country: 'India',
    shipping: 'Standard',
    source: 'Mobile App',
    ordertype: 'In-Store',
    dispatch: "true"
  },
 
];

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrders: (state,action) =>{
      state.push({...action.payload}); // Pushing new order

    } ,
    editOrder:(state,action) =>{
      const {payload} = action
      const index = current(state).findIndex((order) => order?.id === payload?.id)
   
      if (index !== -1) {
        
        return [
          ...current(state).slice(0, index), // Items before the index
          payload, // Replaced item
          ...current(state).slice(index + 1) // Items after the index
        ];
      }

  
     
    
   
    },
    updateDispatch :(state,action) =>{

      const { id, isChecked } = action.payload;
      console.log(id,"id");
      const rowToUpdate = current(state).map(row => {
      if(row.id === id){
            return {
          ...row,
          dispatch:  isChecked ? 'true' : 'false'
        }
      }
      return row
        
        
      });
    return rowToUpdate
    //  console.log(rowToUpdate,"rowToUpdate");
    },
    toggleDispatch : (state,action) =>{
      const {payload} = action
      let copyOrders = current(state).map((order) => {
        return {
          ...order, // Spread the existing order properties
          dispatch: payload // Update the dispatch property
        };
      });
    
      console.log(copyOrders, "copyOrders");
    
      // Return the new state array with modified dispatch properties
      return copyOrders;
      
        
    }

  },
 
});
export const { editOrder, updateDispatch,addOrders ,toggleDispatch} = orderSlice.actions;
export default orderSlice.reducer;
