'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactFormSchema } from '@/lib/schemas'

import { toast } from 'sonner'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { sendEmail } from '@/lib/action'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2, Send } from 'lucide-react'

type Inputs = z.infer<typeof ContactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await sendEmail(data)

    if (result.error) {
      toast.error('An error occurred! Please try again later.')
      return
    }

    toast.success('Message sent successfully!')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(processForm)}>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
        {/* Name */}
        <div className='h-16'>
          <Input
            id='name'
            type='text'
            placeholder='Name'
            autoComplete='given-name'
            {...register('name')}
          />
          {errors.name?.message && (
            <p className='input-error'>{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className='h-16'>
          <Input
            id='email'
            type='email'
            placeholder='Email'
            autoComplete='email'
            {...register('email')}
          />

          {errors.email?.message && (
            <p className='input-error'>{errors.email.message}</p>
          )}
        </div>

        {/* Message */}
        <div className='h-32 sm:col-span-2'>
          <Textarea
            rows={4}
            placeholder='Leave feedback about the site, career opportunities or just to say hello etc.'
            autoComplete='Message'
            className='resize-none'
            {...register('message')}
          />

          {errors.message?.message && (
            <p className='input-error'>{errors.message.message}</p>
          )}
        </div>
      </div>
      <div className='mt-2'>
        <Button
          type='submit'
          disabled={isSubmitting}
          className='w-full disabled:opacity-50'
        >
          {isSubmitting ? (
            <div className='flex items-center'>
              <span>Sending...</span>
              <Loader2 className='ml-2 animate-spin' />
            </div>
          ) : (
            <div className='flex items-center'>
              <span>Send Message</span>
              <Send className='ml-2' />
            </div>
          )}
        </Button>
        <p className='mt-4 text-xs text-muted-foreground'>
          By submitting this form, I agree to the{' '}
          <Link href='/privacy' className='link font-semibold'>
            privacy&nbsp;policy.
          </Link>
        </p>
      </div>
    </form>
  )
}