import styled from 'styled-components';
import CalendarModal from './Calendar/CalendarModal';
import CalendarProvider from './context/CalendarProvider';

function App() {
  return (
    <CalendarProvider>
      <CalendarModalContainer>
        <CalendarModal />
      </CalendarModalContainer>
    </CalendarProvider>
  );
}

const CalendarModalContainer = styled.div`
  width: 880px;
  height: 480px;
`;
export default App;
