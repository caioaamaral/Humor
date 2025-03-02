import { Button, Input, Stack, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { addEntry, getBackendStatus } from '../services/api';

export const HelloWorld = () => {
  const [message, setMessage] = useState('')

  return (
    <Flex 
      width="100%" 
      height="100vh" 
      justifyContent="center" 
      alignItems="center"
    >
      <Stack direction='row' align='center'>
        <Input
          placeholder="how are you felling?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
          colorScheme='blue'
          onClick={async () => {
              await addEntry(message);
              setMessage('');
            }
          }>
            Send
        </Button>
      </Stack>
    </Flex>
  )
}