import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
    const session = await auth();
    return (
        <header className='px-5 py-3 bg-black shadow-sm font-montserrat'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className='flex items-center gap-5 text-black'>
                    {session && session?.user ? (
                        <>
                            <Link href="/main/achievements">
                                <button
                                    className='max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full'
                                >
                                    Achievements
                                </button>
                            </Link>
                            <form action={async() => {
                                "use server"
                                await signOut({redirectTo:"/"});
                            }}>
                                <button type="submit"
                                    className='max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full'
                                >
                                    Log Out
                                </button>

                            </form>

                            <Link href={`/user/${session?.user?.id}`}>
                                <span className='font-semibold text-center transtion-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 text-white hover-opacity-75'>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async() => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit"
                                className='max-sm:hidden align-middle select-none font-semibold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 border-[3px] border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full'
                            >
                                Login
                            </button>

                        </form>

                    )}


                </div>
            </nav>
        </header>

    )
}

export default Navbar