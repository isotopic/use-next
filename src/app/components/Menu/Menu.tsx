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
        {name: 'Home', items: [
            {src:'/', name: 'Home'},
        ]},
        {name: 'Routing', items: [
            {src:'/search-params?id=1', name: 'Search params'},
            {src:'/dynamic/1', name: 'Dynamic path'},
        ]},
        {name: 'Layout', items: [
            {src:'/file-conventions', name: 'File conventions'},
        ]},
        {name: 'Data handling', items: [
            {src:'/client-side-fetching', name: 'Client-side fetching'},
            {src:'/server-side-fetching', name: 'Server-side fetching'},
        ]},
        {name: 'Authentication', items: [
            {src:'/restricted-client', name: 'Restricted on client-side'},
            {src:'/restricted-server', name: 'Restricted on server-side'},
            {src:'/restricted-server-role', name: 'Restricted on server-side with role'},
        ]},
    ];

    return (
        <div className={styles.menu}> 
            {items.map((section, i) => {
                return (<>
                    {i > 0 && <span>{section.name}</span>}
                    <ul>
                        {section.items.map((item) => {
                            return (
                                <li key={item.src} className={isActive(pathname, item.src) ? styles.active : ''}>
                                    <Link href={item.src}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </>)
            })}
        </div>
    )
}