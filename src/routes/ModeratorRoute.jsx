import useModerator from "../hooks/useModerator";

const ModeratorRoute = ({children}) => {
    const [isModerator] = useModerator();

    if(isModerator){
        return children;
    }
};

export default ModeratorRoute;