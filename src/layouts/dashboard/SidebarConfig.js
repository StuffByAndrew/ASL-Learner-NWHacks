import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import infoFill from '@iconify/icons-akar-icons/info-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Learn',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Friends ',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: 'Resources',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon(lockFill)
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon(personAddFill)
  // },
  {
    title: 'About',
    path: '/dashboard/products',
    icon: getIcon(infoFill)
  },  
  /* {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  } */
];

export default sidebarConfig;
