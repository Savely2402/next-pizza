import {
    Container,
    Filters,
    ProductCard,
    Title,
    TopBar,
} from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import StoreProvider from './storeProvider'

export default function Home() {
    return (
        <>
            <StoreProvider>
                <Container className="mt-10">
                    <Title
                        text="Все пиццы"
                        size="lg"
                        className="font-extrabold"
                    />
                </Container>
                <TopBar />
                <Container className="pb-14 mt-9">
                    <div className="flex gap-[60px]">
                        <div className="w-[250px]">
                            <Filters />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col gap-16">
                                <ProductsGroupList
                                    title="Пиццы"
                                    items={[
                                        {
                                            id: 1,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 2,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 3,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 4,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 5,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                    ]}
                                    categoryId={1}
                                />
                                <ProductsGroupList
                                    title="Комбо"
                                    items={[
                                        {
                                            id: 6,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 7,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 8,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 9,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                        {
                                            id: 10,
                                            name: 'Чиз пицца',
                                            items: [{ price: 390 }],
                                            imageUrl:
                                                'https://media.dodostatic.net/image/r:233x233/0194491914e478b4aa3e18d44e07eed9.avif',
                                        },
                                    ]}
                                    categoryId={2}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </StoreProvider>
        </>
    )
}
