export type TaskType = {
    id: number;
    name: string;
    isEditing?: string;
};

export interface RootState {
    tasks: TaskType[];
}
