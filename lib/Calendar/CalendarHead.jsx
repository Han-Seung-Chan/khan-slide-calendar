import styled from 'styled-components';
import { checkMonth, checkYear } from '../utility/dateUtil';

const DAY = ['일', '월', '화', '수', '목', '금', '토'];

function CalendarHead({ year, month, setYear, setMonth, position }) {
  function slideLeftDirection() {
    if (month - 1 === 0) {
      const totalMonth = 11;
      setYear(year - 1);
      setMonth((month) => month + totalMonth);
      return;
    }
    setMonth((month) => month - 1);
  }

  function slideRightDirection() {
    if (month + 1 > 12) {
      const totalMonth = 11;
      setYear(year + 1);
      setMonth((month) => month + 1 - totalMonth);
      return;
    }
    setMonth((month) => month + 1);
  }

  return (
    <DayHeader>
      <HeaderInfo>
        {position === 'leftBtn' && (
          <ArrowBtn onClick={slideLeftDirection} position={position}>
            &lt;
          </ArrowBtn>
        )}
        <Year>
          {checkYear(year, month)}년 {checkMonth(month)}월
        </Year>

        {position === 'rightBtn' && (
          <ArrowBtn onClick={slideRightDirection} position={position}>
            &gt;
          </ArrowBtn>
        )}
      </HeaderInfo>
      <Days>
        {DAY.map((day) => {
          return <Day key={day}>{day}</Day>;
        })}
      </Days>
    </DayHeader>
  );
}

const DayHeader = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
`;

const HeaderInfo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Days = styled.ul`
  display: flex;
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 500;
`;

const Day = styled.li`
  width: calc(95% / 7);
  text-align: center;
  margin-left: 25px;

  :nth-child(7n + 1) {
    color: #f00;
  }

  :nth-child(7n) {
    color: #122ccb;
  }
`;

const ArrowBtn = styled.button`
  position: absolute;
  top: 25px;
  margin-left: 15px;
  border: 0.5px solid #010101;
  border-radius: 5px;
  width: 10%;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: bold;
  left: ${({ position }) => (position === 'leftBtn' ? 10 : '')}px;

  right: ${({ position }) => (position === 'rightBtn' ? 10 : '')}px;
`;

export default CalendarHead;
