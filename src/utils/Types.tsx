export interface JobProps {
    imgSrc: string;
    title: string;
    company: string;
    location: string;
}

export type MessageProps = {
    avatar: string;
    name: string;
    time: string;
    message: string;
    isSelected?: boolean;
};
