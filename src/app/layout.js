export const metadata = {
  title: "Nalis Pharmaceutical",
  description: "Online pharmacy.",
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="hkqcx7Bfmo1QvJO"
        />
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}