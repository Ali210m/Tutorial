import { useEffect } from 'react'
import { SignIn }  from './SignIn'

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
    const previousOverflow = document.body.style.overflow = 'hidden'
    return () =>{
        window.removeEventListener('keydown', handleKey)
        document.body.style.overflow = previousOverflow
    }
    
}, [open, onClose])

if (!open) return null

return (
    <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-panel" onClick={(event) => event.stopPropagation()}> 
            <button className="modal-close" type="button" onClick={onClose}>
                x
            </button>
            <SignIn />
        </div>
    </div>
)
}