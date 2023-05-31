import React from 'react'

import moment from 'moment';

export interface NewsCardProps {
  title?: any;
  body?: any;
  source?:  string | undefined;
  time: any;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, body, source, time }) => {
  return (
    <div>
      <div className='px-5 py-3'>
        <a href={source} target="_blank"
        className='hover:opacity-80 transition'>
          <p className='text-violet-500'>{title}</p>
          <p>{body}</p>
        </a>
        <p>{moment(time).format('DD/MM/YYYY HH:mm:ss')}</p>
      </div>
      <div className='px-3'>
        <hr className='my-2'/>
      </div>
    </div>
  )
}

export default NewsCard;