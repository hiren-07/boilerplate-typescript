import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchDataAction } from '../../redux/action/FetchDataAction'
import { AppDispatch, RootState } from '../../redux/store/Store'

const DataRenderingDemo = () => {

  const dispatch = useDispatch<AppDispatch>()
   const {page,data,loading,totalPage}=useSelector((state:RootState)=>state.fetchDataReducer)
  
  useEffect(()=>{
    dispatch(fetchDataAction(page))
  },[])
  return (
    <View>

      <Text>DataRenderingDemo</Text>
    </View>
  )
}

export default DataRenderingDemo