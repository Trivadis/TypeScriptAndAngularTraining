import './node_modules/reflect-metadata/Reflect';

export const EditorDataMetadataKey = "EditorDataKey";

export function EditorData(data: EditorDataItem) {
    return function TheReal(target: Function) {
        Reflect.defineMetadata(EditorDataMetadataKey, data, target);
    }
}

export interface EditorDataItem {
    firstname: string;
    lastname: string;
}