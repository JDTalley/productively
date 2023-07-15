import './global.css';
import { montserrat } from './fonts';

export const metadata = {
  title: 'Productively',
  description: 'Get Productive',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
