import { 
    LinkIcon as HeroLinkIcon, 
    Bars3Icon as HeroBars3Icon, 
    XMarkIcon as HeroXMarkIcon 
} from '@heroicons/react/24/outline';
import { SiGithub, SiEdx } from "react-icons/si";

const iconMap = {
    link: HeroLinkIcon,
    menu: HeroBars3Icon,
    close: HeroXMarkIcon,
    github: SiGithub,
    edx: SiEdx,
};

export default function Icon({ name, className = "", ...props }) {
    const IconComponent = iconMap[name];
    
    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in iconMap`);
        return null;
    }
    
    return <IconComponent className={className} {...props} />;
}
