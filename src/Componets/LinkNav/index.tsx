import React from "react"
import { Link } from "react-router-dom"

type LinkNavProps = {
    to: string,
    children: React.ReactNode,
    className: string
}

const LinkNav = ({to, children, className }: LinkNavProps) => {
    return (
        <Link className={className} to={to}>{children}</Link>
    )
}

export default LinkNav