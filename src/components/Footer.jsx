// import React from 'react';

// const Footer = () => {
//   return (
//     <div className='bg-[#01020e] text-white flex flex-col'>
//         <div className="">
//         <div className='text-white text-xl font-bold'>SOCIAL LINKS</div>
//       <div className='text-white font-normal hover:text-[#bb2765]'>
//         <a href="https://discord.com/invite/rKf9UYMNWC">DISCORD</a>
//       </div>
//       <div className='text-white font-normal hover:text-[#bb2765]'>
//         <a href="https://twitter.com/RouterDAO_">RABBITSDAO</a>
//       </div>
//         </div>
      
//     </div>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#01020e] text-white flex flex-col items-center justify-center h-full'>
      <div className="text-center">
        <div className='text-white text-xl font-bold'>SOCIAL LINKS</div>
        <div className='text-white font-normal hover:text-[#bb2765]'>
          <a href="https://discord.com/invite/rKf9UYMNWC">DISCORD</a>
        </div>
        <div className='text-white font-normal hover:text-[#bb2765]'>
          <a href="https://twitter.com/RouterDAO_">RABBITSDAO</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
