// import React from 'react';
// import { useContext } from 'react';
// import { AuthContest } from './AuthProvider';
// import { useQuery } from '@tanstack/react-query';

// const UseAdmin = () => {
//     const {user} =useContext(AuthContest);
//     // const [axiosSecure] = AxiosSecure();
//     // use axios secure with react query
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey:['isAdmin',user?.email],
//         queryFn:async()=>{
//             const res =await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin,isAdminLoading];
// };

// export default UseAdmin;