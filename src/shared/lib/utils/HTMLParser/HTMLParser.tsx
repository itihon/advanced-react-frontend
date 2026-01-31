import DOMPurify from 'dompurify';
import { JSX } from "react";

export const domStyleToReactStyle = (style: CSSStyleDeclaration) => 
  Object.fromEntries(
    [...style]
      .map(
        propName => [
          propName.replace(/-./g, match => match[1].toUpperCase()), 
          style.getPropertyValue(propName),
        ],
      ),
  );

export const domAttributesToReactAttributes = (attrs: NamedNodeMap) => 
  Object.fromEntries(
    [...attrs]
      .filter(attr => attr.name !== 'style' && attr.name !== 'class')
      .map(attr => [attr.name, attr.value])
  );

export function parse(htmlString: string): Document  {
  // sanitize string 
  const cleanHTMLString = DOMPurify.sanitize(htmlString);
  return new DOMParser().parseFromString(cleanHTMLString, 'text/html');
};

export function convertToReactNode(
  element: ChildNode, 
  index: number,
  replacer?: (node: Element) => React.ReactNode,
): React.ReactNode {

  if (element.nodeType === Node.TEXT_NODE) {
    return element.textContent;
  }

  if (element.nodeType === Node.ELEMENT_NODE) {
    const Tag = (element as HTMLElement).tagName.toLocaleLowerCase() as keyof JSX.IntrinsicElements;
    const attributes = domAttributesToReactAttributes((element as HTMLElement).attributes);
    const styleAttr = domStyleToReactStyle((element as HTMLElement).style);
    const className = (element as HTMLElement).className;
    const replacement = replacer?.(element as HTMLElement);

    if (replacement) {
      return replacement;
    }

    return <Tag key={index} { ...attributes } className={className} style={styleAttr}>
      { ...Array.from(element.childNodes).map((child, idx) => convertToReactNode(child, idx++, replacer)) }
    </Tag>;
  }
}
