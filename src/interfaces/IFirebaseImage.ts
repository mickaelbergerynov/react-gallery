export interface IFirebaseStringValue {
    stringValue: string;
}

export interface IFirebaseYnovImages {
    title: IFirebaseStringValue;
    shortDescription: IFirebaseStringValue;
    base64Image: IFirebaseStringValue;
}

export interface IFirebaseFields {
    name: string;
    fields: IFirebaseYnovImages;
}

export interface IFirebaseResponse {
    documents: IFirebaseFields[];
}

export interface IFirebaseImage {
    title: string;
    shortDescription: string;
    base64Image: string;
}

export const getImageFromFields = (fields: IFirebaseFields) => {
    return {
        title: fields.fields.title.stringValue,
        shortDescription: fields.fields.shortDescription.stringValue,
        base64Image: fields.fields.base64Image.stringValue
    } as IFirebaseImage;
}