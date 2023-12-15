'use client'
// `app/taskinfer/page.tsx` is the UI for the `/taskinfer` URL
import { Stack, InputGroup, InputLeftElement, Input, Select, Spacer, Button } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import ModelResult from "../../../public/modelResult";
import { ArrowForwardIcon, ChatIcon } from "@chakra-ui/icons";
import { BsTelegram } from "react-icons/bs";
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
        // 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
    )
}