export type taskInfo = {
	id: number,
	taskText: string,
	completed?: boolean,
}

export type taskList =  {
	taskList: taskInfo[];
}
