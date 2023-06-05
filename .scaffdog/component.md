---
name: "component"
description: "Generate UI component"
root: ""
output: "**/*"
ignore: []
questions:
  name: "Input your component Name: (PascalCase)"
---

# `{{ inputs.name }}/index.ts`

```typescript
export { {{ inputs.name }} } from "./{{ inputs.name }}"

```

# `{{ inputs.name }}/{{ inputs.name }}.tsx`

```typescript
"use client";

import { forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const root = tv({
  base: "",
  variants: {
    color: {
      primary: "",
      secondary: "",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export type ButtonProps = VariantProps<typeof root> & React.ComponentPropsWithoutRef<"div">;

export const {{ inputs.name }} = forwardRef<HTMLDivElement, ButtonProps>(
  (props, ref) => {
    const { children, className, color,  ...rest } =
      props;

    return (
      <div
        className={root({ className, color })}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

```
