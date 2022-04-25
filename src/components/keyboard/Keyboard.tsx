import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'
import { ENTER_TEXT, DELETE_TEXT, RELOAD } from '../../constants/strings'
import { localeAwareUpperCase } from '../../lib/words'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    }
    else if (value === 'Reset') {
        window.location.reload()
    }
    else {
      onChar(value)
    }
  }
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if (key.length === 1 && key >= '0' && key <= '9') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        {['1', '2', '3'].map((key) => (
          <Key
            value={key}
            key={key}
            width={60}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['4', '5', '6'].map((key) => (
          <Key
            value={key}
            key={key}
            width={60}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center mb-1">
        {['7', '8', '9'].map((key) => (
          <Key
            value={key}
            key={key}
            width={60}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {['0'].map((key) => (
          <Key
            value={key}
            key={key}
            width={60}
            onClick={onClick}
            status={charStatuses[key]}
            isRevealing={isRevealing}
          />
        ))}
           <Key width={60} value="DELETE" onClick={onClick}>
          {DELETE_TEXT}
        </Key>
        <Key width={60} value="ENTER" onClick={onClick}>
          {ENTER_TEXT}
        </Key>
        <Key width={60} value="Reset" onClick={onClick}>
        {RELOAD}
        </Key>
     
      </div>
      
    </div>
  )
}
