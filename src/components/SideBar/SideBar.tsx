import styeles from './SideBar.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import {
  AiOutlineUser,
  AiOutlineBarChart,
  AiOutlineShopping,
  AiOutlineBank,
  AiOutlineSetting,
} from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoPersonAddOutline } from 'react-icons/io5';
import { PiTagChevronLight } from 'react-icons/pi';

const mainMenuItems = [
  { name: 'dashboard', url: '/', icon: <AiOutlineUser /> },
  { name: 'analytics', url: '#', icon: <AiOutlineBarChart /> },
  { name: 'orders', url: '#', icon: <AiOutlineShopping /> },
  { name: 'products', url: '#', icon: <AiOutlineBank /> },
  { name: 'customers', url: '#', icon: <HiOutlineUsers /> },
  { name: 'vendors', url: '#', icon: <IoPersonAddOutline /> },
];

const channelItems = [
  { name: 'integrations', url: '#', icon: <PiTagChevronLight /> },
  { name: 'my store', url: '#', icon: <AiOutlineShopping /> },
];

const othersItems = [
  { name: 'settings', url: '#', icon: <AiOutlineSetting /> },
];

const SideBar = () => {
  return (
    <aside className={styeles.main}>
      <div>
        {mainMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.name}
            icon={item.icon}
          />
        ))}
      </div>

      <div>
        <p className={styeles.title}>sales channel</p>
        {channelItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.name}
            icon={item.icon}
          />
        ))}
      </div>
      <div>
        <p className={styeles.title}>others</p>
        {othersItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.name}
            icon={item.icon}
          />
        ))}
      </div>
    </aside>
  );
};
export default SideBar;
