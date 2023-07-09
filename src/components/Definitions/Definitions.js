import React from 'react';

const Definitions = ({ word, category, meanings, theme }) => {
    return (
        <div className='meanings'>
            {meanings[0] && word && category === 'en' && (
                <div style={{ width: '100%' }}>
                    <audio
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            width: '100%',
                        }}
                        src={
                            meanings[0].phonetics[0] &&
                            meanings[0].phonetics[0].audio
                        }
                        controls
                    >
                        Your Browser doesn't support audio
                    </audio>
                </div>
            )}
            {word === '' ? (
                <span className='subTitle'>
                    Start by typing a word in search
                </span>
            ) : (
                meanings.map((mean) =>
                    mean.meanings.map((item) =>
                        item.definitions.map((def) => (
                            <div
                                className='singleMean'
                                style={{
                                    backgroundColor: theme ? '#fff' : '#393812',
                                    color: theme ? '#000' : '#fff',
                                }}
                            >
                                <b>{def.definition}</b>
                                <hr
                                    style={{
                                        backgroundColor: '#000',
                                        width: '100%',
                                    }}
                                />
                                {def.example && (
                                    <span>
                                        <b>Example :</b>
                                        {def.example}
                                    </span>
                                )}
                                {def.synonyms.length > 0 && (
                                    <span>
                                        <b>Synonyms :</b>
                                        {def.synonyms}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;
