import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../config/redux/store'
import { saveUsers } from '../../slices/dashboardSlice'

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
  const users = useAppSelector((state) => state.users)
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Form.UserData>()

  const handleOnCreateUser = async (values: Form.UserData): Promise<void> => {
    try {
      await api.post<Form.UserData>(values)

      const newUser: Dashboard.User = {
        id: users.length + 1,
        name: values.name,
        email: values.email,
        ...generateFakeUser()
      }

      dispatch(saveUsers([...users, newUser]))
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnUpdateUser = async (values: Form.UserData): Promise<void> => {
    if (!currentUser) return

    try {
      const response = await api.put<Form.UserData>(currentUser.id, values)

      const updatedUsers = users.map((user) => {
        if (user.id === currentUser.id) {
          return {
            ...user,
            name: response.name,
            email: response.email
          }
        }

        return user
      })

      dispatch(saveUsers(updatedUsers))
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnSubmit: SubmitHandler<Form.UserData> = async (values) => {
    if (currentUser) {
      handleOnUpdateUser(values)
    } else {
      handleOnCreateUser(values)
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
        <Button type="submit" color="success" css={{ flex: 1 }}>
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
