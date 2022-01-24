import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                안녕하세요, 제이름은 {name}입니다.<br/>
                children 값은 {children}
                입니다.
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}
//기본 prop를 지정하는 방법
// MyComponent.defaultProps = {
//     name: '기본이름',
// };
//propTypes를 통한 props 검증
// MyComponent.propTypes = {
//     name : PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

// 클래스 내부에서 defaultProps와 propType를 지정하는 방법
// static defaultProps = {
//     name: '기본 이름'
// };
// static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }

export default MyComponent;

// 함수형 컴포넌트 prop설정
// const MyComponent = ({name, favoriteNumber, children}) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다.<br/>
//             children 값은 {children}
//             입니다.
//             <br/>
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };