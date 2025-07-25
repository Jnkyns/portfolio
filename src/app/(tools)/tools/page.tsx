import InstagramTool from '@/components/instagram-tool';
import Link from 'next/link';

export default async function Tools() {
  return (
    <div className='flex flex-col h-dvh bg-stone-950 p-2'>
      <Link
        href='/tools/instagram'
        className='text-white text-2xl font-semibold'
      >
        Comparador de Seguidores
      </Link>
    </div>
  );
}
