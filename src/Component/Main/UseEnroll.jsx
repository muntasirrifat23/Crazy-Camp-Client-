import React, { useContext } from 'react';
import { AuthContest } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
 
const UseEnroll = () => {
    const {user} = useContext(AuthContest);
    const {refetch, data:enrolled=[]} = useQuery({
        queryKey: ['enroll',user?.email],
        queryFn: async() =>{
            const response = await axios.get(`http://localhost:5000/enroll?email=${user?.email}`);
            return response.data;
        },
    })
    return [enrolled, refetch]
};

export default UseEnroll;