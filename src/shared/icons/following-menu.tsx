type FollowingMenuIconProps = {
  color?: string
}

const FollowingMenuIcon = ({ color = '#808191' }: FollowingMenuIconProps) => {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx={11.579}
        cy={6.778}
        r={4.778}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M4 18.201a2.215 2.215 0 0 1 .22-.97c.457-.915 1.748-1.4 2.819-1.62a16.778 16.778 0 0 1 2.343-.33 25.04 25.04 0 0 1 4.385 0c.787.056 1.57.166 2.343.33 1.07.22 2.361.659 2.82 1.62a2.27 2.27 0 0 1 0 1.95c-.459.96-1.75 1.4-2.82 1.61-.772.172-1.555.286-2.343.34-1.188.1-2.38.118-3.57.054-.275 0-.54 0-.815-.055a15.417 15.417 0 0 1-2.334-.338c-1.08-.21-2.361-.65-2.828-1.611A2.28 2.28 0 0 1 4 18.2Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default FollowingMenuIcon
