import React from "react"

export const markdownComponents = {
  h1: ({ node, children, ...props }) => (
    <h1 className="text-2xl font-bold" {...props}>
      {children}
    </h1>
  ),
  ol: ({ node, ...props }) => (
    <ol className="pl-5 my-2 list-decimal list-inside" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="pl-5 list-disc list-inside" {...props} />
  ),
  p: ({ node, ...props }) => <p className="py-1" {...props} />,
}
