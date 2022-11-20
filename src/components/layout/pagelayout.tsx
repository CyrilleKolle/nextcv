import Head from "next/head"
import tw from "twin.macro";
import styled from "styled-components";

type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
}

const Container = styled.div`
${tw`h-screen`};
background: #000000;
`
export const PageLayout: React.FunctionComponent<LayoutProps> = ({
    title = "Default title",
    children
}) => (
    <Container>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
    </Container>
)

