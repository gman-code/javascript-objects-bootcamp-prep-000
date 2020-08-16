var object = playList ({});

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(playList, artistName,songTitle ){
  return playList.assign({},playList, {[artistName]: songTitle})
};
function destructivelyUpdateObjectWithKeyAndValue(pl, key, value){
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
