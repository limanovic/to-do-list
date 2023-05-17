export type Task = {
    id: number;
    name: string;
    isEditing?: string;
};

export interface RootState {
    tasks: Task[];
}
