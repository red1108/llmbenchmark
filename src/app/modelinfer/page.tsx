'use client'
// `app/modelinfer/page.tsx` is the UI for the `/modelinfer` URL
import { Badge, HStack, Input, InputGroup, InputLeftElement, Skeleton, Spacer, Stack, Text } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import { ChatIcon } from "@chakra-ui/icons";
import ModelResult from "../../../public/modelResult";

type ModelResultType = {
    modelName: string;
    badgeColor: string;
    result: string;
    status: boolean;
};

const datas: ModelResultType[] = [
    {
        modelName: "Chat GPT(3.5)",
        badgeColor: "blue",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        status: true,
    }, {
        modelName: "Chat GPT(4)",
        badgeColor: "green",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        status: true,
    }, {
        modelName: "KoGPT",
        badgeColor: "red",
        result: "안녕하세요 제 이름은 KoGPT 입니다.",
        status: true,
    }, {
        modelName: "ko-alpaca",
        badgeColor: "purple",
        result: "안녕! 내 이름은 ko-alphaca야.",
        status: true,
    }, {
        modelName: "ko-vicuna",
        badgeColor: "gray",
        result: "pending...",
        status: false,
    }, {
        modelName: "polyglot-ko",
        badgeColor: "pink",
        result: "pending...",
        status: false,
    }
]

export default function Page() {

    return (
        <PageLayout>
            <Stack p="50px" h="100vh">
                <ModelResult datas={datas} />
                <InputGroup position="fixed" mt="calc(100vh - 200px)" w="calc(73vw - 100px)">
                    <InputLeftElement pointerEvents='none'>
                        <ChatIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Try any prompt for the model to answer' bg="gray.50" />
                </InputGroup>
            </Stack>
        </PageLayout>
    )
}