import React, {Component} from 'react';
import ValidationSample from './ValidationSample'

class App extends Component {
  render() {
    return (
      <ValidationSample/>
    );
  }
}

export default App;

//  2장.JSX
// import React, { Component } from 'react';
// import './App.css';
// //import React, { Fragment } from 'react'; //Fragment 태그가 들어 갔을 때

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// export default App;

//Fragment 태그를 간소화하여 사용하는 방법
// <>
//   <h1>{name} 안녕!</h1>
//   <h2>잘 작동하니????</h2>
// </>

// if 문 대신 조건부 연산자
// <div>
//   {name === '리액트'? (
//     <h1>
//       리액트입니다.
//     </h1>
//   ) : (
//     <h2>리액트가 아닙니다.</h2>
//   )}
// </div>

// &&연산자를 이용해 간추려 출력하기
// <div>
//   {name === '리액트' && <h1>리액트입니다.</h1>}
// </div>

// 상수안의 값이 undefined 일때
//<div>{name || '리액트'}</div>

// 스타일 객체를 만들어 css스타일링 입히기
//<div style={style}>{name}</div>

// react에서는 class 를 className이라고 지칭한다
//<div className="react">{name}</div>

// input태그의 경우 일반 html에서는 닫기태그가 없지만 리액트에서는 </input>처럼 닫아주거나 <input />와 같이 셀프클로징 시켜줘야한다

// 3장. 컴포넌트
// return <MyComponent name="react" />; 기본이름을 설정하지않고 바로 이름을 넣는 방식