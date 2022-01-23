import React from 'react';

const MyComponent = ({name, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            children 값은 {children}
            입니다.
        </div>
    );
};
//기본 prop를 지정하는 방법
MyComponent.defaultProps = {
    name: '기본이름',
};

export default MyComponent;
