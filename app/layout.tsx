import './globals.css'
import Provider from './contexts/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        <Provider>
          <main>
            {children}
          </main>
        </Provider>
      </body>
  </html>
  )
}
