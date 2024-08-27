import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const [ isAdmin ] = useAdmin();

    if(isAdmin){
        return children;
    }

};

export default AdminRoute;