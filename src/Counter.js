import React, { Component } from 'react';

class Counter extends Component {
    // constructor(props) //constructor 에서 state초깃값 정하기
    //     super(props);
    //     this.state = { //state의 초깃값 설정하기
    //         number: 0, //컴포넌트 state는 객체형식 이어야 함
    //         fixedNumber: 0,
    //     };
    // }
    state = {
        number : 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; //state를 조회 할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        )
                    }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;