import React from 'react'

interface SpaceProps {
    verticalSpace?: number;
    horizontalSpace?: number;
}

const Space = (props: SpaceProps) => {
    const { verticalSpace = 1, horizontalSpace = 1 } = props
    return (
        <div style={{width: horizontalSpace, height: verticalSpace}}></div>
    )
}

export default Space