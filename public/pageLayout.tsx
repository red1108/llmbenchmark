'use client'
import { Button, HStack, Icon, Spacer, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { BiHelpCircle } from "react-icons/bi";
import { usePathname } from 'next/navigation'
import { BsChatLeftTextFill, BsDiagram3Fill, BsLightbulbFill, BsTrophyFill, BsUiChecksGrid } from 'react-icons/bs'

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pageMapper = {
        '/': {title: 'LeaderBoard', icon: BsTrophyFill},
        '/taskinfer': {title: 'Test the Tasks', icon: BsUiChecksGrid},
        '/modelinfer': {title: 'Test the Models', icon: BsChatLeftTextFill},
        '/models': {title: 'The Models', icon: BsLightbulbFill},
        '/tasks': {title: 'The Tasks', icon: BsDiagram3Fill}
    }
    const pathname = usePathname()
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
                    as={pageMapper[pathname as keyof typeof pageMapper].icon}
                />
                <Text fontSize="20px" fontFamily="monospace" fontWeight="bold">
                    {pageMapper[pathname as keyof typeof pageMapper].title}
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