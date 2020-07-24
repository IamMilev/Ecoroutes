import React from "react"

const Link = ({ href, title }) => {
    return (
        <li>
            <a href={href}>
                {title}
            </a>
        </li>
    )
}

export default Link