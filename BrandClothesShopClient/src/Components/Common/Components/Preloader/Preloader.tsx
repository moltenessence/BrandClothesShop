import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 50, color: 'rgb(24,42,24)', position: 'fixed', top: '50vh', }} spin />;

export default () => <Spin indicator={antIcon} />
