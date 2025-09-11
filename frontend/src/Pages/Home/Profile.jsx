// import { useState , useEffect } from "react";


// export const Profile = ()=>{
//    const obj = new Service()
//    const [user , setUser] = useState({})
//     const getProfileData = async()=>{   
//         try{
//             const data = await obj.get("user/me");
//             setUser(data);
//             console.log(data);
//         }
//         catch(err){
//             console.log(err);
//         }   
//     }
//     useEffect(()=>{

//         getProfileData();

//     },[]);


//   return (
//     <div>
//       profile page 
//     </div>
//   )
// }



import { useState, useEffect } from "react";
import { Avatar, Typography, Box, Paper } from "@mui/material";
import Service from "../../utils/http";
export const Profile = () => {
  const obj = new Service();
  const [user, setUser] = useState({});

  const getProfileData = async () => {
    try {
      const data = await obj.get("user/me");
      setUser(data); 
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Paper elevation={2} sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={user.avatar}
          alt={user.name || "Profile"}
          sx={{ width: 80, height: 80, mb: 2 }}
        >
          {user.name
            ? user.name
                .split(" ")
                .map(n => n)
                .join("")
                .toUpperCase()
                 : ""}
        </Avatar>
        <Typography variant="h6">{user.name || "User"}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.role}
        </Typography>
        
      </Box>  
    </Paper>
  );
};
