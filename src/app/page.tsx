"use client";
import { Box, Stack } from "@chakra-ui/react";
import PageLayout from "../../public/pageLayout";
import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../../public/dataTable";
import { useEffect, useState } from "react";
import Papa from "papaparse";

type UnitConversion = {
  taskName: string;
  gpt35turbo: number;
  kullm58b: number;
  kullm128b: number;
  llama2ko128b: number;
  kovicuna128b: number;
};


const columnHelper = createColumnHelper<UnitConversion>();

const initialColumns = [
  columnHelper.accessor("taskName", {
    cell: (info) => info.getValue(),
    header: "Task Name"
  })
];


export default function Home() {
  const [columns, setColumns] = useState<any>(initialColumns); // TODO: set columns to be the columns from the CSV file
  const [scoreData, setScoreData] = useState<any>([{}]);

  useEffect(() => {
    // JSON 파일 로드
    fetch("/score.csv") // 경로를 실제 파일 경로로 수정해야 합니다.
      .then((response) => console.log(response))
      .catch((error) => console.error("Error loading data:", error));

    Papa.parse("/score.csv", {
      download: true,
      complete: function (results: { data: string[][] }) {
        let newData = [];
        for (let i = 1; i < results.data.length; i++) {
          let obj: { [key: string]: string } = {};
          let MAX = 0;
          for(let j=0; j<results.data[i].length; j++){
            if(Number(results.data[i][j]) > MAX){
              MAX = Number(results.data[i][j]);
            }
          }
          let secondMAX = 0;
          for(let j=0; j<results.data[i].length; j++){
            if(Number(results.data[i][j]) > secondMAX && Number(results.data[i][j]) < MAX){
              secondMAX = Number(results.data[i][j]);
            }
          }

          for (let j = 0; j < results.data[i].length; j++) {
            let Num = Number(results.data[i][j]);
            if(Number.isNaN(Num)) obj[results.data[0][j].replace(".","-")] = results.data[i][j];
            if (Num == MAX) obj[results.data[0][j].replace(".","-")] = ""+Num+".";
            else if(Num == secondMAX) obj[results.data[0][j].replace(".","-")] = ""+Num+"*";
            else obj[results.data[0][j].replace(".","-")] = ""+Num;
          }
          newData.push(obj);
        }
        setScoreData(newData);

        const columnHelper = createColumnHelper<any>();
        const columns = [columnHelper.accessor("task_name", {
          cell: (info) => info.getValue(),
          header: "Task Name",
        })]
        for (let i = 1; i < results.data[0].length; i++) {
          columns.push(
            columnHelper.accessor(results.data[0][i].replace(".","-"), {
              cell: (info) => info.getValue(),
              header: results.data[0][i],
              meta: {
                isNumeric: true,
              },
            })
          );
        }
        setColumns(columns);
      },
    });
  }, []);


  return (
    <PageLayout>
      <Stack p="30px">
        <Box
          borderRadius="10px"
          borderColor="gray.200"
          borderWidth="1px"
          overflow="scroll"
        >
          <DataTable columns={columns} data={scoreData} />
        </Box>
      </Stack>
    </PageLayout>
  );
}
