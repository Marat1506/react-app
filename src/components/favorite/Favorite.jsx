import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DateRange } from "@mui/icons-material";
import afisha from "./afisha.png";

export default function Favorite() {
  const [tasks, setTasks] = useState({
    'Лекции': [{title:"Лекция Как побороть стеснение", date:"08.04 в 18:00"}],
    'Групповая терапия': [{title:"Говорим о фобиях", date:"12.04 в 19:00"}, {title:"Тревога", date:"16.04 в 18:00"}],
    'Индивидуальные сессии': [{title:"Встреча с психологом", date:"18.04 в 17:00"}],
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("lectures");
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleAddTask = () => {
    const newTask = {
      title: taskText,
      date: taskDate,
    };

    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedCategory]: [...prevTasks[selectedCategory], newTask],
    }));

    setOpenDialog(false);
    setSelectedCategory("lectures");
    setTaskText("");
    setTaskDate("");
  };

  const handleDeleteTask = (category, index) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[category].splice(index, 1);
      return updatedTasks;
    });
  };

  

    return (
      <Box sx={{ maxWidth: "600px", margin: "auto", padding: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <DateRange />
          <img src={afisha} alt="" width="180" height="180" />
          <Button variant="outlined" size="large" onClick={() => setOpenDialog(true)}>
            Добавить
          </Button>
        </Box>
        <Box>
          {Object.keys(tasks).map((category) => (
            <Box key={category} sx={{ textAlign: "left", marginBottom: "16px" }}>
              <Typography variant="h5">{category}</Typography>
              {tasks[category].map((task, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography>{`${task.title} - ${task.date}`}</Typography>
                  <Button onClick={() => handleDeleteTask(category, index)} variant="outlined" color="error" size="small">
                    Удалить
                  </Button>
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Добавить задачу</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <InputLabel id="category-label">Категория</InputLabel>
              <Select
                labelId="category-label"
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {Object.keys(tasks).map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Задача"
              fullWidth
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              sx={{ marginBottom: "16px" }}
            />
            <TextField
              label="Дата и время"
              type="data"
              fullWidth
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
            <Button onClick={handleAddTask}>Добавить</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }