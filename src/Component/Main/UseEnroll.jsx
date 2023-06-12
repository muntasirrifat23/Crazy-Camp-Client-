import React, { useContext } from 'react';
import { AuthContest } from '../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UseEnroll = () => {
    const {user} = useContext(AuthContest);
    const {refetch, data:enrolled=[]} = useQuery({
        queryKey: ['enroll', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json();
        },
    })
    return [enrolled, refetch]
};

export default UseEnroll;