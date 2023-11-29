"use client";
// `app/modelinfer/page.tsx` is the UI for the `/modelinfer` URL
import {
  Badge,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Skeleton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import { ChatIcon } from "@chakra-ui/icons";
import ModelResult from "../../../public/modelResult";
import { useEffect, useRef, useState } from "react";

type ModelResultType = {
  modelName: string;
  badgeColor: string;
  result: string;
  status: boolean;
};

const initialModelResult: ModelResultType[] = [ 
  {
    modelName: "GPT-3",
    badgeColor: "blue",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "gpt-3.5-turbo",
    badgeColor: "blue",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "GPT-4",
    badgeColor: "green",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "KoGPT",
    badgeColor: "red",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "ko-alpaca",
    badgeColor: "purple",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "ko-vicuna",
    badgeColor: "gray",
    result: "ㅤ",
    status: true,
  },
  {
    modelName: "polyglot-ko",
    badgeColor: "pink",
    result: "ㅤ",
    status: true,
  },
];

const modelNameAPIMapper: {[id:string]:string} = {
    "gpt-3.5-turbo": "gpt-3.5-turbo",
    "GPT-4": "gpt-4"
}

const inferOpenAI = (modelName: string, question: string) => {

  const data = JSON.stringify({
    model: modelName,
    messages: [
      { role: "system", content: "" },
      { role: "user", content: question },
    ],
  });

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer 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", //+process.env.OPENAI_API_KEY,
    },
    body: data,
  }).then((response) => response.json());
};

export default function Page() {
  const inputRef = useRef();
  const [result, setResult] = useState<ModelResultType[]>(initialModelResult);

  const handleSubmit = (event:any) => {
    const msg = inputRef.current.value;
    inputRef.current.value = "";

    
    for(let i=0; i<result.length; i++) {
        result[i].status = false;
        result[i].result = "ㅤ"
    }
    setResult(result);

    for(let i=0; i<result.length; i++) {
        if(result[i].modelName === "gpt-3.5-turbo" || result[i].modelName === "GPT-4") {
            inferOpenAI(modelNameAPIMapper[result[i].modelName], msg)
            .then(res => {
                let newresult = [...result];
                newresult[i].result = res.choices[0].message.content;
                newresult[i].status = true
                setResult(newresult);
            }).catch(error => console.log('error : ', error));
        }
    }

    event.preventDefault();

  };

  return (
    <PageLayout>
      <Stack p="50px" h="100vh">
        <ModelResult datas={result} />
        <form onSubmit={handleSubmit}>
          <InputGroup
            position="fixed"
            mt="calc(100vh - 500px)"
            w="calc(73vw - 100px)"
          >
            <InputLeftElement pointerEvents="none">
              <ChatIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Try any prompt for the model to answer"
              bg="gray.50"
              ref={inputRef}
            />
          </InputGroup>
        </form>
      </Stack>
    </PageLayout>
  );
}
