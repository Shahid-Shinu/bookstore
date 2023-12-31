'use client'
import { useState } from 'react'
import { TextInput, rem, Fieldset, PasswordInput, Button } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import Link from 'next/link'

const Login = () => {
  const AtIcon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const LockIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit() {
    console.log(userName, password)
  }

  return (
    <div className='h-screen flex items-center justify-center'>
    <Fieldset className='w-1/2 flex flex-col space-y-4' legend="Personal information" variant="filled" radius="lg">
      <TextInput 
        leftSectionPointerEvents="none"
        leftSection={AtIcon} 
        label="Username" 
        placeholder='Enter Username'
        value={userName}
        onChange={(event) => setUserName(event.currentTarget.value)}
      />
      <PasswordInput 
        leftSection={LockIcon} 
        label="Password" 
        placeholder="Enter Password" 
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button className='bg-indigo-500' onClick={onSubmit}>Submit</Button>
    <span>Don't have an account? <Link className='text-blue-500 underline' href='/signup'>signup</Link></span>
    </Fieldset>
    </div>
  )
}

export default Login