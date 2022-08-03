import styles from './Layout.module.css';

interface LayoutProps {
    sidebar: JSX.Element;
    children: JSX.Element;
}

export default function Layout(props: LayoutProps): JSX.Element {
    const { sidebar, children } = props;
    return (
        <div className={styles.layout}>
            {sidebar}
            {children}
        </div>
    )
}