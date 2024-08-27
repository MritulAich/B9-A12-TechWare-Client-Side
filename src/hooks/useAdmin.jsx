import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/members/admin/${user.email}`)
        .then(res => {
          setIsAdmin(res.data.admin);
          console.log(res.data.admin);
        })
        .finally(() => setIsLoading(false));
    }
  }, [user, axiosSecure]);


  return [isAdmin, isLoading];
};

export default useAdmin;
