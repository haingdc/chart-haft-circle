import './circle.css'

const Label: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className='label'>{children}</span>
)

type SemiCircleProps = {
  value: number
  icon: undefined | 'up' | 'down'
}

const Bar: React.FC<SemiCircleProps> = ({ value }) => {
  return <div className='circle'></div>
}

const renderIcon = (icon: any) => {
  switch (icon) {
    case 'up':
      return (
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4 9H11L7.5 4.5L4 9Z' fill='#08bd08'></path>
        </svg>
      )
    case 'down':
      return (
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4 6H11L7.5 10.5L4 6Z' fill='#e65953'></path>
        </svg>
      )
    default:
      return null
  }
}

const SemiCircle: React.FC<SemiCircleProps> = ({ value, icon }) => {
  return (
    <div
      className='semi-donut'
      style={{
        '--fill': 'var(--color)',
        '--percentage': value,
      }}
    >
      <Label>
        {renderIcon(icon)}
        {value}%
      </Label>
    </div>
  )
}
export default SemiCircle
