import type { Metadata } from 'next';
import './globals.css';
import {Shell} from '@/components/bakery/shared';
export const metadata:Metadata={title:{default:'Baked by Afshan | Custom Cakes in Karachi',template:'%s | Baked by Afshan'},description:'Custom cakes, cupcakes and thoughtful gift hampers, freshly baked with love in Karachi. Pre-order your personal celebration with Baked by Afshan.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
