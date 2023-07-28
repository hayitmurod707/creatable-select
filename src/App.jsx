import { useState } from 'react';
import styled from 'styled-components';
import CreatableSelect from './CreatableSelect';
import './style.css';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
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
         <h1>Creatable Select Component</h1>
         <h4>
            <a href='https://github.com/hayitmurod707/creatable-select'>
               Github
            </a>
         </h4>
         <div className='content'>
            <CreatableSelect
               inputValue={inputValue}
               onChange={setValue}
               onInputChange={setInputValue}
               placeholder='Create'
               value={value}
            />
         </div>
      </StyledElement>
   );
};
export default App;
