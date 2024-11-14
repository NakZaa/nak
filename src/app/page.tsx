import LinkWithIcon from '@/components/link-with-icon'
import Posts from '@/components/posts'
import Socials from '@/components/socials'
import { Button } from '@/components/ui/button'
import { getPosts } from '@/lib/posts'
import { ArrowRight, FileDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Projects from './projects/projects'
import Experience from '@/components/experience'

const NAK_BIRTH_YEAR = 2003
const LIMIT = 2 // max show 2

export default async function Home() {
  const posts = await getPosts(LIMIT)

  return (
    <article className='mt-8 flex flex-col gap-16 pb-16'>
      <section className='flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between'>
        <Image
          className='rounded-lg'
          src='/images/author/nak.jpg'
          alt='Photo of Nak'
          width={250}
          height={250}
          priority
        />
        <div className='flex flex-col'>
          <h1 className='title text-5xl'>hi Nak here</h1>
          <p className='mt-4'>
            I&apos;m a {new Date().getFullYear() - NAK_BIRTH_YEAR}
            -year-old law studnet from Thailand
          </p>
          <p className='mt-1'>
            I like to learn new things, drink coffee, and code.
          </p>
          <section className='mt-8 flex items-center gap-8'>
            <Link href='/resume_nakonkate.pdf' target='_blank'>
              <Button variant='outline' className='[&_svg]:size-5'>
                <span className='font-semibold'>Resume</span>
                <FileDown className='ml-2' />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h2 className='title text-2xl sm:text-3xl'>featured projects</h2>
          <LinkWithIcon
            href='/projects'
            position='right'
            icon={<ArrowRight className='size-5' />}
            text='view more'
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className='flex flex-col gap-8'>
        <div className='flex justify-between'>
          <h2 className='title text-3xl'>recent posts</h2>
          <LinkWithIcon
            href='/blog'
            position='right'
            icon={<ArrowRight className='size-5' />}
            text='view more'
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  )
}
