export type Task = {
    id: number;
    name: string;
    parentId?: number;
    isEditing?: string;
};

export interface RootState {
    tasks: Task[];
}

export type Project = {
    id: number;
    name: string;
    tasks: Task[];
    isActive?: number;
    isEditing?: string;
};
