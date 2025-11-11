import {useEffect} from 'react'
import {SignIn }  from './SignIn'

interface SignInModalProps {
    open: boolean
    onClose: () => void
}

export function SignInModal({ open, onClose }: SignInModalProps) {
    useEffect(() =>{
        if (!open) return
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow
    })
}