import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
