// Menu
import { Contacts, OpenTime, SocialNetworks } from '../in-use/shared';

export interface MenuProps {
    displayId: string;
    userId:string;
    name?: string;
    subname?: string;
    avatar?: string;
    bio?: string;
    connections?: Connection[];
}

export interface Connection {
    socialMedias?: SocialNetworks;
    openTimes?: OpenTime[];
    location?: string;
    contacts?: Contacts[];
}
