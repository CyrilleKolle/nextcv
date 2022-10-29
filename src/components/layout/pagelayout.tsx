import Head from "next/head"

type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
}
export const PageLayout: React.FunctionComponent<LayoutProps> = ({
    title = "Default title",
    children
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
    </div>
)

