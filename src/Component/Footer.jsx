import { Typography } from "@material-tailwind/react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 fixed;
left-0
bottom-0
right-0">
      <div className="container mx-auto px-6 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Brand Information */}
          <div>
            <Typography
              as="a"
              href="/"
              variant="h6"
              color="white"
              className="mb-4 cursor-pointer"
            >
              BinBandhu
            </Typography>
            <Typography variant="small" color="gray">
              Bringing sustainability and convenience together with our Snap & Sell platform. Discover, learn, and recycle for a better tomorrow.
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="small" className="mb-3 font-semibold text-white">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", link: "/" },
                { label: "Snap & Sell", link: "/snap-and-sell" },
                { label: "Products", link: "/products" },
                { label: "Schedule", link: "/schedule" },
                { label: "Education", link: "/education" },
                { label: "Profile", link: "/profile" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.link}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <Typography variant="small" className="mb-3 font-semibold text-white">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-2">
              <li>Email: support@gmail.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: 123 Green Street, Sustainability City</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center justify-between pt-4">
          <Typography variant="small" className="text-center text-gray-500">
            © 2025 BinBandhu. All rights reserved.
          </Typography>
          <div className="flex gap-4">
            {/* Social Media Icons */}
            {[
              {
                href: "https://facebook.com",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.483V14.708h-3.13v-3.62h3.13V8.412c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.099 2.796.143v3.244h-1.92c-1.505 0-1.796.716-1.796 1.763v2.31h3.588l-.467 3.62h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                ),
              },
              {
                href: "https://twitter.com",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557a9.965 9.965 0 01-2.828.775 4.933 4.933 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.717 0-4.923 2.208-4.923 4.917 0 .386.044.762.127 1.122C7.728 8.84 4.1 6.691 1.671 3.149a4.895 4.895 0 00-.666 2.475 4.917 4.917 0 002.188 4.095 4.904 4.904 0 01-2.23-.616v.061c0 2.28 1.623 4.181 3.77 4.612a4.952 4.952 0 01-2.224.084 4.926 4.926 0 004.604 3.422A9.864 9.864 0 010 21.543 13.944 13.944 0 007.548 24c9.14 0 14.307-7.721 14.307-14.422 0-.219-.005-.438-.014-.654A10.181 10.181 0 0024 4.557z" />
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com",
                svg: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.225 0H1.771C.792 0 0 .782 0 1.747V22.2c0 .96.792 1.752 1.771 1.752h20.451c.978 0 1.773-.792 1.773-1.752V1.747C24 .782 23.203 0 22.225 0zM7.12 20.452H3.586V9.097h3.534v11.355zM5.353 7.64a2.052 2.052 0 110-4.104 2.052 2.052 0 110 4.104zM20.452 20.452h-3.535v-5.482c0-1.306-.026-2.99-1.82-2.99-1.822 0-2.101 1.421-2.101 2.891v5.581h-3.534V9.097h3.396v1.551h.048c.473-.899 1.628-1.848 3.354-1.848 3.585 0 4.247 2.36 4.247 5.435v6.218z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {item.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
