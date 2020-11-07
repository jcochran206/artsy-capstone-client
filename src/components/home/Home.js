import TokenService from "../../services/token-service";
import LandingPage from "./LandingPage";

export default function Home(props) {
    return(
        <>
        {TokenService.hasAuthToken() ? props.history.push('/feed/home') : <LandingPage {...props}/>}
        </>
    )
}