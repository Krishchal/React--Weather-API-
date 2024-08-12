// async function handlePlaylistRequest() {
//     const accessToken = await tokengs.get('access_token', { namespace: tokengs });
//     const resourceUrl = 'https://livetv-resources.geniustv.geniussystems.com.np/subscriber/livetv/v1/namespaces/107/subscribers/1234567/serial/gl_123456789876504323345-107'; //change this url 
//     const headers = {
//       'Accept': '/',
//       'Accept-Encoding': 'gzip, deflate, br, zstd',
//       'Accept-Language': 'en',
//       'Authorization': Bearer ${accessToken},
//       'Origin': 'https://webtv.nettv.com.np',
//       'Referer': 'https://webtv.nettv.com.np/',
//       'Sec-Ch-Ua-Mobile': '?0',
//       'Sec-Ch-Ua-Platform': '"Windows"',
//       'Sec-Fetch-Dest': 'empty',
//       'Sec-Fetch-Mode': 'cors',
//       'Sec-Fetch-Site': 'cross-site',
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0'
//     };
  
//     const response = await fetch(resourceUrl, { method: 'GET', headers: headers });
//     let m3u8Playlist = '#EXTM3U\n';
//     const responseBody = await response.json();
//     const wmsauthsign = await fetch('https://resources.geniustv.geniussystems.com.np/nimble/wmsauthsign', {
//       method: 'GET',
//       headers: headers
//     }).then(res => res.json()).then(data => data.wmsauthsign);
  
//     const categories = responseBody.result.categories;
//     const categoryChannelMap = responseBody.result.category_channel_map;
//     const channelIdToCategoryIdMap = {};
//     categoryChannelMap.forEach(mapping => {
//       if (mapping.category_id !== 20) { channelIdToCategoryIdMap[mapping.channel_id] = mapping.category_id; }
//     });
  
//     responseBody.result.channels.forEach(channel => {
//       const channelUrl = channel.channel_urls[0].path;
//       const categoryName = categories.find(category => category.id === channelIdToCategoryIdMap[channel.id])?.category || 'Uncategorized';
//       m3u8Playlist += #EXTINF:-1 tvg-id="${channel.id}" tvg-chno="${channel.channel_number}" tvg-name="${channel.name}" tvg-logo="${channel.logo}" group-title="${categoryName}", ${channel.name}\n;
//       m3u8Playlist += ${channelUrl}?wmsAuthSign=${wmsauthsign}\n;
//     });
  
//     const newResponse = new Response(m3u8Playlist, { status: 200, headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Allow-Headers': 'Authorization' } });
  
//     return newResponse;
//   }
