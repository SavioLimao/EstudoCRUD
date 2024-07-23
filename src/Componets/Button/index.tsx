import { FC, ReactNode } from 'react'
type BTNProps = {
    children: ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}



export const BTN: FC<BTNProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}