"use client";
// `app/modelinfer/page.tsx` is the UI for the `/modelinfer` URL
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import { ChatIcon } from "@chakra-ui/icons";
import ModelResult from "../../../public/modelResult";
import { useEffect, useRef, useState } from "react";





type ModelResultType = {
  modelName: string;
  badgeColor: string;
  result: string;
  ready: boolean;
};

const initialModelResult: ModelResultType[] = [
  {
    modelName: "gpt-3.5-turbo",
    badgeColor: "blue",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "gemini-pro",
    badgeColor: "green",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "kullm-5.8b",
    badgeColor: "orange",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "KoGPT",
    badgeColor: "red",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "ko-alpaca",
    badgeColor: "purple",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "ko-vicuna",
    badgeColor: "gray",
    result: "ㅤ",
    ready: true,
  },
  {
    modelName: "polyglot-ko",
    badgeColor: "pink",
    result: "ㅤ",
    ready: true,
  },
];

const modelNameAPIMapper: { [id: string]: string } = {
  "gpt-3.5-turbo": "gpt-3.5-turbo",
  "GPT-4": "gpt-4",
  "gemini-pro": "gemini-pro",
};

export default function Page() {
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [result, setResult] = useState<ModelResultType[]>(initialModelResult);

  const inferOpenAI = (modelName: string, question: string) => {
    const data = JSON.stringify({
      model: modelName,
      messages: [
        { role: "system", content: "" },
        { role: "user", content: question },
      ],
    });
    let x = 's';
    x += 'k-';
    x += "uKeacWQ9XKgOanxBn3mtT3B"
    x += "lbkFJUHMzPAMPfTSmq4QtYPW2"
    console.log("api : ", x);

    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization:
          `Bearer ${x}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .catch((error) => toast({ description: error }));
  };

  const inferGemini = async (prompt: string) => {
    const { GoogleGenerativeAI } = require("@google/generative-ai"); 
    const genAI = new GoogleGenerativeAI("AIzaSyCXLO8hcnNrkIqlmMeNHRZOFKGXwHYWYIM");
    const model = genAI.getGenerativeModel({model:"gemini-pro"});
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  };

  const inferKullm = (prompt: string) => {
    const data = JSON.stringify({
      model: "nlpai-lab/kullm-polyglot-5.8b-v2",
      prompt: `아래는 작업을 설명하는 명령어입니다. 요청을 적절히 완료하는 응답을 작성하세요.\n\n### 명령어:\n${prompt}\n\n### 응답:\n`,
      max_tokens: 1024,
      temperature: 0,
    });

    return fetch("http://polaris.snu.ac.kr:8123/v1/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .catch((error) => {
        toast({
          description:
            "polaris.snu.ac.kr:8123 model nlpai-lab/kullm-polyglot-5.8b-v2 not found",
          status: "error",
        });
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (inputRef == null || inputRef.current == null) return;
    const msg = inputRef.current.value;
    inputRef.current.value = "";

    let newResult = [...result];

    for (let i = 0; i < result.length; i++) {
      newResult[i].ready = false;
      newResult[i].result = "ㅤ";
    }

    setResult(newResult);

    toast({
      description: "Request successfully submitted",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    for (let i = 0; i < result.length; i++) {
      if (result[i].modelName === "gpt-3.5-turbo") {
        inferOpenAI(modelNameAPIMapper[result[i].modelName], msg)
          .then((res) => {
            let newResult = [...result];
            newResult[i].result = res.choices[0].message.content;
            newResult[i].ready = true;
            setResult(newResult);
          })
          .catch((error) => console.log("openai error : ", error));
      } else if (result[i].modelName === "kullm-5.8b") {
        inferKullm(msg)
          .then((res) => {
            let newResult = [...result];
            console.log(res.choices[0].text);
            newResult[i].result = res.choices[0].text;
            newResult[i].ready = true;
            setResult(newResult);
          })
          .catch((error) => console.log("kullm error : ", error));
      } else if(result[i].modelName === "gemini-pro") {
        inferGemini(msg)
          .then((res) => {
            let newResult = [...result];
            newResult[i].result = res;
            newResult[i].ready = true;
            setResult(newResult);
          })
          .catch((error) => console.log("gemini error : ", error));
      }
    }
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
