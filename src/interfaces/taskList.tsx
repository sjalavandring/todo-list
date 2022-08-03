export interface taskInfo {
	taskText: string,
	completed?: boolean,
}

export interface taskList  {
	taskList: taskInfo[];
}
