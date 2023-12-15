import { Stack, HStack, Badge, Skeleton, Text } from "@chakra-ui/react"

type ModelResultWithScoreType = {
    modelName: string;
    badgeColor: string;
    result: string;
    score: number;
    status: boolean;
};

const getColor = (score: number) => {
    if (score >= 80) return "green";
    else if(score >= 60) return "blue"
    else if(score >= 40) return "yellow";
    else if(score >= 20) return "orange";
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
                        <Badge colorScheme={entry.badgeColor} p="5px" w="130px" maxW="130px" textAlign="center">{entry.modelName}</Badge>
                        {entry.status ? <Text borderRadius="5px" bg="gray.100" w="full" p="5px" >{entry.result}</Text>
                            : <Skeleton w="full">
                                <Text borderRadius="5px" bg="gray.100" w="full" p="5px">{entry.result}</Text>
                            </Skeleton>}
                        {entry.status ? <Badge colorScheme={getColor(entry.score)} p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">{entry.score}</Badge>
                            : <Skeleton w="fit" p={0}>
                                <Badge colorScheme="blue" p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">{entry.score}</Badge>
                            </Skeleton>}
                    </HStack>
                )
            })}
        </Stack>
    )
}