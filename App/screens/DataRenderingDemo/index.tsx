import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchDataAction } from '../../redux/action/fetchDataAction'

const DataRenderingDemo = () => {

  const dispatch = useDispatch()
  
  const {loading,page,totalPage,data} = useSelector((state)=>state.fetchDataReducer)
  
  useEffect(()=>{
    dispatch(fetchDataAction(page))
  },[])
  return (
    <View>

      {/* <Text>DataRenderingDemo</Text> */}
    </View>
  )
}

export default DataRenderingDemo