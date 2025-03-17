import { useState } from "react";
import { Switch } from "antd";
import { Department } from "../types/DepartmentTypes";
import DashboardLayout from "../layouts/DashboardLayout";
import { Button, Dropdown, Menu } from "antd";
import { Input } from "antd";
import { FilterOutlined, SearchOutlined, PlusOutlined, UploadOutlined, DownloadOutlined, DownOutlined } from "@ant-design/icons";

import { UnorderedListOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import DepartmentTable from "../components/Department/DepartmentTable";

const menu = (
    <Menu>
        <Menu.Item key="1">Action 1</Menu.Item>
        <Menu.Item key="2">Action 2</Menu.Item>
    </Menu>
);
const DepartmentPage = () => {
    const [departments, setDepartments] = useState<Department[]>([
        { code: "HRD", name: "Human Resource", description: "Adipisicing et cillum tempor minim ", createdBy: "Admin", createdOn: "31/05/2022", active: true },
        { code: "ADM", name: "Administration", description: "Lorem consectetur ea labore eu officic", createdBy: "Owner", createdOn: "03/11/2020", active: true },
        { code: "PDE", name: "Product Engineering", description: "Est nostrud eu ipsum commodo", createdBy: "Owner", createdOn: "19/07/2020", active: true },
        { code: "SSD", name: "Support Service", description: "Nisi est dolore aliquip ad in", createdBy: "Admin", createdOn: "20/06/2020", active: false },
        { code: "MKT", name: "Marketing", description: "Aliquip culpa enim ipsum anim", createdBy: "Admin", createdOn: "10/12/2023", active: true },
        { code: "SAS", name: "Sales", description: "Laboris incididunt amet quis ea", createdBy: "Admin", createdOn: "03/12/2024", active: true },
        { code: "MGT", name: "Management", description: "Velit Lorem culpa qui quis", createdBy: "Member", createdOn: "28/11/2021", active: true },
    ]);

    const [selectedDepartments, setSelectedDepartments] = useState<number[]>([]);
    const toggleActive = (index: number): void => {
        setDepartments((prev) =>
            prev.map((dept, i) =>
                i === index ? { ...dept, active: !dept.active } : dept
            )
        );
    };
    const toggleCheckbox = (index: number) => {
        setSelectedDepartments((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };
    return (
        <DashboardLayout>
            <div className="flex flex-wrap justify-between items-center bg-white shadow-md rounded-lg p-4">

            <div>
                    <h1 className="text-3xl font-bold text-[#173E73]">Department</h1>
                    <p className="text-gray-500">Home &gt; Configuration</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-2 items-center mt-2 sm:mt-0">
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <Button className="bg-[#173E73] text-white  flex items-center gap-1 text-base sm:text-sm px-4 sm:px-2">
                            Actions <DownOutlined />
                        </Button>
                    </Dropdown>
                    <div className="h-8 w-[2px] bg-slate-200 hidden sm:block"></div>
                    <Button className="bg-[#173E73] text-white  flex items-center gap-1 text-base sm:text-sm px-4 sm:px-2">
                        <DownloadOutlined />
                        Export Records
                    </Button>
                    <Button className="bg-[#173E73] text-white  flex items-center gap-1 text-base sm:text-sm px-4 sm:px-2">
                        <UploadOutlined />
                        Import Records                    </Button>
                    <Button
                        type="primary"
                        className="bg-[#173E73] text-white flex items-center gap-1 text-base sm:text-sm px-4 sm:px-2"
                    >
                        <PlusOutlined />
                        Add New Department
                    </Button>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center bg-gray-100 shadow-md rounded-lg p-4">

                    <Button icon={<FilterOutlined />} className="mr-4">Filter</Button>


                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-1 mr-5 justify-center items-center">
                            <span style={{ fontSize: '15px', color: "#173E73", fontWeight: 'bold' }}>Status:</span>
                            <Switch style={{ backgroundColor: "#173E73" }} size="small" />
                        </div>

                        <div style={{ position: "relative", display: "inline-block", width: "250px" }}>
                            <Input
                                placeholder="Search..."
                                style={{ paddingRight: "40px" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "0",
                                    bottom: "0",
                                    width: "40px",
                                    backgroundColor: "#173E73",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "0 4px 4px 0",
                                    cursor: "pointer",
                                }}
                            >
                                <SearchOutlined style={{ color: "white", fontSize: "16px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                    <div className="flex justify-end mb-2">
                        <Row gutter={16}>
                            <Col><UnorderedListOutlined style={{ fontSize: '22px', color: "#173E73", cursor: 'pointer' }} /></Col>
                            <Col><CheckSquareOutlined style={{ fontSize: '22px', color: "#173E73", cursor: "pointer" }} /></Col>
                        </Row>
                    </div>
                    <DepartmentTable
                        departments={departments}
                        selectedDepartments={selectedDepartments}
                        toggleCheckbox={toggleCheckbox}
                        toggleActive={toggleActive}
                        setSelectedDepartments={setSelectedDepartments}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default DepartmentPage;
