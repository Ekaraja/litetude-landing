import homeIcon from "../assets/icons/Icon-Home.svg"
import settingIcon from "../assets/icons/Icon-Setting.svg"
import smsIcon from "../assets/icons/Icon-Sms.svg"
import usersIcon from "../assets/icons/Icon-Users.svg"


export const sidebarMenu = [
    {
        id: 1,
        title: "Home",
        icon: homeIcon,
        alt: "Home Icon",
        url: "#home" // FOR ROUTE
    },
    {
        id: 2,
        title: "How it works",
        icon: settingIcon,
        alt: "Setting Icon",
        url: "#hiw" // FOR ROUTE
    },
    {
        id: 3,
        title: "About Litetude",
        icon: usersIcon,
        alt: "Users Icon",
        url: "#about" // FOR ROUTE
    },
    {
        id: 4,
        title: "Contact us",
        icon: smsIcon,
        alt: "Letter Icon",
        url: "#contact" // FOR ROUTE
    },
]