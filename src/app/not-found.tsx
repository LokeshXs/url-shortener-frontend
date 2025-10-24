
import { Button } from '@/components/ui/button'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center'>
    <div className=' flex flex-col gap-2 items-center'>
          <h2 className=' text-4xl font-semibold max-sm:text-2xl'>Not Found</h2>
      <p className=' text-muted-foreground'>Could not find requested resource</p>
      <Button asChild className='mt-4'><Link href="/">Return Home</Link></Button>
    </div>
    </div>
  )
}