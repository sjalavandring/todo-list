export interface taskInfo  {
	id: number,
	taskText: string,
	completed?: boolean,
}

export interface taskListInterface   {
	taskList: taskInfo[];
}

export interface taskProps extends taskListInterface{
	ToggleTaskStatus: (id: number) => void;
}
