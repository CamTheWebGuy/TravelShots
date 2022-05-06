import React from 'react';
import { Avatar } from '@chakra-ui/react';
import './TopAlbumItem.css';

function TopShotsItem({ authorName, authorAvatar, album, img, link }) {
  return (
    <a href={link} className="top_album_item">
      <img src={img} alt="" />

      <div className="album_details">
        <div className="author_avatar">
          <Avatar size="sm" name={authorName} src={authorAvatar} />
        </div>

        <div className="author_info">
          <p className="author_name">{authorName}</p>
          <div className="likes">{album}</div>
        </div>

        <div className="album_photo_count">23 Photos</div>
      </div>
    </a>
  );
}

export default TopShotsItem;
