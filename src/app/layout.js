export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${classname.variable} ${classname.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Nalis Pharmaceutical",
  description: "Online pharmacy.",
  verification: {"Google site verification": "hkqcx7Bfmo1QvJO"},
  }
