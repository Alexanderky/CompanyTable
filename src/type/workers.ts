export type Worker = {
    id: number;
    name: string;
    surname: string;
    parentId: number;
    selected: boolean
    post: string
}

export type StateWorker = {
    workers: Worker[]
}

export type WorkerId = Worker['id']