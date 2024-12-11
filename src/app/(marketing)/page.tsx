import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Minimalism',
    date: '2024-10-15',
    excerpt: 'Exploring the beauty of simplicity in design and life.',
  },
  {
    id: 2,
    title:
      'Reforma Estatutaria Centro de Estudiantes de Ingeniería Civil Industrial 2024',
    date: '2024-10-25',
    excerpt: 'How slowing down can lead to a more fulfilling life.',
  },
  {
    id: 3,
    title: 'The Power of Habit',
    date: '2024-10-05',
    excerpt: 'Small changes that can transform your daily routine.',
  },
];

export default function Home() {
  return (
    <main className='flex flex-col row-start-2 items-center sm:items-start justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Image
        className='dark:invert'
        src='/next.svg'
        alt='Next.js logo'
        width={180}
        height={38}
        priority
      />
      <ol className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
        <li className='mb-2'>
          Get started by editing{' '}
          <code className='bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold'>
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className='flex gap-4 items-center flex-col sm:flex-row'>
        <a
          className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='dark:invert'
            src='/vercel.svg'
            alt='Vercel logomark'
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Read our docs
        </a>
      </div>

      {blogPosts.map((post) => (
        <article
          key={post.id}
          className='mb-8 pb-8 border-b border-gray-200 last:border-b-0'
        >
          <h2 className='text-2xl font-semibold mb-2'>
            <Link
              href={`/post/${post.id}`}
              className='text-gray-900 hover:text-gray-600 transition-colors'
            >
              {post.title}
            </Link>
          </h2>
          <time className='text-sm text-gray-500 mb-2 block'>{post.date}</time>
          <p className='text-gray-700'>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}