import { NavigationContainer } from "@react-navigation/native";
import MainContainer from "../container/MainContainer";
import Navigator from "./Navigator";

const Root =()=>{
    return(
        <NavigationContainer>
            <Navigator />
            <MainContainer />
        </NavigationContainer>
    )
}

export default Root