import './globals.css'

export const metadata = {
  title: 'Y3z1D Portfolio',
  description: 'Portfolio and blog by Y3z1D',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
