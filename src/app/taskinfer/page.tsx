'use client'
// `app/taskinfer/page.tsx` is the UI for the `/taskinfer` URL
import { Stack, InputGroup, Text, Select, Spacer, Button, HStack } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import ModelResultWithScore from "../../../public/modelResultWithScore";
import { BsTelegram } from "react-icons/bs";

type ModelResultWithScoreType = {
    modelName: string;
    badgeColor: string;
    result: string;
    score: number;
    status: boolean;
};

const datas: ModelResultWithScoreType[] = [
    {
        modelName: "Chat GPT(3.5)",
        badgeColor: "blue",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        score: 81.2,
        status: true,
    }, {
        modelName: "Chat GPT(4)",
        badgeColor: "green",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        score: 89.2,
        status: true,
    }, {
        modelName: "KoGPT",
        badgeColor: "red",
        result: "안녕하세요 제 이름은 KoGPT 입니다.",
        score: 51.9,
        status: true,
    }, {
        modelName: "ko-alpaca",
        badgeColor: "purple",
        result: "안녕! 내 이름은 ko-alphaca야.",
        score: 48.0,
        status: true,
    }, {
        modelName: "ko-vicuna",
        badgeColor: "gray",
        result: "pending...",
        score: 0,
        status: false,
    }, {
        modelName: "polyglot-ko",
        badgeColor: "pink",
        result: "pending...",
        score: 0,
        status: false,
    }
]

export default function Page() {
    return (
        <PageLayout>
            <Stack p="50px" h="100vh">
                <HStack spacing="20px" fontFamily="monospace">
                    <Text p="5px" w="130px" maxW="130px" textAlign="center">Model name</Text>
                    <Text w="full" textAlign="center">Model output</Text>
                    <Text p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">Score</Text>
                </HStack>
                <ModelResultWithScore datas={datas} />
                <InputGroup position="fixed" mt="calc(100vh - 200px)" w="calc(73vw - 100px)">
                    <Select placeholder='테스크 분류 선택' w="400px">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Spacer />
                    <Select placeholder='테스크 선택' w="400px">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Spacer/>
                    <Button rightIcon={<BsTelegram />} colorScheme='teal' variant='outline'>
                        Submit
                    </Button>
                </InputGroup>
            </Stack>
        </PageLayout>
    )
}