'use client'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import SmallWithLogoLeft from '../../public/footer'


export default function Home() {
  return (
    <Stack>
      <Box textAlign="center" py={10} px={6} h="90vh">
        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          창통설 E조!!
        </Heading>
        <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </Text>
      </Box>
      <SmallWithLogoLeft />
    </Stack>
  )
}
