"use client";

import Image from 'next/image'
import styles from './header.module.css'
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header(){
    const { data: session } = useSession();

     return (
        <div className={styles.header}> 
            <div>
                <Image
                    src="/images/toolbox.png"
                    alt="Tool Box"
                    width={75}
                    height={75}
                    priority
                    /> 
                    <p className={styles.logo_subtitle}>USE NEXT</p>
            </div>
            <div>

            </div>
            <div>
                {session?.user ?
                    <a onClick={() => signOut()}>Hello, {session.user.name}.<br/>[Sign out]</a>
                    :
                    <a onClick={() => signIn()}> [Sign in]</a>
                }
            </div>
        </div>
    )
}