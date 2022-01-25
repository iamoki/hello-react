import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    })
    const { username, message } = form;
    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        username('');
        message('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange = {onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange = {onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={ //컴포넌트에 직접 이벤트핸들링
                () => {
                    alert(this.state.message);
                    this.setState({
                        message: ''
                    });
                }
            }>확인
            </button>
        </div>
    )
}

export default EventPractice;


// render() {
//     return (
//         <div>
//             <h1>이벤트 연습</h1>
//             <input
//                 type="text"
//                 name="message"
//                 placeholder="아무거나 입력해 보세요"
//                 value={this.state.message}
//                 onChange = { //컴포넌트에 직접 이벤트핸들링
//                     (e) => {
//                         this.setState({
//                             message: e.target.value
//                         })
//                     }
//                 }
//             />
//             <button onClick={ //컴포넌트에 직접 이벤트핸들링
//                 () => {
//                     alert(this.state.message);
//                     this.setState({
//                         message: ''
//                     });
//                 }
//             }>확인
//             </button>
//         </div>
//     );
// }

// 콘스트럭처활용 
// constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
// }

// handleChange(e) {
//     this.setState({
//         message: e.target.value
//     });
// }

// handleClick(e) {
//     this.setState({
//         message: ''
//     })
// }


// 클래스형 컴포넌트
// class EventPractice extends Component {
    
//     state = {
//         username: '',
//         message: '',
//     }

//     handleChange = (e) => { // transform-class-properties 문법
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '',
//             message: '',
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === "Enter") {
//             this.handleClick();
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="username"
//                     placeholder="사용자명"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange = {this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }