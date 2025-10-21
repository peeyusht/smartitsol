export const SCROLL_THRESHOLDS = {
  HEADER_CHANGE: 100,
  FADE_IN_OFFSET: 50,
} as const

export const ANIMATION_DURATIONS = {
  FORM_SUBMIT: 2000,
  SUCCESS_SCROLL_DELAY: 100,
} as const

export const FORM_VALIDATION = {
  NAME_MIN_LENGTH: 2,
  MESSAGE_MIN_LENGTH: 10,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const

export const INTERSECTION_OBSERVER_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
} as const
