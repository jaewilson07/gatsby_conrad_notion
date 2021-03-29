import React from "react"
import { Link } from "gatsby"
import { parseImageUrl } from '@conradlin/notabase/src/utils'

export default ({ data }) => {
    const { title, tags, cover_image, publish_date, desc, read_time, url, slug } = data
    
    
    let coverimageURL = cover_image ? parseImageUrl(cover_image[0], 1000, slug) : undefined

    return (
        <div style={{ margin: 10 }}>        
            <Link to={`posts/${url? url : slug}/`}>
            { cover_image &&
              <img 
                alt={`${title} cover image`}
                style={{ width: '100%' }}
                src={coverimageURL}
              />}
              <div style = {{color: "grey"}}>Tags: {tags && tags.join(', ')} • Published: {publish_date?.startDate} • {read_time} MIN READ</div>
              <h2>{title}</h2>
              <p style = {{ color: "black" }} dangerouslySetInnerHTML={{ __html: desc }}></p>
            </Link>
        </div>
    )
}