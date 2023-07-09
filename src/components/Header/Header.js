import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import categories from '../../data/Category';

const Header = ({ category, setCategory, word, setWord, theme }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: theme ? '#fff' : '#000',
            },
            mode: theme ? 'dark' : 'light',
        },
    });

    const handelChange = (lang) => {
        setCategory(lang);
        setWord('');
    };

    return (
        <div className='dictionary__header'>
            <span className='title'>{word ? word : 'Word Hunt'}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        id='standard-textarea'
                        label='Search a Word'
                        placeholder='Placeholder'
                        multiline
                        variant='standard'
                        className='search'
                        value={word}
                        onChange={(e) => {
                            return setWord(e.target.value);
                        }}
                    />
                    <TextField
                        className='select'
                        select
                        label='Language'
                        variant='standard'
                        value={category}
                        onChange={(e) => {
                            return handelChange(e.target.value);
                        }}
                    >
                        {categories.map((lang) => {
                            return (
                                <MenuItem key={lang.label} value={lang.label}>
                                    {lang.value}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
