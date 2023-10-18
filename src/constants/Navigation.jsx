import {TbDashboard } from "react-icons/tb";
import {HiOutlineCube } from "react-icons/hi";
import { IoIosContacts } from "react-icons/io";
import {GiWallet} from "react-icons/gi";
import {LuBadgePercent} from "react-icons/lu";
import { MdLiveHelp } from "react-icons/md"; 


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label:'Dashboard',
        path: '/',
        icon: <TbDashboard/>
    },
    {
        key: 'product',
        label:'Product',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'customers',
        label:'Customers',
        path: '/customers',
        icon: <IoIosContacts/>
    },
    {
        key: 'income',
        label:'Income',
        path: '/income',
        icon: <GiWallet/>
    },
    {
        key: 'promote',
        label:'Promote',
        path: '/promote',
        icon: < LuBadgePercent/>
    },
    {
        key: 'help',
        label:'help',
        path: '/helps',
        icon: <MdLiveHelp/>
    },

]
