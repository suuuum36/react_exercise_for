import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sub extends Component {
    render() {
        return (
            <div>
                이것은 서브입니다.
                <div>
                     <Link to ='/'>
                     메인으로 이통하려면 클릭하세요.
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sub;