import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
    return (
        <ContentLoader
            speed={1}
            width={280}
            height={466}
            viewBox="0 0 280 466"
            backgroundColor="#ffe1d4"
            foregroundColor="#eee1dc"
        >
            <circle cx="130" cy="135" r="130" />
            <rect x="5" y="271" rx="0" ry="0" width="270" height="27" />
            <rect x="5" y="315" rx="5" ry="5" width="270" height="88" />
            <rect x="98" y="287" rx="0" ry="0" width="0" height="1" />
            <rect x="5" y="415" rx="5" ry="5" width="90" height="45" />
            <rect x="115" y="414" rx="15" ry="15" width="160" height="45" />
        </ContentLoader>
    )
}

export default Skeleton
