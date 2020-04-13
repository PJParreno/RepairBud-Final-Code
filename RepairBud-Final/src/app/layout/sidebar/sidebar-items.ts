import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Home',
    icon: 'fas fa-home',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/dashboard/main',
        title: 'Main Dashboard',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Appointments',
    icon: 'fas fa-clipboard-list',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/appointment/viewAppointment',
        title: 'View Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/appointment/bookAppointment',
        title: 'Book Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/appointment/edit-ppointment',
        title: 'Edit Appointment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },

  {
    path: '',
    title: 'Customers',
    icon: 'fas fa-users',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/patient/all-patient',
        title: 'All Customer',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/add-patient',
        title: 'Add Customer',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/patient-profile',
        title: 'Customer Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Managers',
    icon: 'fas fa-user-md',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/doctors/allDoctors',
        title: 'All Managers',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/doctors/add-doctor',
        title: 'Add Manager',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/doctors/doctor-profile',
        title: 'Manager Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Staff',
    icon: 'fas fa-user-friends',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/staff/all-staff',
        title: 'All Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/add-staff',
        title: 'Add Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/edit-staff',
        title: 'Edit Staff',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/staff/staff-profile',
        title: 'Staff Profile',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Invoice History',
    icon: 'fas fa-hand-holding-usd',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/payment/all-payment',
        title: 'All Payment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/payment/add-payment',
        title: 'Add Payment',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Email',
    icon: 'fas fa-mail-bulk',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/email/inbox',
        title: 'Inbox',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/compose',
        title: 'Compose',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/email/read-mail',
        title: 'Read Email',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      }
    ]
  },
  {
    path: '',
    title: 'Apps',
    icon: 'fab fa-google-play',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/apps/calendar',
        title: 'Calendar',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/apps/chat',
        title: 'Chat',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
    ]
  },
  {
    path: '',
    title: 'Medias',
    icon: 'far fa-images',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/media/gallery',
        title: 'Image Gallery',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
    ]
  },
];
