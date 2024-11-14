import LinkWithIcon from '@/components/link-with-icon'
import MDXContent from '@/components/mdxContent'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowLeft } from 'lucide-react'

import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

type Params = Promise<{ slug: string }>

export default async function Post({ params }: { params: Params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, publishedAt } = metadata

  return (
    <article className='mt-8 flex flex-col gap-8 pb-16'>
      <LinkWithIcon
        href='/blog'
        position='left'
        icon={<ArrowLeft className='size-5' />}
        text='back to blog'
      />

      {image && (
        <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
          <Image src={image} alt={title || ''} className='object-cover' fill />
        </div>
      )}

      <header>
        <h1 className='title'>{title}</h1>
        <p className='mt-2 text-xs text-muted-foreground'>
          {formatDate(publishedAt ?? '')}
        </p>
      </header>

      <main className='prose dark:prose-invert'>
        <MDXContent source={content} />
      </main>
    </article>
  )
}
