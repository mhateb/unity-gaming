type AddVideoMenuIconProps = {
  color?: string
}

const AddVideoMenuIcon = ({ color = '#808191' }: AddVideoMenuIconProps) => {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7v10M17 12H7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default AddVideoMenuIcon
