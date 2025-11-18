import ProductCategories from '@/components/ProductCategories'
import ProductFilter from '@/components/ProductFilter'
import ProductHeader from '@/components/ProductHeader'
import ProductList from '@/components/ProductList'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <div className="shop-page">
                <ProductHeader></ProductHeader>
                <div className="container pad-none">
                    <ProductCategories></ProductCategories>
                    <div className="jsx-4037049772 flex-wrap flex-items-stretch grid-col-12 pad-none flex-row row">
                        <ProductFilter></ProductFilter>
                        <ProductList></ProductList>
                    </div>
                </div>
            </div>
        </>
    )
}
