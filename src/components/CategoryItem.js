import React from 'react'

function CategoryItem({ img, title, link }) {
    return (
        <a href={link} className="ts_option">
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </a>
    )
}

export default CategoryItem
