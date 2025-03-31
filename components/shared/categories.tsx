'use client'

import { useAppSelector } from '@/lib/hooks'
import { cn } from '@/lib/utils'

type Props = {
    className?: string
}

const cats = [
    { id: 1, name: 'Пицца' },
    { id: 2, name: 'Комбо' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' },
]

export const Categories: React.FC<Props> = ({ className }) => {
    const activeCategoryId = useAppSelector((state) => state.category.activeId)
    return (
        <div
            className={cn(
                'inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',
                className
            )}
        >
            {cats.map(({ id, name }, index) => (
                <a
                    className={cn(
                        'flex items-center font-bold h-11 rounded-2xl px-5',
                        activeCategoryId === id &&
                            'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                    href={`/#${id}`}
                    key={index}
                >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    )
}
