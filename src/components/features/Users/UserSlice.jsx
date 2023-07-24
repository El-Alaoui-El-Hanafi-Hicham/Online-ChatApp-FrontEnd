import { createSlice } from "@reduxjs/toolkit";
const initialState={
    users:[{id:0,name:'Hicham Alaoui',age:'21',img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:1,name:'Louis Granner',age:'21',img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:2,name:'Chester Lane',age:'18',img:"https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg="},
    {id:3,name:'Micheal Davidson',age:'27',img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id:4,name:'John White',age:'50',img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"},],
    isLoading:false,
    loggedUser:1
}
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        AddUser(state,actions){
            console.log(state)
        }
    }
})
export const {AddUser} = userSlice.actions;
export default userSlice.reducer;