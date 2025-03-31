'use client'

import React from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-card'
import { useIntersection } from 'react-use'
import { useAppDispatch } from '@/lib/hooks'
import { setActiveId } from '@/lib/features/category/categorySlice'

interface Props {
    title: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[]
    categoryId: number
    className?: string
    listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    className,
    listClassName,
}) => {
    const dispatch = useAppDispatch()

    const intersectionRef = React.useRef<HTMLDivElement>(null)
    const intersection = useIntersection(
        intersectionRef as React.RefObject<HTMLElement>,
        { threshold: 0.4 }
    )

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            dispatch(setActiveId(categoryId))
        }
    }, [categoryId, dispatch, intersection?.isIntersecting, title])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title
                text={title}
                size="lg"
                className="font-extrabold mb-5"
                id={categoryId}
            />

            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}
