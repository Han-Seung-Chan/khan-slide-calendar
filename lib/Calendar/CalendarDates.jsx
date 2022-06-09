import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  CalendarContext,
  CalendarDispatchContext,
} from '../context/CalendarProvider';

import {
  changeLocalDateStr,
  changeTimeDate,
  compareDate,
} from '../utility/dateUtil';

function CalendarDates({ date, year, month }) {
  const { checkIn, checkOut } = useContext(CalendarContext);
  const { handelClickEvent } = useContext(CalendarDispatchContext);

  const nowDate = changeLocalDateStr(year, month - 1, date);

  const disableDate = compareDate(new Date(), nowDate);

  const checkedDate =
    changeTimeDate(checkIn) === changeTimeDate(nowDate) ||
    changeTimeDate(checkOut) === changeTimeDate(nowDate);

  const selectedDate =
    changeTimeDate(checkIn) < changeTimeDate(nowDate) &&
    changeTimeDate(nowDate) < changeTimeDate(checkOut);

  return (
    <DateList>
      <DateNum
        onClick={() => {
          handelClickEvent(year, month, date);
        }}
        disabled={disableDate}
        checkedDate={checkedDate}
        selectedDate={selectedDate}
        date={date}
      >
        {date && `${date}일`}
      </DateNum>
    </DateList>
  );
}

const DateList = styled.li`
  position: relative;
  width: calc(94% / 7);
  height: 60px;
  text-align: right;
  border: 1px solid #ffffff;

  :nth-child(7n + 1) {
    color: #f00;
  }

  :nth-child(7n) {
    color: #122ccb;
  }
`;

const DateNum = styled.button`
  width: 100%;
  text-align: right;
  font-size: 1rem;
  font-weight: 500;
  color: inherit;

  &:disabled {
    color: ${({ disabled }) => disabled && `#BDBDBD`};
  }

  border-bottom: ${({ checkedDate, date }) =>
    checkedDate && date && `3px solid red`};

  border-bottom: ${({ selectedDate, date }) =>
    selectedDate && date && `3px solid black`};
`;

export default CalendarDates;
