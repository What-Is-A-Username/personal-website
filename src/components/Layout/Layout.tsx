import type { FunctionComponent, ReactNode } from 'react'
import styles from './Layout.module.css'

type LayoutWithProps = {
    children: ReactNode
}

export const Layout: FunctionComponent<LayoutWithProps> = (props) => {
    return(
        <>
            <div className={styles.wrapper}>
                {props.children}
            </div>
        </>
    )
}