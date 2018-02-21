import 'whatwg-fetch';
import axios from 'axios';
import SockJS from 'sockjs-client';


const springURL = 'https://server.dayshare.co';
const esURL = 'https://search.dayshare.co/api';



// export const searchParents = (pkg) => {
//     console.log('search package', pkg);
//     fetch(esURL + '/searchParents', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },  
//         body: JSON.stringify(pkg)
//     }).then((response) => {
//         console.log('Res from ES: ', response);
//     }).catch((err) => {
//         console.log('ES Error: ', err);
//     })
// }

export const searchParents = (pkg) => {
    return axios.post(esURL + '/searchParents', pkg)
        .then((res) => {
           return res.data.data.hits.hits;
        }).catch((err) => {
            return err;
        })
}

  export const getParentProfileByUserId = (userId) => {
    console.log('PARENT PROFILE AXIOS CALL!', userId);
    //return axios.get('https://server.dayshare.co/parents/search/findByUserId?userId=' + userId + '&projection=parentFullProjection')
      return axios.get('http://localhost:8080/parents/search/findByUserId?userId=' + userId + '&projection=parentFullProjection')
        .then((res) => {
          console.log('Res from getparent by id', res);
          return res;
        });
  }

  export const getParentProfileByParentId = (parentId) => {
    console.log('get parent by user id callled in API', parentId);
    return axios.get('http://localhost:8080/parents/' + parentId + '?projection=parentFullProjection')
        .then((res) => {
            console.log('Res from get profile by parent id', res);
            return res;
        });
  }


  export const getConversation = (primary, secondary) => {
    
    //return axios.get('https://server.dayshare.co/parents/search/findByUserId?userId=' + userId + '&projection=parentFullProjection')
      return axios.get('http://localhost:8080/messages/search/getConversation?primary=' + primary + '&secondary=' + secondary)
        .then((res) => {
          console.log('Res from getparent by id', res);
          return res.data._embedded.messages;
        });
  }

  export const connectSocket = () => {
    const url = 'ws://localhost:8080/gs-guide-websocket/websocket';
    let client = Stomp.client(url);
    return new Promise(resolve => {
        client.connect({}, (response) => {
            resolve(client);
        })
    })
  }

  export const subscribeToSocket = (client, socketId) => {
    return new Promise(resolve => {

        let subscription =  client.subscribe('/topic/conversation/' + socketId, (message) => {
            console.log('Message from socket: ' + socketId, message);
        });
        console.log('SUBSCRIPTION IN API', subscription);
        resolve (subscription);
    })  
    
  }

  export const getEventsByGroupId = (groupId, parentId) => {
      return axios.get(`http://localhost:8080/api/events/getevents/${groupId}/${parentId}`)
        .then((res) => {
            console.log('resposne from GET EVENTS', res.data);
            return res.data;
            // return assignBlankEvents(day, res.data)
            //     .then((fullEventList) => {
            //         return fullEventList;
            //     })
        })
  }


  export const addEventToCalendar = (event) => {
      return axios.post('http://localhost:8080/events', event)
        .then((res) => {
            console.log('res from add event to calendar', event);
            return res;
        })
  }

  const assignBlankEvents = (day, events) => {
    return new Promise(resolve => {
        for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!events[strTime]) {
                events[strTime] = [];
            }
        }
        resolve(events);
    })
  }

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  export const makeContactList = (sockets, parentId) => {
      return new Promise(resolve => {
          let contactList = [];

          sockets.forEach((socket) => {
              socket.parents.forEach((parent) => {
                  if (parent.parentId !== parentId) {
                    parent.socketId = socket.socketId;
                    contactList.push(parent)
                  }
              })
          })
          resolve(contactList);
      })
  }

  export const getMetadataCategories = () => {
       return axios.get('https://server.dayshare.co/metadataCategories')
        .then((res) => {
            console.log('RES FROM METADATA CATEGORIES', res);
            return res.data._embedded.metadataCategories;
      });
  };


  export const updateChildMetadata = (pkg) => {
      console.log('UPDATE PKG IN API', pkg);
      let copy = Object.assign({}, pkg);
      
      if (copy.modalStatus === 'new') {
        copy.metadataCategory = 'http://localhost:8080/metadataCategories/' + copy.metadataCategory.metadataCategory;
        copy.child = 'http://localhost:8080/children/' + copy.child;
        delete copy.status, copy.metadataId, copy.index;
        return axios.post('http://localhost:8080/childMetadatas', copy)
            .then((res) => {
                return res;
            })
      } else {
          copy.metadataCategory = copy.metadataCategory.metadataCategory;
          const metadataId = copy.metadataId;
          delete copy.status, copy.metadataId, copy.index, copy.child;
          console.log('PACKAGE AFTER DELETE', copy);
          return axios.put('http://localhost:8080/api/childmetadata/editrecord/' + metadataId, copy)
            .then((res) => {
                return res;
            })
      }
  }