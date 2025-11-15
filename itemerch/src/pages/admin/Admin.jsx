import { AddProduct, ProductTable } from './components'
import { useState } from 'react'
import { UserTable } from '@/pages/admin/components/UserTable'
import { Button } from '@/components'

const tabs = [
    { id: 'products', label: 'Товары' },
    { id: 'users', label: 'Пользователи' },
]

export function Admin() {
    const [activeTab, setActiveTab] = useState('products')

    return (
        <div>
            <div className="mb-2 flex gap-x-2">
                {tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        title={tab.label}
                    />
                ))}
            </div>

            {activeTab === 'products' && (
                <div className="flex gap-x-4">
                    <AddProduct />
                    <ProductTable />
                </div>
            )}

            {activeTab === 'users' && (
                <div className="flex gap-x-4">
                    {/*<AddUser />*/}
                    <UserTable />
                </div>
            )}
        </div>
    )
}
