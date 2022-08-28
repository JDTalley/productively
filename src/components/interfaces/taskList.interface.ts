export interface TaskType {
    id: string;
    name: string;
    description: string;
    categories: [CategoryType];
    isComplete: boolean;
};

export interface CategoryType {
    id: string;
    name: string;
    description: string;
};