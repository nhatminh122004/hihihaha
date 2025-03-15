import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-base'>
        <div>
          <img src={assets.logo} className='w-32 mb-5 ' alt='' />
          <p className='w-full text-gray-600 md:w-2/3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            optio odit deleniti ratione repudiandae eius iure eaque iusto nobis!
            Quam nam id nulla, ea quaerat quod ex accusamus laudantium error!
          </p>
        </div>
        <div>
          <p className='mb-5 text-xl font-medium '>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>
                <Link to='/' className='hover:text-black'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-black'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/delivery' className='hover:text-black'>
                  Delivery
                </Link>
              </li>
              <li>
                <Link to='/privacy-policy' className='hover:text-black'>
                  Privacy policy
                </Link>
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <p className='mb-5 text-xl font-medium '>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <a
                href='tel:+12124567890'
                className='hover:text-black transition-colors duration-300'
              >
                Tel: (+84) 01234-56789
              </a>
            </li>
            <li>
              <a
                href='mailto:hihihaha@gmail.com'
                className='hover:text-black transition-colors duration-300'
              >
                Mail:hihihaha@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-base text-center'>
          Copyright © 2024 @forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
