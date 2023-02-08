import React from 'react'
import {
  ChevronDownSolid,
  ChevronUpSolid,
  XCloseSolid,
} from '@northlight/icons'
import {
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  TextField,
  useFieldArray,
  useFormContext,
} from '../../../../lib'

export const PageTwo = () => {
  const { fields, append, remove, move } = useFieldArray({ name: 'todo-list' })
  const { getValues } = useFormContext()

  React.useEffect(() => append({ todo: '' }), [])

  const getTodos = () => {
    let string = 'You have to: '
    const todos = getValues()['todo-list']
    if (!todos) return ''
    for (let i = 0; i < todos.length; i += 1) {
      string += todos[i].todo
      string += ', '
    }
    return string
  }

  const addTodo = () => {
    append({ todo: ' ' })
  }

  return (
    <HStack alignItems="start">
      <Stack spacing={ 4 } w="60%">
        <Heading size="lg">Todo</Heading>
        { fields.map((field, index) => (
          <HStack alignItems="end" p={ 2 } key={ field.id }>
            <Stack>
              <Button size="xs" onClick={ () => move(index, index - 1) }>
                <Icon as={ ChevronUpSolid } />
              </Button>
              <Button size="xs" onClick={ () => move(index, index + 1) }>
                <Icon as={ ChevronDownSolid } />
              </Button>
            </Stack>
            <TextField
              name={ `todo-list[${index}].todo` }
              label={ `Todo-${index + 1}` }
            />
            <Button onClick={ () => remove(index) } variant="danger">
              <Icon as={ XCloseSolid } color="red.700" />
            </Button>
          </HStack>
        )) }
        <HStack w="full" spacing={ 4 }>
          <Button onClick={ addTodo }>Add Todo</Button>
          <Button
            onClick={ () => {
              const a = document.createElement('a')
              a.href = `data:application/octet-stream,${encodeURIComponent(
                getTodos()
              )}`
              a.download = 'todos.txt'
              a.click()
            } }
            variant="success"
          >
            Get Todo List
          </Button>
        </HStack>
      </Stack>
      <Stack w="40%" overflow="hidden">
        <Heading size="sm">Todos List:</Heading>
        <Text p={ 4 } fontSize="xs">
          { getTodos() }
        </Text>
      </Stack>
    </HStack>
  )
}
