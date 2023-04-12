type PlayerIconProps = {
  color?: string
}

const PlayerIcon = ({ color = '#FF754C' }: PlayerIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={29} fill="none">
      <path
        fill={color}
        d="M20 14.009c0-.3-.2-.6-.4-.8l-18-13c-.3-.2-.7-.3-1.1-.1-.3.2-.5.5-.5.9v26c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.6-.2l18-13c.2-.2.4-.5.4-.8Z"
      />
    </svg>
  )
}

export default PlayerIcon
