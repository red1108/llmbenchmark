"use client";
import { Box, Stack, Wrap, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import PageLayout from "../../../public/pageLayout";
import Papa from "papaparse";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
  

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const CHART_COLORS = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(101, 103, 107)",
  pink: "rgb(255, 99, 132)",
};
const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
  CHART_COLORS.pink,
];
const Utils = {
  "CHART_COLORS": CHART_COLORS,
  "NAMED_COLORS": NAMED_COLORS,
  // assign a color for each model
  chartColor: (modelName: string) => {
    switch (modelName) {
      case 'gpt-3.5-turbo':
        return CHART_COLORS.red;
      case 'kullm5.8b':
        return CHART_COLORS.blue;
      case 'kullm12.8b':
        return CHART_COLORS.yellow;
      case 'llama2_13b':
        return CHART_COLORS.green;
      case 'ko_vicuna_7b':
        return CHART_COLORS.purple;
      default:
        return CHART_COLORS.grey;
    }
  }
};

type Score = {
    taskName: string;
    modelName: string;
    score: number;
};

export default function Page() {
  const [modelNames, setModelNames] = useState<string[]>(["kullm12.8b","kullm5.8b","gpt-3.5-turbo","ko_vicuna_7b","llama2_13b"]);
  const [taskNames, setTaskNames] = useState<string[]>(["ko_quiz_1", "ko_quiz_2","ko_quiz_3", "ko_quiz_4", "ko_quiz_5", "ko_quiz_6", "ko_quiz_7", "number_1", "number_2", "number_3", "reasoning", "spelling_correct", "summarization", "translation"]);
  const [completeData, setCompleteData] = useState<Score[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>(modelNames);
  const [selectedTasks, setSelectedTasks] = useState<string[]>(taskNames);
  const [filteredData, setFilteredData] = useState<Score[]>([]);

  // Data for the chart
  const [chartData, setChartData] = useState({
    labels: taskNames,
    datasets:[{}],
  });

  const updateChartData = () => {
    const filteredChartData = selectedModels.map((model) => ({
      label: model,
      backgroundColor: Utils.chartColor(model),
      borderColor: Utils.chartColor(model),
      borderWidth: 1,
      data: filterChartDataByModel(model),
    }));
  
    setChartData({
      labels: selectedTasks,
      datasets: filteredChartData,
    });
  };

  // Create a function to parse the CSV data into the desired structure
  const parseCsvData = (data: Array<Object>) => {
    // Get the model names from an item in the data array
    const modelNames = Object.keys(data[0]).slice(1);
    setModelNames(modelNames);
    // Create an array for task names
    const taskNames : string[] = [];
    // Create a new array of objects to store the parsed data
    const parsedModelData: Score[] = [];
    // Iterate through each row in the CSV file
    data.forEach((row) => {
      // Iterate through the model names and map the task scores to models
      modelNames.forEach((modelName) => {
          // Add the task score to the model's task scores
          parsedModelData.push({
            taskName: row['task_name'],
            modelName,
            score: row[modelName],
          });
          if (!taskNames.includes(row['task_name'])) taskNames.push(row['task_name']);
      });
    });
    setTaskNames(taskNames);
    setSelectedModels(modelNames);
    setSelectedTasks(taskNames);
    setFilteredData(parsedModelData);
    return parsedModelData;
  };

  // Filter chart data by model
  const filterChartDataByModel = (modelName: string) => {
    const filtered = filteredData.filter((item) => item.modelName === modelName);
    const sortedData = filtered.sort((a, b) => {
      if (a.taskName > b.taskName) return 1;
      else return -1;
    });
    return sortedData.map((item) => item.score);
  };

  // Fetch the CSV data
  useEffect(() => {
    // Parse the CSV data and update state
    fetch('/score.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            // Process the parsed data (result.data) and store it in state
            const parsedData = result.data;
            const taskNames = Object.keys(parsedData[0] as object);
            setTaskNames(taskNames);
            setCompleteData(parseCsvData(parsedData as Array<Object>));
          },
        });
      });
  }, []);

  // Filter the data by selected models
  useEffect(() => {
    // order selected models by name
    setSelectedModels(selectedModels.sort());
    setFilteredData(
      completeData.filter((item) => selectedModels.includes(item.modelName))
    );
    updateChartData();
  }, [selectedModels]);

  // Filter the data by selected tasks
  useEffect(() => {
    setSelectedTasks(selectedTasks.sort());
    setFilteredData(
      completeData.filter((item) => selectedTasks.includes(item.taskName))
    );
    updateChartData();
  }, [selectedTasks]);

  // Update the chart data when the filtered data changes
  useEffect(() => {
    updateChartData();
  }, [filteredData, selectedTasks, selectedModels]);


  return (
    <PageLayout>
      <Box p="50px">
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {modelNames.map((modelName) => (
            <Checkbox
            defaultChecked={true}
            value={modelName} 
            key={modelName}
            onChange={(e) => {setSelectedModels(
              selectedModels.includes(modelName)
              ? selectedModels.filter((item) => item !== modelName)
              : selectedModels.concat(modelName)
              )}}
            >{modelName}</Checkbox>
          ))}
        </Stack>
        <Wrap spacing = '5px'>
          {taskNames.map((taskName) => (
            <Checkbox value={taskName}
            defaultChecked={true}
            key={taskName}
            onChange = {(e) => {setSelectedTasks(
              selectedTasks.includes(taskName)
              ? selectedTasks.filter((item) => item !== taskName)
              : selectedTasks.concat(taskName)
              )}}
            >{taskName}</Checkbox>
          ))}
        </Wrap>
        <Bar options={options} data={chartData} />
      </Box>
    </PageLayout>
  );
}


/** 
 * 
 * 1. Connect to source data and parse it to desired format
 * 2. Make chart responsive by task and model
 * 3. Create selections for tasks and models -> chakra ui checkboxes
 * TODO: 
 * 4. Create radar charts for each model -> task score max to 100
 * 5. Create a table for each task, recommending the top 3 models
 */