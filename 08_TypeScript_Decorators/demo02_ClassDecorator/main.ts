import './node_modules/reflect-metadata/Reflect';
import { Application } from './application';
import { EditorDataMetadataKey, EditorDataItem } from './editordata-decorator';

// Look here, we read the metadata
let metadata = Reflect.getMetadata(EditorDataMetadataKey, Application) as EditorDataItem;

console.log(metadata.firstname);
console.log(metadata.lastname);
