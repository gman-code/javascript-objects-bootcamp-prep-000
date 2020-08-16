var object = plqylist ({});

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(playList, arti, value){
  return Object.assign({}, obj, {[key]: value})
};
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
};
var newObj = Object.assign({}, obj);
function deleteFromObjectByKey(object, key){
  delete newObj[key];
  return newObj
};
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
