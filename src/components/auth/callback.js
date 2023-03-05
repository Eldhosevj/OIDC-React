import React,{useEffect} from "react";
import { AuthConsumer } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

 const Callback = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/dashboard");
    }, []);
    return(<div>
        <AuthConsumer>
        {({ signinRedirectCallback }) => {
            signinRedirectCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
    </div>)
 }
export default Callback