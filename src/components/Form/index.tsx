import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Input } from '../Input'
import { Flex } from '../Primitives'

type Props = {
  user?: Dashboard.User
}

export const Form = ({ user }: Props): JSX.Element => {
  const navigate = useNavigate()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Form.UserData>()

  const handleOnSubmit: SubmitHandler<Form.UserData> = (values) => {
    console.log(values)
  }

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email
      })
    }
  }, [user, reset])

  return (
    <Flex
      as="form"
      css={{ flexDirection: 'column', gap: '$3' }}
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Input
        label="Name:"
        {...register('name', {
          required: 'This field is required.'
        })}
        error={errors.name}
      />
      <Input
        label="Email:"
        type="email"
        {...register('email', {
          required: 'This field is required.'
        })}
        error={errors.email}
      />

      <Flex
        css={{
          mt: '$3',
          gap: '$2',
          width: '200px',
          alignSelf: 'flex-end',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          type="button"
          color="warning"
          css={{ flex: 1 }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button type="submit" color="success" css={{ flex: 1 }}>
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
