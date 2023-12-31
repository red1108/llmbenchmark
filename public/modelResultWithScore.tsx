import { Stack, HStack, Badge, Skeleton, Text } from "@chakra-ui/react"

type ModelResultWithScoreType = {
    modelName: string;
    badgeColor: string;
    result: string;
    score: number;
    ready: boolean;
};

const getColor = (score: number) => {
    if (score >= 1) return "green";
    else return "red";
}

export default function ModelResultWithScore({datas}: {datas: ModelResultWithScoreType[]} ) {
    return (
        <Stack>
            {datas.map((entry) => {
                // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                const meta: any = entry.badgeColor
                return (
                    <HStack spacing="20px" key={entry.modelName} fontFamily="monospace">
                        <Badge colorScheme={entry.badgeColor} p="5px" w="160px" maxW="160px" textAlign="center">{entry.modelName}</Badge>
                        {entry.ready ? <Text borderRadius="5px" bg="gray.100" w="full" p="5px" >{entry.result}</Text>
                            : <Skeleton w="full">
                                <Text borderRadius="5px" bg="gray.100" w="full" p="5px">{entry.result}</Text>
                            </Skeleton>}
                        {entry.ready ? <Badge colorScheme={getColor(entry.score)} p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">{entry.score}</Badge>
                            : <Skeleton w="fit" p={0}>
                                <Badge colorScheme="blue" p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">{entry.score}</Badge>
                            </Skeleton>}
                    </HStack>
                )
            })}
        </Stack>
    )
}