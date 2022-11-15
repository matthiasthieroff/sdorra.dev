"use client";

import clsx from "clsx";
import Notification from "components/Notification";
import { useMDXComponent } from "next-contentlayer/hooks";

type Props = {
  code: string;
};

const Markdown = ({ code }: Props) => {
  const MDXComponent = useMDXComponent(code);
  return (
    <section
      className={clsx(
        "prose prose-zinc dark:prose-invert",
        "hover:prose-a:decoration-cyan-500 hover:prose-a:decoration-2"
      )}
    >
      <MDXComponent components={{ Notification }} />
    </section>
  );
};

export default Markdown;
