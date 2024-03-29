import React, { memo } from 'react'
import twemoji from 'twemoji'

const Twemoji = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
  className='emoji'/>
)

export default memo(Twemoji)