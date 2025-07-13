'use client';
import { ReactNode } from 'react'
import  Link  from 'next/link';
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import { auth } from '@/firebase/client';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';


const RootLayout = async ({ children }:{children:ReactNode}) => {
  const router = useRouter();
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) return redirect('/sign-in');
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex item-center gap-2'>
          <Image src= "/logo.svg" alt='logo' width={38} height={32}/>
          <h2 className='text-primary-100'>PrepWise</h2>
        </Link>
        <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout