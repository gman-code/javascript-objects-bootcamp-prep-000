var playlist={};
var playlist={playlist}
var playlist=updatedPlaylist();
 function updatedPlaylist(playlist, artisName, songTitle){
   playlist[artisName]=songTitle
   return playlist
 }
var newObj = Object.assign({}, obj);
function deleteFromObjectByKey(object, key){
  delete newObj[key];
  return newObj
};
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}