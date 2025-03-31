import clsx from 'clsx'
import React from 'react'

interface TitleSize {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
}

interface Props {
    size?: keyof TitleSize
    className?: string
    text: string
    id?: number
}

export const Title: React.FC<Props> = ({
    text,
    size = 'sm',
    id,
    className,
}) => {
    const mapTagBySize: TitleSize = {
        xs: 'h5',
        sm: 'h4',
        md: 'h3',
        lg: 'h2',
        xl: 'h1',
        '2xl': 'h1',
    }

    const mapClassNameBySize: TitleSize = {
        xs: 'text-[16px]',
        sm: 'text-[22px]',
        md: 'text-[26px]',
        lg: 'text-[32px]',
        xl: 'text-[40px]',
        '2xl': 'text-[48px]',
    }

    return React.createElement(
        mapTagBySize[size],
        { className: clsx(mapClassNameBySize[size], className), id },
        text
    )
}
