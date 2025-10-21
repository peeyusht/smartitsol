import { useState, FormEvent } from 'react'
import { FORM_VALIDATION, ANIMATION_DURATIONS } from '../constants'

interface FormData {
  name: string
  email: string
  company?: string
  service: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function useContactForm(onSuccess?: () => void) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {}

    if (!data.name || data.name.length < FORM_VALIDATION.NAME_MIN_LENGTH) {
      errors.name = 'Please enter your full name'
    }

    if (!data.email || !FORM_VALIDATION.EMAIL_REGEX.test(data.email)) {
      errors.email = 'Please enter a valid email address'
    }

    if (!data.message || data.message.length < FORM_VALIDATION.MESSAGE_MIN_LENGTH) {
      errors.message = 'Please provide more details (at least 10 characters)'
    }

    return errors
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors({})
    setIsSuccess(false)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData) as unknown as FormData

    // Validate
    const validationErrors = validateForm(data)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)

      // Focus first error
      const firstErrorField = form.querySelector(
        `[name="${Object.keys(validationErrors)[0]}"]`
      ) as HTMLElement
      firstErrorField?.focus()

      return
    }

    // Submit
    setIsSubmitting(true)

    try {
      // Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATIONS.FORM_SUBMIT))

      setIsSuccess(true)
      form.reset()
      onSuccess?.()

      // Scroll to success message
      setTimeout(() => {
        const successMsg = document.querySelector('.form-success')
        successMsg?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, ANIMATION_DURATIONS.SUCCESS_SCROLL_DELAY)
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    errors,
    isSubmitting,
    isSuccess,
    handleSubmit
  }
}
