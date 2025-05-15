import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAction } from '../../Redux/Action/fetchDataAction'
import { AppDispatch } from '../../Redux/Store/Store'
const DataRenderingDemo = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { page } = useSelector((state) => state.fetchDataReducer)

  useEffect(() => {
    dispatch(fetchDataAction(page))
  }, [dispatch, page]);

  return (
    <View>
      <Text>asd</Text>
    </View>
  )
}

export default DataRenderingDemo