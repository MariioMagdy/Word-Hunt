import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import MaterialUISwitch from './components/MaterialUISwitch/MaterialUISwitch';

function App() {
    const [meanings, setMeanings] = useState([]);
    const [word, setWord] = useState('');
    const [category, setCategory] = useState('en');
    const [theme, setTheme] = useState(true);

    const dictionaryApi = async () => {
        try {
            const { data } = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            );
            setMeanings(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (word) dictionaryApi();
    }, [word, category]);

    return (
        <div
            className='dictionary'
            style={{
                backgroundColor: theme ? '#282c34' : '#FFF',
                color: theme ? '#FFF' : '#000',
                transition: 'all 0.5s linear',
            }}
        >
            <Container maxWidth='lg'>
                <div
                    style={{ position: 'absolute', top: '20px', right: '40px' }}
                >
                    <span>{theme ? 'Dark' : 'Light'}</span>
                    <MaterialUISwitch
                        checked={theme}
                        onChange={() => {
                            setTheme(!theme);
                        }}
                    />
                </div>
                <div className='dictionary__content'>
                    <Header
                        category={category}
                        setCategory={setCategory}
                        word={word}
                        setWord={setWord}
                        theme={theme}
                    />
                    {meanings && (
                        <Definitions
                            word={word}
                            meanings={meanings}
                            category={category}
                            theme={theme}
                        />
                    )}
                </div>
            </Container>
        </div>
    );
}

export default App;
