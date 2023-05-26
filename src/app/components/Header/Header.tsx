import Image from 'next/image'
import styles from './header.module.css'

export default function Header(){
    return (
        <div className={styles.header}> 
            <Image
                src="/images/toolbox.png"
                alt="Tool Box"
                width={105}
                height={105}
                priority
                /> 
                <p className={styles.logo_subtitle}>USE NEXT</p>
        </div>
    )
}