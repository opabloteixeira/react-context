import React from 'react';

import ThemeProvider from './context/Theme';
import CountProvider from './context/Count';

import Counter from './components/Counter';
import Mirror from './components/Mirror';
import ThemeContainer from './components/ThemeContainer';

const App = () => (

        <ThemeProvider>    
            <CountProvider>
                <ThemeContainer>
                    <Counter></Counter>
                    <hr />
                    <Mirror></Mirror>
                </ThemeContainer>
            </CountProvider>
        </ThemeProvider>

)

export default App;

