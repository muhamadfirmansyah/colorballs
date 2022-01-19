import SearchInput from '../SearchInput';
import NavigationBar from '../NavigationBar';
import Header from '../Header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <SearchInput />
            
            <main className="px-4 mt-[12px] mx-auto mb-[120px]">
                {children}
            </main>

            <NavigationBar />
        </>
    )
}

export default Layout