"use strict";
require("./node_modules/reflect-metadata/Reflect");
exports.EditorDataMetadataKey = "EditorDataKey";
function EditorData(data) {
    return function TheReal(target) {
        Reflect.defineMetadata(exports.EditorDataMetadataKey, data, target);
    };
}
exports.EditorData = EditorData;
