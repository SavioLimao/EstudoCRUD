import React from "react";

type TitleProps = {
    children: React.ReactNode
    className: string
    $textColor?: string
}

const Title = ({ className, children }: TitleProps) => {
    return <h1 className={className}>{children}</h1>
}

export default Title;