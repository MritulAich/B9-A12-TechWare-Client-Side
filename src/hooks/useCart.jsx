import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    // tan stack query 
    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch];
};

export default useCart;