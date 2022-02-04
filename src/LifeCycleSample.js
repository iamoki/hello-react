import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; //ref를 설정할 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }
    //컴포넌트가 마운트될때와 업데이트 될 때
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color};
        }
        return null;
    }
    //리렌더링을 완료한 후 실행
    componentDidMount() {
        console.log('componentDidMount')
    }

    //props, state를 변경했을때 리렌더링 여부를 설정할 때
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4라면 리렌더링 하지 않음
        return nextState.number % 10 !== 4;
    }

    //컴포넌트를 DOM에서 제거 할 때
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    //render 에서 만들어진 결과물이 실제 브라우저에 반영 되기 직전
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    //렌더링을 완료 후 실행
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상:', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };

        return (
            <div>
                {/* {this.props.missing.value} */}
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button className="btn orange" onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;