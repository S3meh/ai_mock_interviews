import { ReactNode } from 'react'
import  Link  from 'next/link';
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';


const handleLogout = () => {
  // Example: remove token and redirect to login
  localStorage.removeItem("token"); 
  // or use a signOut function if using Firebase, NextAuth, etc.
  window.location.href = "/login"; 
};
const RootLayout = async ({ children }:{children:ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) return redirect('/sign-in');
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