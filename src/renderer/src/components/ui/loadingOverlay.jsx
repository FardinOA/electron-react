import { cn } from '../../lib/utils'
import { Loader, Loader2 } from 'lucide-react'
import React from 'react'

const LoadingOverlay = ({ className, iconClass, ...rest }) => {
  return (
    <span
      {...rest}
      className={cn(
        'absolute top-0 left-0 right-0 bottom-0 rounded-md  z-50  backdrop-blur-sm flex justify-center items-center  ',
        className
      )}
    >
      <Loader className={cn('animate-spin-2', iconClass)} />
    </span>
  )
}

export default LoadingOverlay
