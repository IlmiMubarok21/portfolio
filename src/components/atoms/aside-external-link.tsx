import { type ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

type Props = {
  href: string
  children: React.ReactNode
  className?: ClassValue
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const AsideExernalLink = ({ href, children, className, ...props }: Props) => {
  return (
    <a
      href={href}
      className={cn('text-muted-foreground hover:text-foreground hover:bg-primary/10 w-full transition-colors flex items-center gap-x-2.5 px-5 py-1', className)}
      {...props}
    >
      {children}
    </a>
  )
}
