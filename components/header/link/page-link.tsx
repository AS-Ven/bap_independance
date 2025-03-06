import Link from "next/link";

interface PageLinkProps {
    url: string;
    text: string;
}

const PageLink = ({ url, text }: PageLinkProps) => {
    return (
        <Link href={url}>
            <h2 className="text-xl">{text}</h2>
        </Link>
    );
}

export default PageLink;