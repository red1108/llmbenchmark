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
                                    ko_quiz: 한국어 단어 퀴즈
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            한국인들도 자주 헷갈려하는 한국어 어휘 및 문법에 관한 세부 태스크 8개로 구성되어 있다.
                            LLM의 한국어 구사 능력이 어느 수준인지 확인할 수 있는 태스크이다.

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
                                            <Td>헷갈리는 맞춤법</Td>
                                            <Td>'귀뜸이라도 해주지 그랬어. '에서 '귀뜸'이 바른 말이면 1, '귀띔'이 바른 말이면 2라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>헷갈리는 띄어쓰기</Td>
                                            <Td>'오랜만에 만난 동창들'이 맞는 띄어쓰기면 1, '오랫만에 만난 동창들'이 맞는 띄어쓰기면 2라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어 속담</Td>
                                            <Td>불난 데서 ? 한다에서 ? 에 들어갈 단어로만 대답하시오.</Td>
                                            <Td>불이야</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>단어의 유의어 찾기</Td>
                                            <Td>'버릇없다'와 뜻이 다른 단어는? '염려되다 '이면 1, '무례하다 '이면 2, '염치없다 '이면 3라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어 사자성어</Td>
                                            <Td>낙화유수(落花流水)의 뜻은? '살림이나 세력이 약해져 아주 보잘것없이 됨 '이면 1, '세월이 흐르는 물과 같이 한번 지나면 되돌아오지 않음 '이면 2, '지나간 일이 흔적 없이 사라져 허무함 '이면 3라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>외래어 표기법</Td>
                                            <Td>'카세트'가 옳은 표기면 1, '카새트'가 옳은 표기면 2라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>순우리말 능력</Td>
                                            <Td>서쪽에서 부는 바람을(를) 뜻하는 우리말은? '하늬바람 '이면 1, '샛바람 '이면 2, '마파람 '이면 3라고 대답해.</Td>
                                            <Td>1</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>한국어 신조어 능력</Td>
                                            <Td>'구취'와 가장 관련성이 높은 것은 무엇일까요? '구독자'이면 1, '방청객'이면 2, '손님'이면 3라고 대답하세요.</Td>
                                            <Td>1</Td>
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
                                    number: 한국어 숫자 표현 이해
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            한국어의 수사를 얼마나 잘 알고 활용할 수 있는지를 확인하는 태스크이다.
                            숫자 12를 "십이" 또는 "열둘"로 읽는 태스크와 반대로 수사를 읽고 숫자로 변환하는 태스크로 이루어져 있다.

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
                                            <Td>"구"를 수로 변환해서 대답해. 다른 글자, 문장은 아무것도 대답하지 말고 정답 수 하나만 출력해.</Td>
                                            <Td>9</Td>
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
                                    spelling_correct: 한국어 문장 맞춤법 교정 능력
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            맞춤법이 틀린 문장을 읽고 올바르게 교정하는 태스크이다.
                            LLM이 한국어 어휘와 문법을 얼마나 잘 이해하는지를 종합적으로 판단하기 위해 제작하였다.

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
                                            <Td>맞춤법 교정</Td>
                                            <Td>내가 다음에 제공하는 문장의 맞춤법을 교정한 후 전체 문장을 [ ] 로 감싸서 출력해줘. 북한과남한이서로통일하였으면 좋겠다고 생각합니다.</Td>
                                            <Td>북한과 남한이 서로 통일하였으면 좋겠다고 생각합니다.</Td>
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
                                    nli: 자연어 추론 (Natural Language Inference)
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            주어진 두 문장 사이의 관계를 '서로 일치한다', '서로 모순된다', '서로 관련이 없다' 중에서 파악하는 태스크이다.
                            문장이 내포하고 있는 의미를 분석한 후 비교하는 능력을 검증한다.

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
                                            <Td>자연어 추론</Td>
                                            <Td>전제: 펀딩이 중단되면 취소되지 않은 후원금까지 모두 반환된다.
                                                가설: 펀딩이 중단되면 취소된 후원금만 반환된다.
                                                질문: 이 가설은 전제에 부합해? 부합하면 0, 부합하지 않으면 2, 서로 관계 없는 문장이면 1로 숫자 하나만 출력해.</Td>
                                            <Td>2</Td>
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
                                    reasoning: 추리
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            긴 글을 읽은 후 그 정보를 바탕으로 질문에 답하는 태스크이다.
                            주어진 내용을 이해하고 주어진 정보를 탐색할 수 있는 능력을 확인할 수 있다.
                            글 속에서 질문의 답을 찾을 수 없는 경우도 있으며, 이때는 예상 답안을 출력하면 틀린 것으로 처리한다.

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
                                            <Td>단어를 바꾸어 질문</Td>
                                            <Td>정태성 CJ E&M 영화사업 부문 대표는 이익 규모가 음악업체 등에 비해 상대적으로 작은 데 대해 “국내 최대 영화사로서 위험이 큰 기획과 개발에 투자를 많이 하다 보니 손실도 많이 보기 때문”이라고 설명했다.
                                                흥행에 참패한 강제규 감독의 전쟁 대작 ‘마이웨이’ 등이 그런 경우다.
                                                그는 “이처럼 위험을 감수하는 프로젝트나 글로벌 시장에 도전하는 노력은 알려지지 않은 채 ‘유통을 독과점한 콘텐츠 기업’이라는 부정적인 이미지가 있는 데는 아쉬운 점이 많다”고 지적했다.
                                                그는 또 CJ가 지난 18년간 영화사업을 하면서 충무로에 ‘회계시스템의 투명성’을 확립시키는 데 기여했다고 평가했다.
                                                “과거 충무로에는 모든 회계처리를 간이영수증을 통해 주먹구구식으로 하다 보니 비용이 많이 새나가면서 제작비가 늘어났어요.
                                                CJ가 ‘영화 제작예산 운영가이드’란 매뉴얼을 도입해 비용관리를 하고, 순익이 발생했을 때 제작사 수익분배금을 약속된 기일에 정산해 그다음 달 말일까지 지급하라는 항목을 계약서에 명시하자 이후 다른 투자사들도 따라왔습니다.”
                                                질문: 충무로의 회계처리를 바로잡는데 큰 역할을 한 곳은?</Td>
                                            <Td>CJ</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>여러 문장을 연결하여 추리</Td>
                                            <Td>10년이라는 짧은 시간 동안 국내 광고시장의 선두주자로 성장했습니다.
                                                앞으로 10년은 해외사업 확대와 글로벌 네트워크 강화에 주력할 겁니다.”
                                                현대자동차그룹 계열 광고회사 이노션월드와이드가 오는 17일 창립 열 돌을 맞는다.
                                                2009년부터 이노션을 이끌고 있는 안건희 사장(사진)은 “최근 두바이에 17번째 해외법인을 설립해 ‘전 세계 글로벌 거점 확보’라는 1단계 목표를 달성했다”며 “2025년까지 글로벌 선두 마케팅 회사로 도약한다는 2단계 목표를 위해 매진할 것”이라고 말했다.
                                                2005년 설립된 이 회사는 10년 만에 제일기획(1973년 설립)에 이어 규모 면에서 국내 2위 광고업체가 됐다.
                                                17개국에서 1600여명이 일하는 글로벌 네트워크도 갖췄다.
                                                지난해 광고 취급액 3조5988억원, 매출 7447억원을 기록했으며 연내 주식시장 상장을 추진 중이다.
                                                이노션은 14일 경기 용인 현대차그룹 인재개발원에서 전 직원이 참석하는 기념식을 열고 “해외사업을 강화해 2025년까지 매년 10%씩 성장한다”는 청사진을 발표한다.
                                                국내 광고시장이 연 10조원 규모에서 포화상태에 이른 점을 감안하면 세계화는 이노션 입장에서 ‘제2의 도약’을 위한 필수 과제다.
                                                질문: 이노션월드와이드의 지난해 매출은?</Td>
                                            <Td>7447억원</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>답할 수 없는 문제</Td>
                                            <Td>규슈 등 일본의 일부 지역에 일어난 집중호우의 여파로 인해 일본과 지리적으로 가까운 부산광역시를 중심으로 폭우가 쏟아지면서 이 일대의 토사가 쏟아지는 것을 필두로 지하차도가 침수됨에 따라 통행이 전면적으로 중단되는 것 외에도 저지대의 피해가 큰 것으로 보였다.
                                                그러나 부산광역시에서의 집중호우가 심한 자치구 및 자치군은 남구가 132 mm로 가장 많이 쏟아진 것으로 보였고, 벡스코 주변 도로 등 몇몇 도로가 폭우에 의해 침수되는 피해가 집중되어 있었다.
                                                그 뒤로 대전광역시, 세종특별자치시, 충청남도, 전라남도,전라북도 지역에 비가 내리기 시작하였다.
                                                그러나 7월 12일에는 부안군 위도에 172 mm의 강수량을 기록하였던 것으로 나와 있어, 전라북도 전역에 걸쳐 호우 특보가 내려진 상태이다.
                                                이후에는 대전의 갑천, 광주의 황룡강에도 홍수주의보가 발령되고, 대전의 코스모스아파트 주변도 물바다로 변했으며, 주차하게 되어 있었던 차량까지 침수 피해를 입었던 것으로 보인다.
                                                그 뒤로 남부지방에 내린 집중 호우로 인해 큰 피해를 입었으며, 통영시에서는 국도 제14호선의 산 비탈면까지 무너지면서 상수관이 파손돼 4시간 동안 6,400톤의 흙탕물이 주택가를 덮치는 등 마을을 중심으로 피해를 입었고, 이날 통영시에 내린 비는 7월 12일에서 14일 사이에 걸쳐 184.6 mm, 시간당 최대 25.1 mm의 강우량을 기록하였다.
                                                7월 15일부터 21일까지 잠시 소강상태에 이른 것으로 보인다.
                                                질문: 전국에서 비가 가장 많이 온 곳은?</Td>
                                            <Td>부산광역시</Td>
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
                                    summarization: 요약문 생성
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            긴 글을 읽고 한 문장으로 요약하는 태스크이다.
                            글 속에서 핵심을 파악하는 능력을 측정할 수 있다.
                            예시 요약문과의 유사도를 BERTScore를 이용해 측정한다.

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
                                            <Td>요약문 생성</Td>
                                            <Td>다음 글을 한국어 한 문장으로 요약해줘:
                                                1964년, 영국의 한 방송국은 전국에서 다양한 배경을 가진 7살짜리 아이들을 모아, 7년마다 그 아이들을 만나며 각자의 삶을 추적했다.
                                                인생을 충분히 즐긴 후에 결혼하겠다던 수는 24살이라는 이른 나이에 결혼을 했다가 35살에 싱글 맘이 됐고, 런던의 어린이 보호 시설에서 자란 폴은 자신감 부족으로 어려움을 겪었지만 그런 그를 이해해 주는 아내와 함께 행복한 가정을 이뤘다.
                                                청년 시절에 무심코 정치에 대한 뜻을 내비쳤던 닐은 수년 동안 노숙자 생활을 했지만, 스스로의 예상을 뒤엎고 지역 정치인으로 변신했으며, 언론의 관심이 부담스러워 28세 이후로 이 프로그램에서 빠졌던 피터는 자신의 밴드와 음악을 알리기 위해 다시 출연을 결정했다.
                                                49년 전, 천진난만한 얼굴로 꿈을 이야기했던 어린 아이들은 56살이 된 지금, 그 꿈을 이뤘을까?
                                                다양한 환경에서 태어난, 저마다 다른 성격과 꿈과 인생의 계획을 가진 사람들의 삶의 궤적을 따라가 본다.</Td>
                                            <Td>49년 전에 천진난만한 얼굴로 자신의 꿈을 얘기했던 어린 아이들의 삶의 궤적을 따라가 본다.</Td>
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
                                    translate: 한국어 → 영어 번역 능력
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            주어진 한국어 문장을 영어로 번역하는 능력을 확인한다.
                            모델이 한국어와 영어 입력을 모두 잘 처리할 수 있는지를 확인하기 위해 두 언어간 번역을 잘 할 수 있는지를 측정한다.
                            번역문은 다양한 분야에서 준비하여 각 분야 전문용어를 파악하는 정도도 같이 확인한다.
                            평가는 SacreBLEU 메트릭를 이용해 진행한다.

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
                                            <Td>기술과학</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 당국은 전문가들과 함께 곧바로 복원 작업에 나선다고 덧붙였다.</Td>
                                            <Td>The authorities, along with experts, are working immediately on the restoration, he added.</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>사회과학</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 각 군집의 특성을 파악하고자 독특한 표본선정을 실시하였다.</Td>
                                            <Td>In order to understand the characteristics of each cluster, a unique sample selection was performed.</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>일상생활</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 또, 발표 언어에 대해서 신경을 쓰실 필요는 없습니다.</Td>
                                            <Td>Also, you don't have to pay attention to the language of the presentation.</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>기초과학</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 하지만 이들은 피부의 면역세포와 끊임없이 접촉하면서 면역을 훈련한다.</Td>
                                            <Td>They do, however, develop immunity through regular exposure to skin's immune cells.</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>방송콘텐츠</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 그가 한국 팬들에게 남긴 말이 있다.</Td>
                                            <Td>There is a word he left for Korean fans.</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>인문학</Td>
                                            <Td>다음 문장을 영어로 번역해 줘. 전혀 다른 내용으로 전개되었지만 우리 교육의 역사는 대립과 갈등의 역사로 점철되어 있다.</Td>
                                            <Td>Although it has been developed with completely different content, the history of our education has marked by a history of confrontation and conflict.</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </PageLayout>
    )
}