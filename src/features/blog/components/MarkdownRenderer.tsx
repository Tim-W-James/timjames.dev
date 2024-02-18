/* eslint-disable max-len */
import { ConditionalWrapper } from "@components/ConditionalWrapper";
import cn from "@styles/cssUtils";
import rangeParser from "parse-numeric-range";
import { isMobile } from "react-device-detect";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { HashLink } from "react-router-hash-link";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { z } from "zod";

import CopyTextButton from "../utils/CopyTextButton";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/gu, "$1-$2")
    .replace(/[\s_]+/gu, "-")
    .toLowerCase();

/**
 * Render markdown content with syntax highlighting in code blocks
 */
const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  const syntaxTheme = oneDark;

  // HACK fix a rare issue with Prism failing to render
  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/513
  const [isReloaded, setIsReloaded] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => setIsReloaded(true), 0);

    return () => clearTimeout(timerId);
  }, []);

  const copyFragment = useCallback(
    () => navigator.clipboard.writeText(`${location.href.split("#")[0] ?? ""}`),
    []
  );

  // Adapted from https://amirardalan.com/blog/syntax-highlight-code-in-markdown
  const MarkdownComponents: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    code: ({ node, className, inline, ...props }) => {
      const hasLang = /language-(\w+)/u.exec(className ?? "");

      const nodeDataCodec = z.object({ meta: z.unknown() });
      const nodeData = nodeDataCodec.safeParse(node.data);
      const hasMeta = nodeData.success;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          // eslint-disable-next-line require-unicode-regexp
          const RE = /{([\d,-]+)}/;
          const rawMetadata = nodeData.data.meta;
          const metadata =
            typeof rawMetadata === "string"
              ? rawMetadata.replace(/\s/gu, "")
              : "";
          const strlineNumbers = RE.test(metadata)
            ? RE.exec(metadata)?.[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers ?? "");
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights) ? "highlight" : null;
          return { data };
        } else {
          return {};
        }
      };

      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const codeString = (
        typeof props.children === "string" ? props.children : props.children[0]
      ) as string;

      return hasLang ? (
        isReloaded ? (
          <>
            <SyntaxHighlighter
              PreTag="div"
              customStyle={{
                marginBottom: "2rem",
                marginTop: 0,
                paddingBottom: 0,
              }}
              language={hasLang[1]}
              lineProps={applyHighlights}
              showLineNumbers={true}
              style={syntaxTheme}
              useInlineStyles={true}
              wrapLines={hasMeta}
            >
              {[codeString]}
            </SyntaxHighlighter>
            <div className={cn("-mt-[1.5rem] flex justify-between pb-1")}>
              <div
                className={cn("mx-2 mt-[0.75rem] select-none text-sm italic")}
              >
                {hasLang[1]}
              </div>
              {!isMobile ? (
                <CopyTextButton
                  buttonClasses={cn(
                    "!mx-1 !h-[30px]",
                    "!px-2 !py-0",
                    "!text-sm"
                  )}
                  stringToCopy={codeString}
                />
              ) : null}
            </div>
          </>
        ) : null
      ) : (
        <ConditionalWrapper
          condition={!inline}
          wrapper={(children) => <div className={cn("p-4")}>{children}</div>}
        >
          <code className={className} {...props} />
        </ConditionalWrapper>
      );
    },
  };

  return (
    <article className={cn("prose", "prose-invert", "lg:prose-xl")}>
      <ReactMarkdown
        components={{
          ...MarkdownComponents,
          h2: ({ children }) => {
            const id = encodeURIComponent(kebabCase(children.toString()));
            return (
              <h2 id={id}>
                <HashLink
                  className={cn(
                    "hash-link-right",
                    "no-underline",
                    "after:ml-2"
                  )}
                  onClick={copyFragment}
                  to={`#${id}`}
                >
                  {children}
                </HashLink>
              </h2>
            );
          },
          h3: ({ children }) => {
            const id = encodeURIComponent(kebabCase(children.toString()));
            return (
              <h3 id={id}>
                <HashLink
                  className={cn(
                    "hash-link-right",
                    "no-underline",
                    "after:ml-2"
                  )}
                  onClick={copyFragment}
                  to={`#${id}`}
                >
                  {children}
                </HashLink>
              </h3>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
