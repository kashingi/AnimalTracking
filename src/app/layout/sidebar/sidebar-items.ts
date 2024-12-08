import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "./dashboard",
    title: "dashboard",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [
      // {
      //   path: "/onboarding/farmers/container",
      //   title: "farmers",
      //   moduleName: "onboarding",
      //   iconType: "feather",
      //   icon: "cloud-drizzle",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },

      // {
      //   path: "/onboarding/agrodealers/container",
      //   title: "agrodealers",
      //   moduleName: "onboarding",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
      // {
      //   path: "/onboarding/transporters/container",
      //   title: "transporters",
      //   moduleName: "onboarding",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
      // {
      //   path: "/onboarding/warehouse/container",
      //   title: "warehouse",
      //   moduleName: "onboarding",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
      // {
      //   path: "/onboarding/organisation/container",
      //   title: "organisation",
      //   moduleName: "onboarding",
      //   iconType: "",
      //   icon: "",
      //   class: "ml-menu",
      //   groupTitle: false,
      //   badge: "",
      //   badgeClass: "",
      //   role: [""],
      //   submenu: [],
      // },
    ],
  },
 
  {
    path: "./geographic-tracking/geotracking",
    title: "Geographic Tracking",
    moduleName: "geotracking",
    iconType: "feather",
    icon: "home",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },

  {
    path: "./population-health/population",
    title: "Population & Health",
    moduleName: "population-health",
    iconType: "feather",
    icon: "users",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [],
  },
  
  

  // {
  //   path: "./loans",
  //   title: "Loans",
  //   moduleName: "loans",
  //   iconType: "feather",
  //   icon: "book-open",
  //   class: "",
  //   groupTitle: false,
  //   badge: "",
  //   badgeClass: "",
  //   role: ["ADMIN"],
  //   submenu: [],
  // },
  {
    path: "./user-management",
    title: "User Management",
    moduleName: "user-management",
    iconType: "feather",
    icon: "user",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["ADMIN"],
    submenu: [

      {
        path: "./user-management/users",
        title: "Users",
        moduleName: "user-management",
        iconType: "feather",
        icon: "user",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["ADMIN"],
        submenu: [],
      },

      {
        path: "./user-management/roles",
        title: "Roles",
        moduleName: "user-management",
        iconType: "feather",
        icon: "book-open",
        class: "",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: ["ADMIN"],
        submenu: [],
      },
    ],
  },


  
]
