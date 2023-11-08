'use client'
import { Box, Stack } from '@chakra-ui/react'
import PageLayout from '../../public/pageLayout'
import { createColumnHelper } from '@tanstack/react-table';
import { DataTable } from '../../public/dataTable';

type UnitConversion = {
  modelName: string;
  task1: number;
  task2: number;
  task3: number;
  task4: number;
  overall: number;
};

const data: UnitConversion[] = [
  {
    modelName: "Chat GPT(3.5)",
    task1: 61.5,
    task2: 25.4,
    task3: 68.5,
    task4: 22.4,
    overall: 44.5,
  },
  {
    modelName: "Chat GPT(4)",
    task1: 92.9,
    task2: 70.48,
    task3: 85.5,
    task4: 88.4,
    overall: 84.5,
  },
  {
    modelName: "KoGPT",
    task1: 39.9,
    task2: 50.3,
    task3: 21.5,
    task4: 35.4,
    overall: 36.5,
  },
  {
    modelName: "ko-alpaca",
    task1: 23.9,
    task2: 60.3,
    task3: 31.5,
    task4: 25.4,
    overall: 35.5,
  },
  {
    modelName: "ko-vicuna",
    task1: 19.9,
    task2: 40.3,
    task3: 21.5,
    task4: 30.4,
    overall: 25.5,
  }
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
  columnHelper.accessor("modelName", {
    cell: (info) => info.getValue(),
    header: "Model Name"
  }),
  columnHelper.accessor("task1", {
    cell: (info) => info.getValue(),
    header: "Task 1",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("task2", {
    cell: (info) => info.getValue(),
    header: "Task 2",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("task3", {
    cell: (info) => info.getValue(),
    header: "Task 3",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("task4", {
    cell: (info) => info.getValue(),
    header: "Task 4",
    meta: {
      isNumeric: true
    }
  }),
  columnHelper.accessor("overall", {
    cell: (info) => info.getValue(),
    header: "overall",
    meta: {
      isNumeric: true
    }
  })
];


export default function Home() {

  // TODO: useEffect to fetch ranking data

  return (
    <PageLayout>
      <Stack p="30px">
        <Box borderRadius="10px" borderColor="gray.200" borderWidth="1px" overflow="hidden" mt="20vh">
          <DataTable columns={columns} data={data} />
        </Box>
      </Stack>
    </PageLayout>
  )
}
