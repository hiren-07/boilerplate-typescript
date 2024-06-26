import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "../container/MainContainer";
import Navigator from "./Navigator";

export default Root =()=>{
    return(
        <NavigationContainer>
            <Navigator />
            <MainContainer />
        </NavigationContainer>
    )
}