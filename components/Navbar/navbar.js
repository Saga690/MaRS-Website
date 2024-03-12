import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { styles } from '@/utils/styles';
import { navLinks } from '@/pages/api/data';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src="/logo.jpg" alt="" className='w-9 h-9 object-contain rounded-2xl' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>MaRS | IITR</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`} onClick={() => { setActive(link.title) }}>
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? "https://cdn-icons-png.flaticon.com/128/10628/10628515.png" : "https://th.bing.com/th/id/OIP.vmxLREA5kxK2iaqEjkdwwgHaHa?w=168&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-violet-900 to-cyan-900 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[15px]`} onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar