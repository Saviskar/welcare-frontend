import {
    MdDashboard,
    MdAttachMoney,
    MdPeople,
    MdAccountCircle,
} from "react-icons/md";
import { NavLink ,Outlet} from "react-router-dom";

const SideMenuItems = [
 {
    title:'Home', 
    to:'/',
    icon: <MdDashboard className="text-lg" /> 
 },
 {
    title:'Billing', 
    to:'/billing',
    icon: <MdAttachMoney className="text-lg" />
 },
 {
    title:'Guests', 
    to:'/guest',
    icon: <MdPeople className="text-lg" />
 
 }
]

function SideMenu() {

    const baseStyle = "flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all";
    const activeStyle = "bg-purple-700 text-white";
    const inactiveStyle = "hover:bg-purple-700 text-white/80";

    return (
    <div>
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          WELCARE
        </h2>
        <ul className="space-y-2">
          {SideMenuItems.map((item,index) =>{
            return(
            <li key={index}>
                <NavLink
                to={item.to}
                className={({ isActive }) =>
                    `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                }
                >
                {item.icon}{item.title}
                </NavLink>
            </li>
            )
          })}
        </ul>
    </div>
    )
}

export default SideMenu;