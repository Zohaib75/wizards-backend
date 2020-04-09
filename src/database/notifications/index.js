import events from '../../events';
import client from './client';
import queryStr from './queryStr';

(async () => {
  await client.connect();
  client.query(queryStr);
  client.query('LISTEN table_update');
  client.on('notification', events);
})();

