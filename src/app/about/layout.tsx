import { Suspense } from 'react'
import { allAbouts } from 'contentlayer/generated'
import { SiTypescript } from 'react-icons/si'
import { contacts } from '@/constants/contacts'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'
import { AsideExernalLink } from '@/components/atoms/aside-external-link'
import { ArrowUpRightFromSquare } from 'lucide-react'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='multiple' defaultValue={['about', 'contact']}>
          <AccordionItem value={'about'}>
            <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left'>Profile</AccordionTrigger>
            <AccordionContent className='space-y-1'>
              <FadeInStagger faster>
                {allAbouts.map(({ title }) => (
                  <FadeIn key={title}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink href={title} key={title} startWith='/about' title={title}>
                        <SiTypescript className='w-4 h-4 shrink-0' />
                        {`${title}.ts`}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={'contact'}>
            <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left'>Contact</AccordionTrigger>
            <AccordionContent className='space-y-1'>
              <FadeInStagger faster>
                {contacts.map(({ icon: Icon, label, href }) => (
                  <FadeIn key={label}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideExernalLink href={href} key={label} target='_blank' rel='nofollow'>
                        <Icon className='w-4 h-4 shrink-0' />
                        {label}
                        <ArrowUpRightFromSquare className='w-3 h-3' />
                      </AsideExernalLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
  )
}
