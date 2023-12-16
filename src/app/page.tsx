'use client'
import { Box, Stack } from '@chakra-ui/react'
import PageLayout from '../../public/pageLayout'
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../../public/dataTable';


type UnitConversion = {
  taskName: string;
  gpt35turbo: number;
  kullm58b: number;
  kullm128b: number;
  llama2ko128b: number;
};

const data: UnitConversion[] = [
  {
    taskName: "ko_quiz_1",
    gpt35turbo: 32.5,
    kullm58b: 31.1,
    kullm128b: 35.2,
    llama2ko128b: 38.6
  },
  {
    "taskName": "ko_quiz_2",
    gpt35turbo: 45.2,
    kullm58b: 48.9,
    kullm128b: 41.5,
    llama2ko128b: 53.7
  },
  {
    "taskName": "ko_quiz_3",
    gpt35turbo: 28.7,
    kullm58b: 36.5,
    kullm128b: 32.1,
    llama2ko128b: 29.4
  },
  {
    "taskName": "ko_quiz_4",
    gpt35turbo: 49.3,
    kullm58b: 42.8,
    kullm128b: 47.6,
    llama2ko128b: 50.2
  },
  {
    "taskName": "ko_quiz_5",
    gpt35turbo: 36.8,
    kullm58b: 41.3,
    kullm128b: 39.2,
    llama2ko128b: 44.5
  },
  {
    "taskName": "ko_quiz_6",
    gpt35turbo: 54.1,
    kullm58b: 49.7,
    kullm128b: 52.3,
    llama2ko128b: 58.9
  },
  {
    "taskName": "ko_quiz_7",
    gpt35turbo: 43.6,
    kullm58b: 38.4,
    kullm128b: 45.8,
    llama2ko128b: 40.2
  },
  {
    "taskName": "number_1",
    gpt35turbo: 62.3,
    kullm58b: 59.8,
    kullm128b: 63.7,
    llama2ko128b: 61.1
  },
  {
    "taskName": "number_2",
    gpt35turbo: 55.6,
    kullm58b: 58.9,
    kullm128b: 52.4,
    llama2ko128b: 56.7
  },
  {
    "taskName": "number_3",
    gpt35turbo: 67.4,
    kullm58b: 70.2,
    kullm128b: 68.5,
    llama2ko128b: 65.9
  },
  {
    "taskName": "reasoning",
    gpt35turbo: 88.1,
    kullm58b: 90.7,
    kullm128b: 87.3,
    llama2ko128b: 89.5
  },
  {
    "taskName": "spelling_correct",
    gpt35turbo: 79.2,
    kullm58b: 82.4,
    kullm128b: 77.8,
    llama2ko128b: 80.6
  },
  {
    "taskName": "summarization",
    gpt35turbo: 50.7,
    kullm58b: 48.3,
    kullm128b: 53.6,
    llama2ko128b: 49.2
  },
  {
    "taskName": "translation",
    gpt35turbo: 73.4,
    kullm58b: 71.8,
    kullm128b: 75.2,
    llama2ko128b: 72.6
  }
];


const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("taskName", {
    cell: (info) => info.getValue(),
    header: "Task Name"
  }),
  columnHelper.accessor("gpt35turbo", {
    cell: (info) => info.getValue(),
    header: "gpt-3.5-turbo",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("kullm58b", {
    cell: (info) => info.getValue(),
    header: "kullm-polyglot-5.8b",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("kullm128b", {
    cell: (info) => info.getValue(),
    header: "kullm-polyglot-12.8b",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("llama2ko128b", {
    cell: (info) => info.getValue(),
    header: "llama2-ko-12.8b",
    meta: {
      isNumeric: true
    }
  })
];


export default function Home() {
/*
  const [scoreData, setScoreData] = useState<DataType | null>(null);
  
  useEffect(() => {
    // JSON 파일 로드
    fetch('/score.json') // 경로를 실제 파일 경로로 수정해야 합니다.
      .then(response => response.json())
      .then((jsonData: DataType) => {
          setScoreData(jsonData);
          console.log(jsonData);
          console.log(Object.keys(jsonData));
          console.log(Object.keys(jsonData["gpt-3.5-turbo"]));
      })
      .catch(error => console.error('Error loading data:', error));
  }, []);
  
  // TODO: useEffect to fetch ranking data
*/
  return (
    <PageLayout>
      <Stack p="30px">
        <Box borderRadius="10px" borderColor="gray.200" borderWidth="1px" overflow="hidden">
          <DataTable columns={columns} data={data}/>
        </Box>
      </Stack>
    </PageLayout>
  )
}
