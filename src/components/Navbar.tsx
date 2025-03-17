import {  SearchOutlined} from "@ant-design/icons";
import { BellOutlined } from '@ant-design/icons';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Avatar } from 'antd';
import svg from "../assets/react.svg"
const Navbar = () => {
    return (
        <nav className="bg-white shadow p-4 flex justify-end items-center">            
            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="Search..."
                     className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchOutlined style={{ fontSize: "16px" }} />
                <BellOutlined />
                <Button icon={<QuestionCircleOutlined />} type="default">
                    Help
                </Button>
                <Avatar src={svg} />
            </div>
        </nav>
    );
};

export default Navbar;
