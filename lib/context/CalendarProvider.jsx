import React, { createContext, useReducer } from 'react';

export const CalendarContext = createContext();

export const CalendarDispatchContext = createContext();

function inputDateReducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHECK_IN':
      return { ...state, checkIn: action.date };

    case 'INPUT_CHECK_OUT':
      return { ...state, checkOut: action.date };

    case 'RESET_INPUT':
      return initialCalendar;

    default:
      throw new Error();
  }
}

const initialCalendar = {
  checkIn: '',
  checkOut: '',
};

function CalendarProvider({ children }) {
  const [inputDate, dispatchInputDate] = useReducer(
    inputDateReducer,
    initialCalendar
  );

  return (
    <CalendarContext.Provider value={inputDate}>
      <CalendarDispatchContext.Provider value={dispatchInputDate}>
        {children}
      </CalendarDispatchContext.Provider>
    </CalendarContext.Provider>
  );
}

export default CalendarProvider;
