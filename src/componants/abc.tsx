import * as React from "react";

type MenuItemProps = {
  image: string;
  title: string;
  description: string;
  price: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ image, title, description, price }) => (
  <article className="flex flex-col px-5 py-10 mx-auto w-full font-bold bg-yellow-50 shadow-xl rounded-[41px] max-md:pr-5 max-md:mt-10">
    <img loading="lazy" src={image} alt={title} className="self-center max-w-full aspect-[1.03] w-[163px]" />
    <h3 className="mt-7 text-2xl text-neutral-800">{title}</h3>
    <p className="mt-2 text-sm text-neutral-600">{description}</p>
    <div className="flex gap-5 justify-between px-0.5 mt-6 text-2xl text-stone-600">
      <div>
        <span className="text-lg">$</span>
        <span className="text-xl text-stone-600">{price}</span>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5273f1d5657cd2d59cb5b557abc7c8aa904ea66d0496c27e0a1c7211e3788edd?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start aspect-[6.67] w-[97px]" />
    </div>
  </article>
);

type BlogPostProps = {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ image, date, category, title, excerpt }) => (
  <article className="flex flex-col grow px-8 py-7 w-full font-medium text-yellow-900 bg-yellow-50 rounded-2xl shadow-2xl max-md:px-5 max-md:mt-10">
    <img loading="lazy" src={image} alt={title} className="w-full aspect-square max-md:mr-1.5" />
    <p className="mt-7 text-lg text-amber-700">{date} / {category}</p>
    <h3 className="mt-4 mr-6 text-2xl font-semibold w-[311px] max-md:mr-2.5">{title}</h3>
    <p className="mt-6 text-sm text-yellow-900">{excerpt}</p>
    <a href="#" className="mt-6 text-base">Read More</a>
  </article>
);

const MyComponent: React.FC = () => {
  const menuItems: MenuItemProps[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b1790636995064afc1d2abb7eb468ec3d4a386238c0ce6d9f537eaab74283f1?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      title: "Blueberry Cheesecake",
      description: "Blueberry love, cheesecake delight!",
      price: "9.00"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/17371f667ae02923036b90b4ecaa9548f6f4d7d14ec79e80762d353d6a6b7967?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      title: "Biscoff Cheesecake",
      description: "Biscoff adores cheesecake magic",
      price: "11.00"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8135ce38963bcdd36116a1966ec041be65540fd4dc9e769e5c8f705dbd76ea5?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      title: "Chocolate Cheesecake",
      description: "Cherish Chocolate, relish cheesecake magic!",
      price: "10.00"
    }
  ];

  const blogPosts: BlogPostProps[] = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/83feee4cd6a3fe7d57ec9859be9e0370110948052d039fc9735d9925f87fcbee?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      date: "23 Nov, 2023",
      category: "Cheesecake",
      title: "A Peek Behind the Cheesecake Curtain",
      excerpt: "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very..."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b521d5844b8e0aca304123a544f3da68b9143331f20d22b2943af25f395664d1?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      date: "18 July, 2023",
      category: "Cheesecake",
      title: "Low-Sugar & Gluten-Free Cheesecakes",
      excerpt: "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low-sugar..."
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/311f192de4aba6c958e0a4c261ebdc6989c2ad5be99f9a9c215d550e7542e9c5?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
      date: "1 January, 2024",
      category: "Cheesecake",
      title: "Sweet Words - Customer Reviews of Cheesecakes",
      excerpt: "Indulge in the rich tapestry of heartfelt stories within \"Sweet Words.\" This curated collection of customer reviews offers a glimpse into the joy..."
    }
  ];

  return (
    <div className="flex flex-col items-center bg-yellow-50 shadow-xl">
      <header className="overflow-hidden self-stretch pt-1.5 w-full max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col max-md:mt-1.5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e9f15371209988874335adc2f170d46ac9887e83dd7f44bf3ede1e9d60f2a8?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="max-w-full aspect-square w-[165px]" />
              <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
                <h1 className="text-7xl leading-[83px] text-stone-700 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Bite The World of Cheesecake Wonders
                </h1>
                <p className="mt-14 text-lg leading-7 text-stone-950 text-opacity-80 max-md:mt-10 max-md:max-w-full">
                  We always make our customer happy by providing <br /> as many choices as possible
                </p>
                <div className="flex gap-3 self-start mt-11 text-base font-semibold leading-5 max-md:mt-10">
                  <button className="justify-center px-8 py-6 text-white bg-yellow-900 shadow-xl rounded-[100px] max-md:px-5">
                    Get Started
                  </button>
                  <button className="flex flex-col justify-center px-6 py-5 border border-solid shadow-xl border-yellow-950 rounded-[100px] text-stone-700 max-md:pl-5">
                    <div className="flex gap-1.5">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4817b140a2710e95f61cfe56c41e2147ee0fd3c08a8e1d02a494fddb1311af9?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 w-5 aspect-square fill-stone-600" />
                      <span>Watch Demo</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col items-end px-16 pt-11 pb-20 mt-3.5 text-base font-medium min-h-[743px] text-stone-700 max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d66f4a28015441c870b4b4e1b1637b45f00aa411b0c356dba41005fcb13f9681?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Background" className="object-cover absolute inset-0 size-full" />
              <button className="relative justify-center px-6 py-4 mr-36 border-2 border-solid border-stone-700 rounded-[38px] max-md:px-5 max-md:mr-2.5">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="z-10 mt-0 w-full max-w-[1180px] max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/599854de7385076c6ecff3ebdb351b3eb55183e14e8ae14d94e6eaa8f2ea53e8?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Cheesecake" className="grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-52 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-6xl text-stone-950 max-md:max-w-full max-md:text-4xl">We Love Cheesecake</h2>
              <p className="mt-6 text-2xl text-stone-950 text-opacity-80 max-md:max-w-full">Discover Our Cheesecake Story</p>
              <p className="mt-8 mr-9 text-xl text-black text-opacity-70 max-md:mr-2.5 max-md:max-w-full">
                At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity.
                <br /><br />
                We believe in delivering not just desserts but moments of sheer indulgence.
              </p>
              <button className="justify-center self-start px-10 py-6 mt-10 text-base font-semibold leading-5 text-white bg-yellow-900 shadow-xl rounded-[100px] max-md:px-5">
                Read More
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center self-stretch py-16 pr-8 pl-20 mt-28 w-full bg-yellow-900 bg-opacity-90 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="mt-1.5 text-6xl text-yellow-50 max-md:text-4xl">Our Menu</h2>
          <div className="flex flex-col mt-11 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
            <div className="max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <MenuItem {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-5 self-end mt-14 text-2xl font-medium text-yellow-50 max-md:mt-10">
              <div className="flex-auto">View More</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/878fc51d42cbc71ce04c1524dc6e97adad3c7568309357954f9271b87f80d6b5?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start aspect-[0.53] w-[9px]" />
            </div>
          </div>
        </section>
        <section className="mt-20 max-md:mt-10">
          <h2 className="text-6xl text-yellow-900 max-md:text-4xl">Our Blog</h2>
          <p className="mt-2 text-2xl leading-6 text-center text-yellow-900">Our Recent Posts</p>
          <div className="px-5 mt-20 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {blogPosts.map((post, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <BlogPost {...post} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="self-stretch pt-20 pr-3.5 pb-3.5 pl-20 mt-32 w-full bg-yellow-900 bg-opacity-90 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl text-yellow-50 max-md:mt-10 max-md:max-w-full">
                <h2 className="self-start ml-5 text-6xl max-md:ml-2.5 max-md:text-4xl">Contact Us</h2>
                <p className="mt-9 leading-8 max-md:max-w-full">
                  Need to get in touch with us? Either fill out the form with your inquiry or find the department!
                </p>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e90c9295ef425271531ab339d4a3a0d164941a125463354530e787ded8e5c331?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Contact illustration" className="max-w-full aspect-[1.02] w-[356px]" />
                <div className="flex flex-col pr-9 pl-4 mt-11 font-medium max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140a83f0f5265724dfd939ed9fa92f5bf28e74d08e600f51fa18c9a4951d951c?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="Logo" className="w-64 max-w-full aspect-[5.88]" />
                  <p className="mt-3.5 max-md:max-w-full">Copyright 2024 Dscode | All rights reserved</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <form className="flex flex-col grow mt-20 text-xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" type="text" placeholder="Name" className="justify-center items-start px-5 py-6 whitespace-nowrap shadow-sm bg-stone-50 rounded-[60px] max-md:max-w-full" />
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" type="email" placeholder="Email" className="justify-center items-start px-6 py-6 mt-5 text-center whitespace-nowrap shadow-sm bg-stone-50 rounded-[60px] max-md:px-5 max-md:max-w-full" />
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" placeholder="Your Message..." className="items-start px-6 pt-7 pb-24 mt-7 text-center rounded-3xl shadow-sm bg-stone-50 max-md:px-5 max-md:max-w-full"></textarea>
                <button type="submit" className="justify-center items-center px-16 py-7 mt-6 text-2xl text-center text-black bg-amber-400 shadow-sm rounded-[60px] max-md:px-5 max-md:max-w-full">
                  Contact us now
                </button>
              </form>
              <div className="flex gap-1 self-end mt-16 font-medium tracking-wide text-white max-md:mt-10">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d9ddd3fc888cc8eae7f78f803c5b91ac3b21023dfcec3004eb2227b3fb89ad?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start mt-3.5 aspect-[0.93] w-[37px]" />
                <div className="underline">
                  Designed by <br />
                  <a href="https://twitter.com/AmenaiSabuwala" className="text-white underline" target="_blank" rel="noopener noreferrer">
                    @AmenaiSabuwala
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyComponent;