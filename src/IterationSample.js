import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text: '눈사람'},
        {id:2, text: '얼음'},
        {id:3, text: '눈'},
        {id:4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 ID

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1); //nextId 값에 1을 더해 준다.
        setNames(nextNames); //names값을 업데이트한다.
        setInputText(''); //inputText를 비운다
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => 
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>);
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    ) 
}

export default IterationSample;

//map함수를 활용히 리스트 뿌리기
// import React from 'react';

// const IterationSample = () => {
//     const names = ['눈사람','얼음','눈','바람'];
//     const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//     return (
//         <ul className='list'>{nameList}</ul>
//     );
// };

// export default IterationSample;