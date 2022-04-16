import React from 'react'
import { Avatar } from '@chakra-ui/react'
import './TopShotsItem.css'

function TopShotsItem({ authorName, authorAvatar, likes, img, link }) {
    return (
        <a href={link} className="top_shots_item">
            <img src={img} alt="" />

            <div className="author_details">
                <div className="author_avatar">
                    <Avatar size='sm' name={authorName} src={authorAvatar} />
                </div>
                <div className="author_info">
                    <p className='author_name'>{authorName}</p>
                    <div className="likes">{likes} Likes</div>
                </div>

            </div>
        </a>
    )
}

export default TopShotsItem
