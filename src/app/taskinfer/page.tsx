'use client'
// `app/taskinfer/page.tsx` is the UI for the `/taskinfer` URL
import { Stack, InputGroup, Text, Select, Spacer, Button, HStack, useToast, Box } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import ModelResultWithScore from "../../../public/modelResultWithScore";
import { BsTelegram } from "react-icons/bs";
import { useEffect, useState } from "react";
import * as Papa from 'papaparse';

type ModelResultWithScoreType = {
    modelName: string;
    badgeColor: string;
    result: string;
    score: number;
    ready: boolean;
};

const datas: ModelResultWithScoreType[] = [
    {
        modelName: "Chat GPT(3.5)",
        badgeColor: "blue",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        score: 81.2,
        ready: true,
    }, {
        modelName: "Chat GPT(4)",
        badgeColor: "green",
        result: "안녕하세요 제 이름은 Chat GPT입니다.",
        score: 89.2,
        ready: true,
    }, {
        modelName: "KoGPT",
        badgeColor: "red",
        result: "안녕하세요 제 이름은 KoGPT 입니다.",
        score: 51.9,
        ready: true,
    }, {
        modelName: "ko-alpaca",
        badgeColor: "purple",
        result: "안녕! 내 이름은 ko-alphaca야.",
        score: 48.0,
        ready: true,
    }, {
        modelName: "ko-vicuna",
        badgeColor: "gray",
        result: "pending...",
        score: 0,
        ready: false,
    }, {
        modelName: "polyglot-ko",
        badgeColor: "pink",
        result: "pending...",
        score: 0,
        ready: false,
    }
]

const modelNameMapper: { [key: string]: string } = {
    "gpt-3.5-turbo": "gpt-3.5-turbo",
    "kullm5.8b": "kullm-5.8b",
    "kullm12.8b": "kullm-12.8b",
    "llama2_13b": "llama2-ko-13b",
    "gemini-pro": "gemini-pro",
    "ko_vicuna_7b": "ko_vicuna_7b",
    "KoAlpaca-Polyglot-5.8B": "koalpaca-5.8B",
    "polyglot-ko-1.3b": "polyglot-ko-1.3b"
}

const badgeColorMapper: { [key: string]: string } = {
    "gpt-3.5-turbo": "blue",
    "kullm5.8b": "green",
    "kullm12.8b": "red",
    "llama2_13b": "purple",
    "gemini-pro": "yellow",
    "ko_vicuna_7b": "orange",
    "KoAlpaca-Polyglot-5.8B": "gray",
    "polyglot-ko-1.3b": "pink"
}

type TaskType = {
    taskName: string;
    taskId: string;
    taskSize: number; // number of tasks
};
const task_names: TaskType[] = [
    {
        taskName: "ko_quiz_1",
        taskId: "ko_quiz_1",
        taskSize: 1515,
    },
    {
        taskName: "ko_quiz_2",
        taskId: "ko_quiz_2",
        taskSize: 185,
    },
    {
        taskName: "ko_quiz_3",
        taskId: "ko_quiz_3",
        taskSize: 122,
    },
    {
        taskName: "ko_quiz_4",
        taskId: "ko_quiz_4",
        taskSize: 233,
    },
    {
        taskName: "ko_quiz_5",
        taskId: "ko_quiz_5",
        taskSize: 463,
    },
    {
        taskName: "ko_quiz_6",
        taskId: "ko_quiz_6",
        taskSize: 159,
    },
    {
        taskName: "ko_quiz_7",
        taskId: "ko_quiz_7",
        taskSize: 345,
    },
    {
        taskName: "ko_quiz_8",
        taskId: "ko_quiz_8",
        taskSize: 49,
    },
    {
        taskName: "natural language inference",
        taskId: "nli",
        taskSize: 999,
    },
    {
        taskName: "Korean to number",
        taskId: "number_1",
        taskSize: 999,
    },
    {
        taskName: "Number to Korean",
        taskId: "number_2",
        taskSize: 999,
    },
    {
        taskName: "reasoning",
        taskId: "reasoning",
        taskSize: 1000,
    },
    {
        taskName: "spelling_correct",
        taskId: "spelling_correct",
        taskSize: 1000,
    },
    {
        taskName: "summarization",
        taskId: "summarization",
        taskSize: 1000,
    },
    {
        taskName: "translation",
        taskId: "translation",
        taskSize: 900,
    },
];

const taskNameIdMapper: { [id: string]: string } = {
    "ko_quiz_1": "ko_quiz_1",
    "ko_quiz_2": "ko_quiz_2",
    "ko_quiz_3": "ko_quiz_3",
    "ko_quiz_4": "ko_quiz_4",
    "ko_quiz_5": "ko_quiz_5",
    "ko_quiz_6": "ko_quiz_6",
    "ko_quiz_7": "ko_quiz_7",
    "ko_quiz_8": "ko_quiz_8",
    "natural language inference": "nli",
    "Korean to number": "number_1",
    "Number to Korean": "number_2",
    "reasoning": "reasoning",
    "spelling_correct": "spelling_correct",
    "summarization": "summarization",
    "translation": "translation",
};




export default function Page() {

    const [resultStatus, setResultStatus] = useState<ModelResultWithScoreType[]>(datas);
    const [prompt, setPrompt] = useState<string>("예시 프롬프트");
    const [taskName, setTaskName] = useState<string>(task_names[0].taskName);
    const [taskNumber, setTaskNumber] = useState<number>(0);
    const [taskSize, setTaskSize] = useState<number>(task_names[0].taskSize);
    const toast = useToast()

    /* useEffect 써서 초기 데이터 불러오기 */
    const updateResult = () => {
        Papa.parse(`/re-sorted/${taskNameIdMapper[taskName]}.csv`, {
            download: true,
            complete: function (results: { data: Array<Array<string>> }) {
                const newResult: ModelResultWithScoreType[] = [];
                let flag = false;
                for (let i = 0; i < results.data.length; i++) {
                    if (results.data[i][1] === "" + taskNumber) {
                        newResult.push({
                            modelName: modelNameMapper[results.data[i][2]],
                            badgeColor: badgeColorMapper[results.data[i][2]],
                            result: results.data[i][4],
                            score: Number(results.data[i][5]),
                            ready: true,
                        });
                        if (!flag) {
                            flag = true;
                            setPrompt(results.data[i][3]);
                        }
                    }
                }
                setResultStatus(newResult);
            }
        });
    }
    useEffect(() => {
        updateResult();
    }, [])

    const handleTaskSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        for (let i = 0; i < task_names.length; i++) {
            if (task_names[i].taskId === e.target.value) {
                setTaskName(task_names[i].taskName)
                setTaskSize(task_names[i].taskSize);
                break;
            }
        }
    }

    const handlesubmit = () => {
        toast({
            description: `${taskName}/${taskNumber} fetching successful`,
            status: 'success',
            duration: 1000
        });
        updateResult();

    }

    return (
        <PageLayout>
            <Stack p="50px" h="100vh">
                <HStack spacing="20px" fontFamily="monospace">
                    <Text p="5px" w="130px" maxW="130px" textAlign="center">Model name</Text>
                    <Text w="full" textAlign="center">Model output</Text>
                    <Text p="5px" w="50px" minW="50px" maxW="50px" textAlign="center">Score</Text>
                </HStack>
                <ModelResultWithScore datas={resultStatus} />
                <Stack mt="2vh" fontFamily="monospace" >
                    <Text fontSize="lg" fontWeight="bold">Task Prompt</Text>
                    <Box p="20px" bg="gray.900" borderRadius="5px" textColor="white" h="fit" mb="120px">
                        {prompt}
                    </Box>
                </Stack>
                <InputGroup position="fixed" mt="calc(100vh - 200px)" w="calc(73vw - 100px)" p="15px" ml="20px" borderRadius="10px" bg="white">
                    <Select placeholder={taskName} w="450px" onChange={(e: any) => handleTaskSelect(e)}>
                        {task_names.slice(1).map((entry) => {
                            return (
                                <option value={entry.taskId} key={entry.taskId}>{entry.taskName}</option>
                            )
                        })}
                    </Select>
                    <Spacer />
                    <Select placeholder="0" w="250px" maxW="15vw" onChange={(e: any) => { e.preventDefault(); console.log(e.target.value); setTaskNumber(Number(e.target.value)); }}>
                        {[...Array(taskSize - 1)].map((_, i) => {
                            return (
                                <option value={i + 1} key={i + 1}>{i + 1}</option>
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