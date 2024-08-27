import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

const useModerator = () => {
    const { user } = useAuth();
    const [isModerator, setIsModerator] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/members/moderator/${user.email}`)
                .then(res => {
                    setIsModerator(res.data.moderator);
                    console.log(res.data.moderator);
                })
                .finally(() => setIsLoading(false));
        }
    }, [user, axiosSecure]);


    return [isModerator, isLoading];
};

export default useModerator;