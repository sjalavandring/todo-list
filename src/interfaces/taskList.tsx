export interface taskInfo  {
	id: number,
	taskText: string,
	completed?: boolean,
}

export interface taskListInterface   {
	taskList: taskInfo[];
}

export interface taskProps {
	taskId?: number;
	ToggleTaskStatus: (id: number) => void;
}
