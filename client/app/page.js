// 'use client';
import Link from 'next/link';

export default function Page() {
  console.log('this it it');
  return (
    <div>
      <Link className="text-8xl" href="/chat">
        Hello people{' '}
      </Link>
    </div>
  );
}
