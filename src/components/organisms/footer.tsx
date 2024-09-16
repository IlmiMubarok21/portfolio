import Link from 'next/link'
import { BiXCircle } from 'react-icons/bi'
import { IoWarningOutline } from 'react-icons/io5'
import { AiOutlineClockCircle } from 'react-icons/ai'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/atoms/tooltip'
import { weeklyCodingActivity } from '@/lib/actions'

export const Footer = async () => {
  const { data } = await weeklyCodingActivity()
  const todayData = data[data.length - 1]

  return (
    <TooltipProvider>
      <footer className='border-t text-off-white text-xs flex items-center justify-between select-none bg-layout relative z-30'>
        <div className='flex items-center border-r divide-x'>
          <Link
            href='mailto:contact@ilmimubarok.my.id'
            target='_blank'
            className='items-center gap-x-1.5 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
          >
            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
            <span>Available for a work!</span>
          </Link>

          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                aria-label={todayData?.grand_total.text}
                href='/coding-activity'
                className='items-center gap-x-1 px-2 py-1 md:flex hidden text-muted-foreground hover:text-foreground transition-colors'
              >
                <AiOutlineClockCircle className='text-base' />
                <p>{todayData?.grand_total.text}</p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Today coding activity</p>
              <p className='text-sm text-muted-foreground'>click for more</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </footer>
    </TooltipProvider>
  )
}
