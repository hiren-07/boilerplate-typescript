import React, { useEffect, useState } from 'react';
import { Modal, Dimensions, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const width = Dimensions.get('window').width;
const SUPPORTED_ORIENTATIONS = ['portrait'];

const CDateChangeModal = ({
    showToday,
    visible,
    onClose,
    onSubmit,
    isDark,
    firstDay,
    minDate,
    maxDate,
    selectedDate: selectedDateProps,
    onRef,
}) => {
    const [selectedDate, setSelectedDate] = useState(selectedDateProps);
    const colors = isDark ? '#000000' : '#ffffff';

    useEffect(() => {
        setSelectedDate(selectedDateProps);
    }, [selectedDateProps]);

    const handleDatePress = (date) => {
        console.log("Date -- ",date);
        const tempDate = new Date(date.year, date.month - 1, date.day);
        setSelectedDate(tempDate);
    };

    const insideRange = (dateString) => {
        const dateMin = minDate ? new Date(minDate) : null;
        const dateMax = maxDate ? new Date(maxDate) : null;
        const dateToday = new Date(dateString);

        if (!dateMin && !dateMax) {
            return true;
        }
        if (dateMin && dateMax) {
            return dateToday >= dateMin && dateToday <= dateMax;
        }
        if (dateMin) {
            return dateToday >= dateMin;
        }
        if (dateMax) {
            return dateToday <= dateMax;
        }
    };

    return (
        <Modal
            supportedOrientations={SUPPORTED_ORIENTATIONS}
            animationType="none"
            transparent
            onRequestClose={onClose}
            visible={visible}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onClose}
                style={{ width, backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <TouchableWithoutFeedback>
                    <View style={{ width: '90%', backgroundColor: colors, borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#333' }}>
                            {showToday && (
                                <MaterialCommunityIcons
                                    name="calendar-today"
                                    style={{ color: '#fff', fontSize: 20 }}
                                    onPress={() => {
                                        const tempDate = new Date();
                                        setSelectedDate(tempDate);
                                    }}
                                />
                            )}
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                                Select Date
                            </Text>
                        </View>
                        <View style={{ backgroundColor: '#555' }}>
                            <Calendar
                                theme={{
                                    backgroundColor: '#555',
                                    calendarBackground: '#555',
                                    textSectionTitleColor: '#aaa',
                                    textSectionTitleDisabledColor: '#888',
                                    selectedDayBackgroundColor: '#0f0',
                                    selectedDayTextColor: '#fff',
                                    todayTextColor: '#fff',
                                    todayBackgroundColor: '#777',
                                    dayTextColor: '#aaa',
                                    textDisabledColor: '#444',
                                    dotColor: '#aaa',
                                    selectedDotColor: '#fff',
                                    arrowColor: '#aaa',
                                    disabledArrowColor: '#444',
                                    monthTextColor: '#aaa',
                                    indicatorColor: '#aaa',
                                    textDayFontWeight: '300',
                                    textMonthFontWeight: 'bold',
                                    textDayFontSize: 14,
                                    textMonthFontSize: 15,
                                    textDayHeaderFontSize: 12,
                                }}
                                initialDate={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : undefined}
                                minDate={minDate}
                                maxDate={maxDate}
                                pagingEnabled
                                monthFormat="MMM yyyy"
                                firstDay={firstDay}
                                showWeekNumbers={false}
                                
                                onPressArrowLeft={(subtractMonth) => subtractMonth()}
                                onPressArrowRight={(addMonth) => addMonth()}
                                enableSwipeMonths
                                dayComponent={({ date, state }) => {
                                    // console.log("State --- ",state);
                                    const isSelected = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') === date.dateString : false;
                                    const insideRangeFlag = insideRange(date.dateString);
                                    const selectedStyle = {
                                        backgroundColor: 'red',
                                        borderRadius: 30,
                                        minWidth: 30,
                                        minHeight: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    };
                                    const todayStyle = {
                                        backgroundColor: 'white',
                                        borderRadius: 30,
                                        minWidth: 30,
                                        minHeight: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    };
                                    const dateWrap = {
                                        minWidth: 30,
                                        minHeight: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    };
                                    return (
                                        <TouchableOpacity
                                            disabled={(state === 'today' && !insideRangeFlag)}
                                            onPress={() => {handleDatePress(date)
                                                console.log(state)}}
                                            style={isSelected ? selectedStyle : state === 'today' ? todayStyle : dateWrap}
                                        >
                                            <Text style={{ textAlign: 'center', color: isSelected ? '#fff' : state === 'disabled' ? '#333' : '#aaa' }}>
                                                {date.day}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity
                                onPress={onClose}
                                style={{ paddingHorizontal: 16, margin: 8, paddingVertical: 8, backgroundColor: '#f00', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                            >
                                <Text style={{ fontSize: 14, color: '#fff' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    onSubmit(selectedDate);
                                }}
                                style={{ paddingHorizontal: 16, minWidth: 72, margin: 8, paddingVertical: 8, backgroundColor: '#00f', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                            >
                                <Text style={{ fontSize: 14, color: '#fff' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
    );
};

export default CDateChangeModal;
