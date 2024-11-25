import "./globals.css"


export const metadata = {
  title: 'eBay Clone',
  description: 'eBay Clone',
}
 
export default function RootLayout({ children }) {

 return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  )
}
