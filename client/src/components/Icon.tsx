import * as React from 'react'

interface IProps {
  name: string
  color?: string
  height?: number
  isOpen?: boolean
  [x: string]: any
}

const Icon = ({ name, color, height, isOpen, ...rest }: IProps) => {
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

    case 'arrow':
      return (
        <svg
          viewBox="0 0 20 20"
          preserveAspectRatio="none"
          width={16}
          fill="transparent"
          stroke="#979797"
          strokeWidth="1.1px"
          transform={isOpen ? 'rotate(180)' : ''}
        >
          <path d="M1,6 L10,15 L19,6" />
        </svg>
      )

    case 'x':
      return (
        <svg
          viewBox="0 0 20 20"
          preserveAspectRatio="none"
          width={12}
          fill="transparent"
          stroke="#979797"
          strokeWidth="1.1px"
        >
          <path d="M1,1 L19,19" />
          <path d="M19,1 L1,19" />
        </svg>
      )
    case 'close-circle':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
        </svg>
      )
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      )

    default:
      return null
  }
}

export default Icon
