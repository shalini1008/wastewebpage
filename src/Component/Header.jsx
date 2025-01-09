import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {[
        { label: "Home", icon: "M3 9.5L12 2.5L21 9.5V20.5H15V14.5H9V20.5H3V9.5Z", link: "/" },
        { label: "Snap & Sell", icon: "M12 2C7.03 2 3 6.03 3 11C3 15.97 7.03 20 12 20C16.97 20 21 15.97 21 11C21 6.03 16.97 2 12 2ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z", link: "/snap-and-sell" },
        { label: "Products", icon: "M20.49 8.93L12.99 3.86L5.51 8.93L5.5 15.07L12.99 20.14L20.49 15.07L20.49 8.93Z", link: "/products" },
        { label: "Schedule", icon: "M7 10H5V8H7V10ZM11 10H9V8H11V10ZM15 10H13V8H15V10ZM19 10H17V8H19V10ZM7 14H5V12H7V14ZM11 14H9V12H11V14ZM15 14H13V12H15V14ZM19 14H17V12H19V14ZM17 20H7C5.9 20 5 19.1 5 18V7C5 5.9 5.9 5 7 5H9V3H15V5H17C18.1 5 19 5.9 19 7V18C19 19.1 18.1 20 17 20Z", link: "/schedule" },
        { label: "Education", icon: "M12 2L2 7L12 12L22 7L12 2ZM12 22V14L2 9L12 14L22 9L12 22Z", link: "/education" },
        { label: "Login", icon: "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C8.67 14 5.68 15.34 4 17.5V20H20V17.5C18.32 15.34 15.33 14 12 14Z", link: "/login" },
      ].map((item) => (
        <Typography
          as="li"
          key={item.label}
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d={item.icon} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <a href={item.link} className="flex items-center">
            {item.label}
          </a>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 mx-auto max-w-screen-xl p-2">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 text-xl font-bold"
        >
         {/* <img src="/logo.jpg" alt="BinBandhu" style={{ width: "70px", height: "70px" }} /> */}
          <span>BinBandhu</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block"
        >
          <span>Contact Us</span>
        </Button>
        <IconButton
          variant="text"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6L18 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6H20M4 12H20M4 18H20"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}

export default Header;
