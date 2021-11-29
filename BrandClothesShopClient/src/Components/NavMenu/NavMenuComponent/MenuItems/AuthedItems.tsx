import {Menu} from 'antd';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../../../Store/store';
import {useDispatch} from 'react-redux';
import {logout} from '../../../../Store/Reducers/authMeReducer/actionCreators';
import {FC} from "react";


interface IProps extends ConnectorProps {
}

const AuthedItems: FC<IProps> = ({userName}) => {

    const dispatch = useDispatch();

    return (
        <>
            <Menu.Item className={'loginItem'} onClick={() => dispatch(logout(true))}>
                <span className='navLink'>Logout</span>
            </Menu.Item>
            <Menu.Item className={'helloItem'}>
                <span className='navLink'>
                    Hello, <span className='username'>{userName ? userName : 'guest'}</span>
                </span>
            </Menu.Item>
        </>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        userName: state.authMe.userName,
    }
}

const connector = connect(mapStateToProps);

type ConnectorProps = ConnectedProps<typeof connector>

export default connector(AuthedItems);