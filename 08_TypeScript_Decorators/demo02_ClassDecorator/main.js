"use strict";
require('./node_modules/reflect-metadata/Reflect');
var application_1 = require('./application');
var editordata_decorator_1 = require('./editordata-decorator');
// Look here, we read the metadata
var metadata = Reflect.getMetadata(editordata_decorator_1.EditorDataMetadataKey, application_1.Application);
console.log(metadata.firstname);
console.log(metadata.lastname);
