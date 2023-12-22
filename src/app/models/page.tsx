'use client'
import { Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";

// `app/models/page.tsx` is the UI for the `/models` URL
export default function Page() {
    return (
        <PageLayout>
            <Box p="50px">
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    GPT-3.5 Turbo
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            GPT-3.5 Turbo는 OpenAI에서 제작한 언어 모델로, 자연어와 코드를 이해하고 생성하는 데 주 목적을 두고 있다.
                            2021년 9월까지의 데이터를 학습하였으며, Chat Completions API를 이용한 채팅에 최적화되어 있다.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    Gemini Pro
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Gemini Pro는 Google DeepMind에서 제작한 언어 모델로, MMLU(Massive Multitask Language Understanding) 태스크에서 인간 전문가를 뛰어넘는 성과를 낸 것으로 알려져 있다.
                            2023년 12월 6일에 공개된 모델이다.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    KULLM-5.8B, KULLM-12.8B
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            고려대학교 NLP & AI 연구실 및 HIAI 연구소에서 제작한 모델로, 5.8B와 12.8B 파라미터의 두 모델을 모두 활용하였다.
                            GPT4ALL, GPT-4-LLM, Vicuna, Dolly Dataset 등의 데이터를 학습하였다.<br/>
                            https://huggingface.co/nlpai-lab/kullm-polyglot-5.8b-v2
                            https://huggingface.co/nlpai-lab/kullm-polyglot-12.8b-v2
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    KoAlpaca-Polyglot-5.8B
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            제작자는 Junbum Lee이며, 파라미터 사이즈는 5.8B이다. Stanford Alpaca Dataset과 네이버 지식in의 데이터를 학습하였다.<br/>
                            https://huggingface.co/beomi/KoAlpaca-Polyglot-5.8B
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    KoVicuna-7B
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            제작자는 June Lee이며, 파라미터 사이즈는 7B이다. 대화문의 데이터를 주로 학습한 모델이다.<br/>
                            https://huggingface.co/junelee/ko_vicuna_7b
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    Polyglot-Ko-1.3B
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            EleutherAI polyglot team에서 제작한 1.3B 규모의 모델이다.
                            학습 데이터는 한국어 블로그, 뉴스, 소설, 위키피디아, 사전 등이다.<br/>
                            https://huggingface.co/EleutherAI/polyglot-ko-1.3b
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    LLaMA2-13B
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            한국전자통신연구원에서 제작하였으며, 파라미터 사이즈는 13B이다. 개방된 데이터를 이용해 학습을 진행하였다.<br/>
                            https://huggingface.co/etri-xainlp/llama2-ko-13b-instruct
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </PageLayout>
    )
}