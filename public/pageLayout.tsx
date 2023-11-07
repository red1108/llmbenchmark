import { Button, HStack, Icon, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BsTrophyFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Stack>
            <HStack
                borderBottom="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                p="10px 20px 10px 20px"
                bg={useColorModeValue('white', 'gray.900')}
            >
                <Icon
                    mr="4"
                    fontSize="25"
                    _groupHover={{
                    color: 'white',
                    }}
                    as={BsTrophyFill}
                />
                <Text fontSize="20px" fontFamily="monospace" fontWeight="bold">
                    LeaderBoard
                </Text>
                <Spacer />
                <Button rightIcon={<BiHelpCircle />} bg="transparent"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }} >
                    Help
                </Button>
            </HStack>
            {children}
        </Stack>
    )
}