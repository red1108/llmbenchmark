'use client'
import {
    Accordion, Box, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";

// `app/tasks/page.tsx` is the UI for the `/tasks` URL
export default function Page() {
    return (
        <PageLayout>
            <Box p="50px">
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    한국어 단어 퀴즈 데이터셋
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            이 데이터셋은 ~~

                            <TableContainer bg="gray.50" borderRadius="10px" mt="20px" mb="10px">
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>Subtask type</Th>
                                            <Th>Prompt</Th>
                                            <Th>Answer</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>수를 한국어로 변환</Td>
                                            <Td>수 1는 한국어로 얼마야? 다른 글자, 문장은 아무것도 대답하지 말고 정답 글자 하나만 출력해.</Td>
                                            <Td>일, 하나</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어를 수로 변환</Td>
                                            <Td>""구""를 수로 변환해서 대답해. 다른 글자, 문장은 아무것도 대답하지 말고 정답 수 하나만 출력해."</Td>
                                            <Td>9</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어 분수 표현 이해</Td>
                                            <Td>228분의 151을 수로 바꾸어서 출력해줘</Td>
                                            <Td>151/228</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    한국어 숫자 표현 이해 데이터셋
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            한국어를 잘 이해하기 위해선 그 내부에 표현된 숫자를 잘 이해하는 것도 중요하다.
                            한국어의 숫자 표현은 "십이", "열둘" 등등 같은 수를 표현하는 방식이 두 개 이상인 경우들이 흔햐게 존재한다.
                            LLM은 한국어 문장 속에서 한국어로 표현된 숫자를 이해해야 그 문장 전체를 이해할 수 있기 때문에 고안한 Task이다.

                            <TableContainer bg="gray.50" borderRadius="10px" mt="20px" mb="10px">
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>Subtask type</Th>
                                            <Th>Prompt</Th>
                                            <Th>Answer</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>수를 한국어로 변환</Td>
                                            <Td>수 1는 한국어로 얼마야? 다른 글자, 문장은 아무것도 대답하지 말고 정답 글자 하나만 출력해.</Td>
                                            <Td>일, 하나</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어를 수로 변환</Td>
                                            <Td>""구""를 수로 변환해서 대답해. 다른 글자, 문장은 아무것도 대답하지 말고 정답 수 하나만 출력해."</Td>
                                            <Td>9</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어 분수 표현 이해</Td>
                                            <Td>228분의 151을 수로 바꾸어서 출력해줘</Td>
                                            <Td>151/228</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontWeight="bold">
                                    KoGPT
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </PageLayout>
    )
}