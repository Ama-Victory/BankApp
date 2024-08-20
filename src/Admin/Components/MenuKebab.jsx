import {Dropdown, message} from "antd";
import {CiMenuKebab} from "react-icons/ci";

const onClick = ({key}) => {
    if (key === "1") {
        message.info("You clicked on 1");
    } else if (key === "2") {
        message.info("You clicked on 2");
    }
};

const items = [
    {
        label: "Restrict",
        key: "1",
    },
    {
        label: "Edit",
        key: "2",
    },
];

const MenuKebab = () => (
    <Dropdown
        menu={{items, onClick}}
        placement="bottomRight"
        trigger={["click"]}
    >
        <a onClick={(e) => e.preventDefault()}>
            <CiMenuKebab className="cursor-pointer rotate-90" size={22} />
        </a>
    </Dropdown>
);

export default MenuKebab;
