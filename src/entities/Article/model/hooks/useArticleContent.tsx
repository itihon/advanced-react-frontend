import { useMemo } from "react";
import { parse, domAttributesToReactAttributes, domStyleToReactStyle, convertToReactNode } from 'shared/lib/utils/HTMLParser/HTMLParser';
import { AppImg, Skeleton } from "shared/ui";

function imgReplacer(node: Element): React.ReactNode {
  const img = node as HTMLImageElement;
  const tagName = node.tagName.toLocaleLowerCase();
  const attributes = domAttributesToReactAttributes(img.attributes);
  const styleAttr = domStyleToReactStyle(img.style);
  const className = img.className;

  if (tagName === 'img') {
    return <AppImg { ...attributes } className={className} style={styleAttr} Loader={Skeleton} />;
  }
};

export default function useArticleContent(htmlString: string | undefined) {
  const parsedDocument = useMemo(() => {
    if (htmlString) {
      return parse(htmlString);
    }
  }, [htmlString]);

  const convertedDocument = useMemo(() => {
    if (parsedDocument) {
      return <>
        { 
          ...Array
            .from(parsedDocument.body.children)
            .map((child, idx) => convertToReactNode(child, idx, imgReplacer)) 
        }
      </>;
    }
  }, [parsedDocument]);

  const firstImageSrc = useMemo(() => {
    return parsedDocument?.querySelector('img')?.src;
  }, [parsedDocument]);

  const firstParagraphText = useMemo(() => {
    return Array
      .from(parsedDocument?.querySelectorAll('p:not(:has(img))') || [])
      .map(p => p.textContent)
      .join(' ');
  }, [parsedDocument]);

  return {
    parsedDocument,
    convertedDocument,
    firstImageSrc,
    firstParagraphText,
  };
}