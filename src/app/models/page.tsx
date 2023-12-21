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
                            제작: OpenAI
                            학습 데이터: 2021년 9월까지
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
                            제작: Google DeepMind
                            주요 목적: 다목적
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
                            제작: 고려대학교 NLP & AI 연구실, HIAI 연구소
                            파라미터 사이즈: 5.8B / 12.8B
                            학습 데이터: GPT4ALL, GPT-4-LLM, Vicuna, Dolly Dataset
                            주요 목적: Text Generation
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
                            제작: Junbum Lee
                            파라미터 사이즈: 5.8B
                            학습 데이터: Stanford Alpaca Dataset, 네이버 지식in
                            주요 목적: Text Generation
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
                            제작: June Lee
                            파라미터 사이즈: 7B
                            학습 데이터: 대화문
                            주요 목적: Text Generation
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
                            제작: EleutherAI polyglot team
                            파라미터 사이즈: 1.3B
                            학습 데이터: 블로그, 뉴스, 소설, 위키피디아, 사전 등
                            주요 목적: Text Generation
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
                            제작: 한국전자통신연구원
                            파라미터 사이즈: 13B
                            학습 데이터: 개방 데이터
                            주요 목적: Text Generation
                            https://huggingface.co/etri-xainlp/llama2-ko-13b-instruct
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </PageLayout>
    )
}