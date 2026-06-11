import './globals.css';

export const metadata = {
  title: 'Y3z1D Studio',
  description: 'Portfolio and blog'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">{children}</body>
    </html>
  );
}
