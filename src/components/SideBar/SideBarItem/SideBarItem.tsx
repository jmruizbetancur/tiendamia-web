import Link from "next/link";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeIcon from '@mui/icons-material/Home';
import styles from './sidebar-item.module.scss';

type Props = {
  route: string,
  icon?: string,
  label: string
}

const SideBarItem = ({ route, icon, label }: Props) => {
  let Icon;
  switch (icon) {
    case 'dashboard':
      Icon = <HomeIcon />
      break;
    case 'orders':
      Icon = <ShoppingCartIcon />
      break;
    case 'reports':
      Icon = <BarChartIcon />
      break;
    default:
      <></>
  }
  
  return (
    <Link href={route} className={styles.sidebar__item}>
      <ListItem>
        <ListItemButton className='no-background-color-hover'>
          <ListItemIcon className={styles.sidebar__icon}>
            {Icon}
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default SideBarItem;
