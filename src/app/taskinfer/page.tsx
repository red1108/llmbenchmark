'use client'
// `app/taskinfer/page.tsx` is the UI for the `/taskinfer` URL
import { Stack, InputGroup, Text, Select, Spacer, Button, HStack, useToast } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import ModelResultWithScore from "../../../public/modelResultWithScore";
import { BsTelegram } from "react-icons/bs";
import { useState } from "react";

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

type TaskType = {
    taskName: string;
    taskId: string;
    taskSize: number; // number of tasks
};
const task_names: TaskType[] = [{
    taskName: "ko_quiz_1",
    taskId: "ko_quiz_1",
    taskSize: 1515,
}, {
    taskName: "ko_quiz_2",
    taskId: "ko_quiz_2",
    taskSize: 185,
}, {
    taskName: "ko_quiz_3",
    taskId: "ko_quiz_3",
    taskSize: 122,
}, {
    taskName: "natural language inference",
    taskId: "nli",
    taskSize: 999,
}, {
    taskName: "korean to number",
    taskId: "number_1",
    taskSize: 999,
}]



export default function Page() {
    

    const [taskName, setTaskName] = useState<string>(task_names[0].taskName);
    const [taskSize, setTaskSize] = useState<number>(task_names[0].taskSize);
    const toast = useToast()
    
    /* useEffect 써서 초기 데이터 불러오기 */

    const handleTaskSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        for(let i=0; i<task_names.length; i++) {
            if(task_names[i].taskId === e.target.value) {
                setTaskName(task_names[i].taskName)
                setTaskSize(task_names[i].taskSize);
                break;
            }
        }
    }

    const handlesubmit = () => {
        toast({
            title: 'Request error',
            description: `Cannot fetch ${taskName} data from server`,
            status: 'warning',
            duration: 3000,
            isClosable: true,
        });
    }

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
                    <Select placeholder={taskName} w="450px" onChange={(e:any) => handleTaskSelect(e)}>
                        {task_names.slice(1).map((entry) => {
                            return (
                                <option value={entry.taskId} key={entry.taskId}>{entry.taskName}</option>
                            )
                        })}
                    </Select>
                    <Spacer />
                    <Select placeholder={"0"} w="250px" maxW="15vw">
                        {[...Array(taskSize-1)].map((_, i) => {
                            return (
                                <option value={i+1} key={i+1}>{i+1}</option>
                            )
                        })}
                    </Select>
                    <Spacer />
                    <Button rightIcon={<BsTelegram />} colorScheme='teal' variant='outline' onClick={handlesubmit}>
                        Submit
                    </Button>
                </InputGroup>
            </Stack>
        </PageLayout>
    )
}