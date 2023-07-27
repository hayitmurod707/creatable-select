import { useState } from 'react';
import styled from 'styled-components';
import CreatableSelect from './CreatableSelect';
import './style.css';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   height: 100vh;
   justify-content: center;
   width: 100vw;
   & .content {
      width: 350px;
   }
`;
const App = () => {
   const [value, setValue] = useState([]);
   const [inputValue, setInputValue] = useState('');
   return (
      <StyledElement>
         <div className='content'>
            <CreatableSelect
               inputValue={inputValue}
               onChange={setValue}
               onInputChange={setInputValue}
               value={value}
            />
         </div>
      </StyledElement>
   );
};
export default App;
