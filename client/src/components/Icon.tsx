import * as React from 'react'

interface IProps {
  name: string
  color?: string
  height?: number
  [x: string]: any
}

const Icon = ({ name, color, height, ...rest }: IProps) => {
  switch (name) {
    case 'delete':
      return (
        <svg
          role="button"
          tabIndex={0}
          aria-labelledby="delete-icon-title"
          x="0px"
          y="0px"
          viewBox="0 0 268.476 268.476"
          style={{ height: `${height}rem` }}
          {...rest}
        >
          <title id="delete-icon-title">Delete</title>
          <g>
            <path
              style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: `${color}` }}
              d="M63.119,250.254c0,0,3.999,18.222,24.583,18.222h93.072c20.583,0,24.582-18.222,24.582-18.222l18.374-178.66H44.746L63.119,250.254z M170.035,98.442c0-4.943,4.006-8.949,8.949-8.949c4.943,0,8.95,4.006,8.95,8.949l-8.95,134.238c0,4.943-4.007,8.949-8.949,8.949c-4.942,0-8.949-4.007-8.949-8.949L170.035,98.442zM125.289,98.442c0-4.943,4.007-8.949,8.949-8.949c4.943,0,8.949,4.006,8.949,8.949v134.238c0,4.943-4.006,8.949-8.949,8.949c-4.943,0-8.949-4.007-8.949-8.949V98.442z M89.492,89.492c4.943,0,8.949,4.006,8.949,8.949l8.95,134.238c0,4.943-4.007,8.949-8.95,8.949c-4.942,0-8.949-4.007-8.949-8.949L80.543,98.442C80.543,93.499,84.55,89.492,89.492,89.492zM218.36,35.811h-39.376V17.899C178.984,4.322,174.593,0,161.086,0L107.39,0C95.001,0,89.492,6.001,89.492,17.899v17.913H50.116c-7.914,0-14.319,6.007-14.319,13.43c0,7.424,6.405,13.431,14.319,13.431H218.36c7.914,0,14.319-6.007,14.319-13.431C232.679,41.819,226.274,35.811,218.36,35.811z M161.086,35.811h-53.695l0.001-17.913h53.695V35.811z"
            />
          </g>
        </svg>
      )

    default:
      return null
  }
}

export default Icon
