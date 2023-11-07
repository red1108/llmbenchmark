'use client'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import PageLayout from '../../public/pageLayout'


export default function Home() {
  return (
    <PageLayout>
      <Stack>
        <Box textAlign="center" py={10} px={6}>
          <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
          <Heading as="h2" size="xl" mt={6} mb={2}>
            창통설 E조!!
          </Heading>
          <Text color={'gray.500'}>
            여기에 랭킹이 들어갑니다
          </Text>
        </Box>
      </Stack>
    </PageLayout>
  )
}
