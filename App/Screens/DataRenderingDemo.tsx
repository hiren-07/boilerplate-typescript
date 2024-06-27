import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchDataAction } from '../redux/Action/fetchDataAction'

const DataRenderingDemo = () => {

  const dispatch = useDispatch()
  
  const {loading,page,totalPage,data} = useSelector((state)=>state.fetchDataReducer)
  
  useEffect(()=>{
    dispatch(fetchDataAction(page))
  },[])

  // console.log("Loading -> ",loading);
  // console.log("page -> ",page);
  // console.log("totalPage -> ",totalPage);
  // console.log("data -> ",data);

  return (
    <View style={styles.container}>

      {/* <Text>DataRenderingDemo</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default DataRenderingDemo