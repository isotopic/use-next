'use client';

import styles from './menu.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


function isActive(path:string, src:string){
    return path == src.split('?')[0];
}

export default function Menu(){
    const pathname = usePathname();
    const items = [
        {src:'/', name: 'Home'},
        {src:'/search-params?id=1', name: 'Search params'},
        {src:'/dynamic/1', name: 'Dynamic path'},
        {src:'/file-conventions', name: 'File conventions'},
        {src:'/client-side-fetching', name: 'Client-side fetching'},
        {src:'/server-side-fetching', name: 'Server-side fetching'},
        {src:'/restricted-client', name: 'Restricted on client-side'},
        {src:'/restricted-server', name: 'Restricted on server-side'},
    ]
    return (
        <div className={styles.menu}> 
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.src} className={isActive(pathname, item.src) ? styles.active : ''}>
                            <Link href={item.src}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}