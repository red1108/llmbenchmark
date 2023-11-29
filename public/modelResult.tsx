import { Stack, HStack, Badge, Skeleton, Text } from "@chakra-ui/react"

type ModelResultType = {
    modelName: string;
    badgeColor: string;
    result: string;
    status: boolean;
};

export default function ModelResult({datas}: {datas: ModelResultType[]} ) {
    return (
        <Stack>
            {datas.map((entry) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = entry.badgeColor
                return (
                    <HStack spacing="20px" key={entry.modelName}>
                        <Badge colorScheme={entry.badgeColor} p="5px" w="130px" maxW="130px" textAlign="center">{entry.modelName}</Badge>
                        {entry.status ? <Text borderRadius="5px" bg="gray.100" w="full" p="5px">{entry.result}</Text>
                            : <Skeleton w="full">
                                <Text borderRadius="5px" bg="gray.100" w="full" p="5px">{entry.result}</Text>
                            </Skeleton>}
                    </HStack>
                )
            })}
        </Stack>
    )
}