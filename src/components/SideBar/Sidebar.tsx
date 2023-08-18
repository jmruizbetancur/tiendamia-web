import List from '@mui/material/List';
import { sideMenu } from './side-menu';
import SideBarItem from './SideBarItem/SideBarItem';
import styles from './sidebar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <List component="nav">
        {sideMenu.map((item, idx) => (<SideBarItem route={item.route} label={item.label} icon={item.icon} key={idx} />))}
      </List>
    </div>
  );
}

export default SideBar;
