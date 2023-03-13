type VideoMenuIconProps = {
  color?: string
}

const VideoMenuIcon = ({ color = '#808191' }: VideoMenuIconProps) => {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m17 9.6 1.831-1.319C20.154 7.33 22 8.274 22 9.904v4.191c0 1.63-1.846 2.576-3.169 1.624L17 14.4"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={3}
        y={3}
        width={14}
        height={18}
        rx={4}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default VideoMenuIcon
