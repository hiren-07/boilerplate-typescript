import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "../Container/MainContainer";
import Navigator from "./Navigator";

export default Root =()=>{
    return(
        <NavigationContainer>
            <Navigator />
            <MainContainer />
        </NavigationContainer>
    )
}