import React from 'react';
import './News.css';

const News = (props) => {
    const { width, height } = props;
    const src = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FANECYS&tabs=timeline&width=${width}&height=${height}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;
    return (
            <iframe src={src} width={width} height={height} style={{ border: "none", overFlow: "hidden" }} scrolling="no" frameBorder="0" allowFullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    );
}

export default News;
