import { ReactNode } from 'react'
import { PortableText } from 'next-sanity'

export function Locale({ locale, sv, en }: {
  locale: string,
  sv: ReactNode,
  en: ReactNode
}): ReactNode {
  return locale === 'sv' ? sv : en
}

export function textByLocale(locale: string, sv: string, en: string): string {
  return locale === 'sv' ? sv : en
}

export function pathByLocale(locale: string, path: string): string {
  return locale === 'sv' ? path : `/en${path}`
}

export function portableTextToPlainText(blocks: any[], opts: { trim: boolean } = { trim: true }): string {
  try {
    const text = blocks
      .map(block =>
        Array.isArray(block.children)
          ? block.children.map(child => child.text).join('')
          : ''
      )
      .join('\n')
      .replace(/\n{2,}/g, '\n')
      .trim();

    return opts.trim ? text.slice(0, 157) + (text.length > 160 ? '...' : '') : text;
  } catch {
    return ''
  }
}

function splitPortableTextOnEmptyParagraph(blocks: any[]) {
  if (!Array.isArray(blocks)) return { head: [], tail: [] };

  const emptyIndex = blocks.findIndex(
    (block) =>
      block._type === 'block' &&
      (!block.children || block.children.length === 0 || block.children.every((c: any) => !c.text || /^\s*$/.test(c.text)))
  );

  if (emptyIndex === -1) return { head: blocks, tail: [] };

  return {
    head: blocks.slice(0, emptyIndex + 1),
    tail: blocks.slice(emptyIndex + 1),
  };
}

export function ExpandablePortableText({ locale, value }: { locale: string, value: any[] }) {
  const { head, tail } = splitPortableTextOnEmptyParagraph(value);

  if (!tail.length) return <PortableText value={value} />;

  const showMore = textByLocale(locale, "Visa mer", "Show more");
  const showLess = textByLocale(locale, "Visa mindre", "Show less");

  return (
    <>
      <PortableText value={head} />
      <details className="flex flex-col space-y-4">
        <PortableText value={tail} />
        <summary className="cursor-pointer flex w-fit self-center order-last custom-summary-label hover:opacity-50 transition-opacity duration-300" aria-label={showMore}></summary>
      </details>

      <style>{`
        .custom-summary-label::after {
          content: '${showMore}';
        }
        details[open] > .custom-summary-label::after {
          content: '${showLess}';
        }
        details > summary {
          list-style: none;
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </>
  );
}
