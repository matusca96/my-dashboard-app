import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../config/redux/store'
import { incrementTotalUsers, saveUsers } from '../../slices/dashboardSlice'

import * as api from '../../services/api'

import { Button } from '../Button'
import { Input } from '../Input'
import { Flex } from '../Primitives'

import { generateFakeUser } from '../../utils/generateFakeUser'

type Props = {
  user?: Dashboard.User
}

export const Form = ({ user: currentUser }: Props): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { users, totalUsers } = useAppSelector((state) => state)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Form.UserData>()

  const handleOnSubmit: SubmitHandler<Form.UserData> = async (values) => {
    try {
      if (currentUser) {
        await api.put<Form.UserData>(values)

        const updatedUsers = users.map((user) => {
          if (user.id === currentUser.id) {
            return {
              ...user,
              name: values.name,
              email: values.email
            }
          }

          return user
        })

        dispatch(saveUsers(updatedUsers))
        navigate(-1)
      } else {
        await api.post<Form.UserData>(values)

        const newUser: Dashboard.User = {
          id: totalUsers + 1,
          name: values.name,
          email: values.email,
          ...generateFakeUser()
        }

        dispatch(saveUsers([...users, newUser]))
        dispatch(incrementTotalUsers(1))
        navigate(-1)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        email: currentUser.email
      })
    }
  }, [currentUser, reset])

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
        <Button
          isLoading={isSubmitting}
          type="submit"
          color="success"
          css={{ flex: 1 }}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
