/* eslint-disable max-len */
import { ConditionalWrapper } from "@components/ConditionalWrapper";
import cn from "@styles/cssUtils";
import rangeParser from "parse-numeric-range";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import CopyTextButton from "../utils/CopyTextButton";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

/**
 * Render markdown content with syntax highlighting in code blocks
 */
const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  const syntaxTheme = oneDark;

  // Adapted from https://amirardalan.com/blog/syntax-highlight-code-in-markdown
  const MarkdownComponents: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  > = {
    // eslint-disable-next-line sonarjs/cognitive-complexity
    code: ({ node, className, inline, ...props }) => {
      const hasLang = /language-(\w+)/u.exec(className ?? "");
      const hasMeta = Boolean(node.data?.["meta"]);

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          // eslint-disable-next-line require-unicode-regexp
          const RE = /{([\d,-]+)}/;
          const rawMetadata = node.data?.["meta"];
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

      const codeString = (
        typeof props.children === "string" ? props.children : props.children[0]
      ) as string;

      return hasLang ? (
        <>
          <div className={cn("relative")}>
            <CopyTextButton
              buttonClasses={cn("absolute right-2 top-2 w-auto !p-3")}
              stringToCopy={codeString}
            />
          </div>
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
          <div className={cn("relative")}>
            <div
              className={cn(
                "absolute left-2 -mt-[1.5rem] select-none text-sm italic"
              )}
            >
              {hasLang[1]}
            </div>
          </div>
        </>
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
      <ReactMarkdown components={MarkdownComponents}>{markdown}</ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
