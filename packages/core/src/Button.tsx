'use client'

import { forwardRef } from 'react'

export type ButtonProps = {} & React.ComponentPropsWithoutRef<'div'>

export const Button = forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
  return (
    <div {...props} ref={ref}>
        Button
    </div>
  )
})
