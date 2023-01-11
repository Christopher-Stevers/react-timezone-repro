import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import TimezoneSelect from 'react-timezone-select';
import {ITimezoneOption} from 'react-timezone-select'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const defaultTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [timezone, setTimezone] = useState(defaultTimezone)
  const handleTimezone = (timezone: ITimezoneOption) =>{
    setTimezone(timezone as unknown as string)
  }
  return (
    <>
      <main >
      <TimezoneSelect value={timezone} onChange={handleTimezone} classNames={{control: ()=>"blue"}} />  
       </main>
    </>
  )
}
